console.log('Server Started...!!!');

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000 ;

var {mongoose} = require('./db/mongoose.js');
var {ObjectID} = require('mongodb');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());


app.get('/' , (req , res) => {
	console.log('Inside GET / API...');
	res.status(200).send('Hello Buddy...!!!');
});

app.get('/getTodos' , (req , res) => {
	console.log('Inside GET /getTodos API...');
	
	Todo.find().then((todos) => {
		//console.log('Result : ' , JSON.stringify(todos , undefined , 2));
		res.status(200).send(JSON.stringify(todos , undefined , 2));
	} , (error) => {
		//console.log('Unable to store document...!!!' , error);
		res.status(400).send(error);
	});
});


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
		res.status(200).send(todo);
	} , (error) => {
		res.status(400).send(error);
	});
});


app.get('/getTodoByText/:text' , (req , res) => {
	console.log('Inside GET /getTodoByText/:text API...');
	console.log('Request Body : ' , req.params.text);
	
	var query = {"text" : req.params.text};
	Todo.find(query).then((todo) => {
		if(!todo){
			res.status(404).send('Record not found...!!!');
		}
		//console.log('Result : ' , JSON.stringify(todo , undefined , 2));
		res.status(200).send(JSON.stringify(todo , undefined , 2));
	} , (error) => {
		//console.log('Unable to store document...!!!' , error);
		res.status(400).send(error);
	}).catch((error) => {
		res.status(400).send(error);
	});
});


app.post('/addTodo' , (req , res) => {
	console.log('Inside POST /addTodo API...');
	console.log('Request Body : ' , req.body);
	var newTodo = new Todo({
		text : req.body.text ,
		completed : req.body.completed
	});
	
	newTodo.save().then((result) => {
		console.log('Result : ' , JSON.stringify(result , undefined , 2));
		res.status(200).send(result);
	} , (error) => {
		//console.log('Unable to store document...!!!' , error);
		res.status(400).send(error);
	});
});


app.listen(port , () => {
	console.log(`Server started on port ${port}...!!!`);
});

module.exports = {
	app : app
};