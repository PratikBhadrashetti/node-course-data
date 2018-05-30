console.log('Starting App...!!!');

var db = require('./db.js');

module.exports.handleSignUp = (email , password) => {
	//check if email already exists
	 
	//Save the user to database
	db.saveUser({
		email : email , 
		password : password  
	});
	//Send the welcome email
};  