console.log('Mongo_DB Delete Method Started...!!!');

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');
const url = "mongodb://localhost:27017/TodoApp" ;

MongoClient.connect(url , (err , db) => {
	if(err){
		console.log('Unable To Connect MongoDB Server...!!!' , err);
		throw err;
	}
	console.log('Connection Established Successfully To MongoDB Server...!!!');
	
	//deleteMany() - allows us to target many documents at a time & remove them.
	// const dbo = db.db('TodoApp');
	// const query = {text : 'hello buddy'};
	// dbo.collection('Todos').deleteMany(query).then((result) => {
		// console.log('Todos Records : ' , result );
	// } , (err) => {
		// console.log('Record Not Found...!!!' , err);
	// });
	
	//deleteOne() - allows us to targer single document at a time & remove it.
	// const dbo = db.db('TodoApp');
	// const query = {text : 'good morning'};
	// dbo.collection('Todos').deleteOne(query).then((result) => {
		// console.log('Todos Records : ' , result );
	// } , (err) => {
		// console.log('Record Not Found...!!!' , err);
	// });

	
	//findOneAndDelete() - allows us to remove individual document & also return removed document. 
	// const dbo = db.db('TodoApp');
	// const query = {text : 'good afternoon'};
	// dbo.collection('Todos').findOneAndDelete(query).then((result) => {
		// console.log('Todos Records : ' , result );
	// } , (err) => {
		// console.log('Record Not Found...!!!' , err);
	// });
	
	const dbo = db.db('TodoApp');
	const query = {name : 'Arjun'};
	dbo.collection('Users').deleteMany(query).then((result) => {
		console.log('Users Records : ' , result );
	} , (err) => {
		console.log('Record Not Found...!!!' , err);
	});
	
	//const dbo = db.db('TodoApp');
	dbo.collection('Users').findOneAndDelete({
		_id : new ObjectID('5b0cda2c52bf9b8d1b3cadb1')
	}).then((result) => {
		console.log('Deleted Record : ' , JSON.stringify(result , undefined , 2));
	} , (err) => {
		console.log('Record Not Found...!!!' , err);
	});
	//db.close();
});