console.log('Todo Collection...!!!');

const mongoose = require('mongoose');

var Todo = mongoose.model('Todo' , {
	text :{
		 type : String ,
		 required : true ,
		 minlength : [6 , 'Minimum 6 letters required...'] ,
		 maxlength : 100 , 
		 trim : true
	},
	completed :{
		 type : Boolean ,
		 required : true ,
		 default : false
	},
	completedat :{
		 type : Number , 
		 default : null
	}
});

//creating instance of Todo.
// var newTodo = new Todo({
	 // text : 'edit this document' ,
	 // completed : true
// });

//save() - this method is responsible for saving the above object in database , 
//which returns the promise.
 // newTodo.save().then((result) => {
	 // console.log('saved record : ' , result);
 // } , (error) => {
	 // console.log('unable to save model...!!!' , error);
 // });

 module.exports = {
	Todo : Todo
 };