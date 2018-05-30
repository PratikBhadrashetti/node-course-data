console.log('Starting Server...!!!');

const express = require('express');

var app = express();
const port = process.env.PORT || 3000 ;

app.get('/' , (req , res) => {
    res.status(200).send('<h2>Hello Buddy...!!!</h2>');
});

app.get('/error' , (req , res) => {
	res.status(404).send({
		error_Message : 'Page Not Found...!!!' ,
		app_Name : 'Todo App V1.0'
	});
});

app.get('/users' , (req , res) => {
	res.status(200).send([
	 {name : 'nilesh' , age : 27} , 
	 {name : 'pr@sad' , age : 25} , 
	 {name : 'nihal' , age : 22}
	 ]);
});

app.listen(port , () => {
	console.log(`Server started on port : ${port}...`);
});

module.exports.app = app;