console.log('Server Started...!!!');

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000 ;

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());


app.get('/' , (req , res) => {
	console.log('Inside GET / API...');
	res.status(200).send('Hello Buddy...!!!');
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