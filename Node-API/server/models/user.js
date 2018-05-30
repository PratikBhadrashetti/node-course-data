console.log('User Collection...!!!');

const mongoose = require('mongoose');

var User = mongoose.model('User' , {
	name :{
	   type :  String , 
	   required : true ,
	   minlength : [2 , 'Minimun 2 letters required...'] ,
	   maxlength : 100
	},
	age :{
	   type :  Number , 
	   required : true ,
	   min : [18 , 'Minimun age required is 18...'] ,
	   max : 100
	},
	email :{
	   type :  String , 
	   required : true ,
	   minlength : [12 , 'Minimun 12 letters required...'] ,
	   maxlength : 20 ,
	   trim : true
	},
	password :{
	   type :  String , 
	   required : true ,
	   minlength : [8 , 'Minimun 8 letters required...'] ,
	   maxlength : 20 ,
	   trim : true
	}
});

//creating instance of User.
// var newUser = new User({
	// name : 'prasad' ,
	// age : 25, 
	// email : 'prasad93@gmail.com' , 
	// password : 'prasad@93'
// });

// newUser.save().then((result) => {
	// console.log('User Saved : ' , JSON.stringify(result , undefined , 2));
// } , (error) => {
	// console.log('Unable To Store User...!!!' , error);
// });

module.exports = {
	User : User
}; 