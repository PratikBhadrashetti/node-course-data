console.log('Mongo_DB Delete Method Started...!!!');

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');
const url = "mongodb://localhost:27017/TodoApp" ;

const {mongoose} = require('./../server/server.js');
const {Todo} = require('./../server/models/todo.js'); 
const {User} = require('./../server/models/user.js');

// MongoClient.connect(url , (err , db) => {
	// if(err){
		// console.log('Unable To Connect MongoDB Server...!!!' , err);
		// throw err;
	// }
	// console.log('Connection Established Successfully To MongoDB Server...!!!');
// });


//It will remove all records from mongodb.
// Todo.remove({}).then((result) => {
	// console.log('Result : ' , result);
// });


Todo.findOneAndRemove({'_id' : '5b0fe3656d1414ca8f821d53'}).then((todo) => {
	if(!todo){
		return console.log('Record not found...!!!');
	}
	 console.log('Todo Removed : ' , todo);
}).catch((error) => {
	 console.log('Something went wrong...!!!' , error);	
}); 



// Todo.findByIdAndRemove('5b0fe1566d1414ca8f821cf0').then((todo) => {
	// if(!todo){
		// return console.log('Record not found...!!!');
	// }
	// console.log('Todo Deleted : ' , todo);
// }).catch((error) => {
	// console.log('Something went wrong...!!!' , error);	
// }); 