console.log('Starting Express Server...!!!');

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

//"process.env" - an object which contain all environment variables in key-value pairs form. 
const port = process.env.PORT || 3000 ;

var app = express();

//"Views" is the default directory which express server uses for templates to store.
app.set('view engine' ,'hbs');
hbs.registerPartials(__dirname + '/views/partials');



//"next" - used to tell express server that middleware is done with it's functionlity.
app.use((req , res , next) => {
	var now = new Date().toString();
	var log = `${now} : ${req.method} : ${req.url}` ;
	console.log('Log : ' , log);
	
	fs.appendFile('server.log' , log + '\n' , (err) => {
		if(err){
			console.log('Unable to store logs in server.log file...!!!');
		}
	});
	next();
});


// app.use((req , res , next) => {
	// //console.log("inside middleware");
	// res.render('maintenance.hbs' , {
		// page_Title : 'Maintenance Page'
	// });
// });


//'app.use" - to register middleware & we can have as many as middlewares registered with our applcation.
//Middelware helps us to configure - how our express application should work.
//Middleware get executed in the order we call "app.use".
// __dirname - stores path to our project directory... 
app.use(express.static(__dirname + '/public'));



hbs.registerHelper('getCurrentYear' , () => {
	return new Date().getFullYear();
});


hbs.registerHelper('getUpperCase' , (text) => {
	return text.toUpperCase();
});


//Register the "get" request handler(route)...
app.get('/home' , (req , res) => {
	//res.send('<h1>Hey , hello...!!!</h1>');
	res.render('home.hbs' ,{
		page_Title : 'Home Page',
		welcome_Message : 'Welcome To Home Page...'
	 });
});


//"res.render" let us allow to render any templates which one we currently setup with our view engine.
app.get('/about' , (req , res) => {
    res.render('about.hbs' , {
		page_Title : 'About Page',
		name : 'pr@tik',
	    mobile : 1234567890,
		likes:[
			 'Swiming',
			 'Reading'
			]
	});
});


app.get('/projects' , (req , res) => {
    res.render('projects.hbs' , {
		page_Title : 'Projects Page',
		welcome_Message : 'Welcome To Projects Page...'
    });
});


app.get('/error' , (req , res) => {
    res.render('error.hbs' , {
		page_Title : 'Error Page',
		error_Message : 'Macha , idu yako workout aagta illa...!!!'
    });
});



//"app.listen" - Bind the application to a port on our machine...
app.listen(port , () => {
	console.log(`Server started on port ${port}...`);
});