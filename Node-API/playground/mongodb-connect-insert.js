console.log('Mongo_DB Connection Started...!!!');


//const {MongoClient , ObjectID} = require('mongodb');
// var object = new ObjectID();
// console.log('Object Id : ' , object);

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/TodoApp" ;



//Object Destructuring :- allows us to pull-out object properties and create a new variables.
var user = {name : 'pr@sad' , age : 25};
var {name} = user ;
var {age} = user ;

console.log('User Name : ' , name);
console.log('User Age : ' , age);


//MongoClient.connect() - allows us to connect mongo database & it takes 2 arguments :-
//1.URL - to connect a database.
//2.Callback Function - fired once connection has been established or failed.
//Callback Function takes 2 arguments - 1.error - if exists 2.db - which allows us to issue read/write command.
//db.collection('Name_Of_Collection') - Name of collection where we want to insert data(document).
//result.ops - this will store all of the documents which we inserted. 
MongoClient.connect(url , (err , db) => {
	if(err){
		console.log('Unable To Connect MongoDB Server...!!!' , err);
		throw err;
	}
	console.log('Connection Established Successfully To MongoDB Server...!!!');
	
	// const dbo = db.db('TodoApp');
	// dbo.collection('Todos').insertOne({
		// text : 'Something to do' ,
		// completed : false
	// } , (err , result) => {
	// if(err){
		// console.log('Error : ' , err);
		// throw err ;
	// }
	// console.log('Result : ' , JSON.stringify(result.ops , undefined , 2));
	// });
	
	
	// const dbo = db.db('TodoApp');
	// dbo.collection('Users').insertOne({
		// name : 'Arjun' ,
		// age : 25 ,
		// location : 'Mandya'
		// } , (err , result) => {
	// if(err){
		// console.log('Error : ' , err);
		// throw err ;
	// }
	// console.log('Result : ' , JSON.stringify(result.ops , undefined , 2));
	// console.log('Timestamp : ' , result.ops[0]._id.getTimestamp());
	// });
	db.close();
});