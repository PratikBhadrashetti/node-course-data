console.log('Mongo_DB Queries Method Started...!!!');

//MongoDB Native Driver ObjectID
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

 var id = '5b0d646281b230329c599f11';
 if(!ObjectID.isValid(id)){
	 console.log('Id not valid...!!!');
 }

// Todo.find({
	// _id : id
// }).then((todos) => {
	// console.log('find Todos : ' , todos);
// });

// Todo.findOne({
	// _id : id
// }).then((todo) => {
	// if(!todo){
		// return console.log('Id not found...!!!');
	// }
	// console.log('findOne Todo : ' , todo);
// }).catch((error) => console.log(error));

// Todo.findById(id).then((todo) => {
	// if(!todo){
		// return console.log('Id not found...!!!');
	// }
	// console.log('findById Todo : ' , todo);
// }).catch((error) => console.log(error));



User.findById(id).then((user) => {
	if(!user){
		return console.log('User not found...!!!');
	}
	 console.log('findById User : ' , JSON.stringify(user , undefined , 2));
} , (error) => {
	console.log('Error : ' , error);
});