console.log('Mongo_DB Find Method Started...!!!');

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');
const url = "mongodb://localhost:27017/TodoApp" ;

MongoClient.connect(url , (err , db) => {
	if(err){
		console.log('Unable To Connect MongoDB Server...!!!' , err);
		throw err;
	}
	console.log('Connection Established Successfully To MongoDB Server...!!!');
	
	//find() - 'find()' method without any parameter will return all records from specified collection.
	//It will return mongodb cursor , which is not the actual document themselves but , it's a pointer to a documets.
	// const dbo = db.db('TodoApp');
	// dbo.collection('Users').find().toArray().then((docs) => {
		// //console.log('Users Docs : ' , docs);
		// console.log('Users Data : ' , JSON.stringify(docs , undefined , 2));
	// } , (err) => {
		// console.log('Unable To Fetch Data...!!!' , err);
	// });
	
	
	//findOne() method - 'findOne()' method takes query parameter , which is used to decide which all records we want to fetch.
	// const dbo = db.db('TodoApp');
	// const query = {name : 'Arjun'};
	// dbo.collection('Users').findOne(query , (err , result) => {
		// if(err){
			// console.log('User Not Found...!!!' , err);
		// }
		// console.log('User : ' , JSON.stringify(result , undefined , 2));
	// });
	
	// const dbo = db.db('TodoApp');
	// dbo.collection('Users').find({
		// _id : new ObjectID('5b0a9603f3c2b30990c4efbf')
	// }).toArray().then((docs) => {
		// console.log('Users Data : ' , JSON.stringify(docs , undefined , 2));
	// } , (err) => {
		// console.log('Unable To Fetch Data...!!!' , err);
    // });
	
	// const dbo = db.db('TodoApp');
	// dbo.collection('Users').find().count().then((count) => {
		// console.log(`Users Count : ${count}`);
	// });
	
	const dbo = db.db('TodoApp');
	const query = {name : 'Arjun'};
	dbo.collection('Users').find(query).toArray().then((docs) => {
		console.log('Users Data : ' , JSON.stringify(docs , undefined , 2));
	} , (err) => {
		console.log('Unable To Fetch Data...!!!' , err);
	});

	//db.close();
});