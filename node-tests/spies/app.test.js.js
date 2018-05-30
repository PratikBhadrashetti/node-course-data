console.log('Starting App Test...!!!');

const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App Test' , () => {
	
	var db = {
		saveUser : expect.createSpy()
	};
	
	app.__set__('db' , db);
	
	it('It should call spy correctly' , () => {
		//expect.createSpy() - will return a function and that function we'll use for swap-out with real function.
		var spy = expect.createSpy();
		
		//spy();
		//expect(spy).toHaveBeenCalled();
		
		spy('Pradeep' , 23);
		expect(spy).toHaveBeenCalledWith('Pradeep' , 23);
	});
	
	
	it('It should call saveUser with user object' , () => {
		var email = "pratiksb93@gmail.com" ;
		var password =  "pratiksb@93" ;
		
		app.handleSignUp(email , password);
		expect(db.saveUser).toHaveBeenCalledWith({email : email , password : password});
		
	});
});
