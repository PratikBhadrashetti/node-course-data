console.log('Mongo_DB Update Method Started...!!!');

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');
const url = "mongodb://localhost:27017/TodoApp" ;

MongoClient.connect(url , (err , db) => {
	if(err){
		console.log('Unable To Connect MongoDB Server...!!!' , err);
		throw err;
	}
	console.log('Connection Established Successfully To MongoDB Server...!!!');
	
	
	//findOneAndUpdate() - allows us to find the document and update it.
	// const dbo = db.db('TodoApp');
	// dbo.collection('Todos').findOneAndUpdate({
		// _id : new ObjectID('5b0cd18652bf9b8d1b3cac33')		
	// } ,{
		// $set :{
			// completed : false
		// }
	// } , {
		// returnOriginal : false
	// }).then((result) => {
		// console.log('Updated Result : ' , JSON.stringify(result , undefined , 2));
	// });
	
	const dbo = db.db('TodoApp');
	dbo.collection('Users').findOneAndUpdate({
		name : 'pr@tik'	
	} ,{
		$set :{
			name : 'pratik',
			location : '16pur'
		},
		$inc :{
			age : 1
			
		}
	} , {
		returnOriginal : false
	}).then((result) => {
		console.log('Updated Result : ' , JSON.stringify(result , undefined , 2));
	});

	//db.close();
});