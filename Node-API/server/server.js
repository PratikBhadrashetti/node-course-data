console.log('Server Started...!!!');

var env = process.env.NODE_ENV || 'development'; 
console.log('Environment Variable : ' , env);

if(env === 'development'){
	process.env.PORT = 3000 ;
	process.env.MONGODB_URI =  'mongodb://localhost:27017/TodoApp' ;
}else if(env === 'test'){
	process.env.PORT = 3000 ;
	process.env.MONGODB_URI =  'mongodb://localhost:27017/TodoAppTest' ;
}

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const port = process.env.PORT ;

var {mongoose} = require('./db/mongoose.js');
var {ObjectID} = require('mongodb');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());

//Home Page...
app.get('/' , (req , res) => {
	console.log('Inside GET / API...');
	res.status(200).send('Hello Buddy...!!!');
});


//To get all resourses...
app.get('/getTodos' , (req , res) => {
	console.log('Inside GET /getTodos API...');
	
	Todo.find().then((todos) => {
		//console.log('Result : ' , JSON.stringify(todos , undefined , 2));
		res.status(200).send({todos});
	} , (error) => {
		//console.log('Unable to store document...!!!' , error);
		res.status(400).send(error);
	});
});


//to get a resourse by id...
app.get('/getTodoById/:id' , (req , res) => {
	console.log('Inside GET /getTodoById/:id API...');
	console.log('Request Body : ' , req.params.id);
	
	var id = req.params.id ;
	if(!ObjectID.isValid(id)){
		res.status(404).send('Id not valid...!!!');
	}
 
	var query = {"_id" : req.params.id};
	Todo.findById(id).then((todo) => {
		if(!todo){
			res.status(404).send('Record not found...!!!');
		}
		res.status(200).send({todo});
	} , (error) => {
		res.status(400).send(error);
	});
});


//To get a resourse by text...
app.get('/getTodoByText/:text' , (req , res) => {
	console.log('Inside GET /getTodoByText/:text API...');
	console.log('Request Body : ' , req.params.text);
	
	var query = {"text" : req.params.text};
	Todo.find(query).then((todo) => {
		if(!todo){
			res.status(404).send('Record not found...!!!');
		}
		//console.log('Result : ' , JSON.stringify(todo , undefined , 2));
		res.status(200).send({todo});
	} , (error) => {
		//console.log('Unable to store document...!!!' , error);
		res.status(400).send(error);
	}).catch((error) => {
		res.status(400).send(error);
	});
});


//To add a resourse...
app.post('/addTodo' , (req , res) => {
	console.log('Inside POST /addTodo API...');
	console.log('Request Body : ' , req.body);
	var newTodo = new Todo({
		text : req.body.text ,
		completed : req.body.completed
	});
	
	newTodo.save().then((result) => {
		//console.log('Result : ' , JSON.stringify(result , undefined , 2));
		res.status(200).send(result);
	} , (error) => {
		//console.log('Unable to store document...!!!' , error);
		res.status(400).send(error);
	});
});


//To update a resourse...
app.patch('/updateTodo/:id' , (req , res) => {
	console.log('Inside PATCH /updateTodo API...');
	console.log('Request Body : ' , req.body);
	
	var id = req.params.id ;
	var body = _.pick(req.body , ['text' , 'completed']); //body - this variable contains subset of user passed values to us so that
														  //we can restrict user from updating any values...
	
	if(!ObjectID.isValid(id)){
		res.status(404).send('Id not valid...!!!');
	}
	
	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime();
	}else{
		body.completed = false ;
		body.completedAt = null ;
	}
	
	//{retutnOriginal : true} == {new : true}
	Todo.findByIdAndUpdate(id , {$set : body} , {new : true}).then((todo) => {
		if(!todo){
			res.status(404).send('Record not found...!!!');
		}
		res.status(200).send({todo});
	}).catch((err) => done(err));
});


//To delete a resourse...
app.delete('/deleteTodo/:id' , (req , res) => {
	console.log('Inside DELETE /deleteTodo/:id API...');
	console.log('Request Body : ' , req.params.id);

	var id = req.params.id ;
	if(!ObjectID.isValid(id)){
		res.status(404).send('Id not valid...!!!');
	}
	
	var query = {"_id" : req.params.id};
	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo){
			res.status(404).send('Record not found...!!!');
		}
		res.status(200).send({todo});
	} , (error) => {
		res.status(400).send(error);
	});
});


app.listen(port , () => {
	console.log(`Server started on port ${port}...!!!`);
});


module.exports = {
	app : app
};