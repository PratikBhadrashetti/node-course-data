console.log('Starting Server Test...!!!');

const app = require('./server').app;
const request = require('supertest');
const expect = require('expect');

// it('it should return hello buddy' , (done) => {
	// request(app)
	// .get('/')     							//URL
	// .expect(200)							//Status Code Assertion
	// .expect('<h2>Hello Buddy...!!!</h2>')   //Response Assertion
	// .end(done);								//End of functionlaity
// });


// it('it should return error' , (done) => {
	// request(app)
	// .get('/error')     						
	// .expect(404)							
	// .expect((res) => {
		// //expect(res.status).toEqual(404);
		// expect(res.body).toInclude({
			// error_Message : 'Page Not Found...!!!' ,
			// app_Name : 'Todo App V1.0'
		// }).toBeA('object');
	// })   								
	// .end(done);			
// });

// it('it should return users array' , (done) => {
	// request(app)
	// .get('/users')     						
	// .expect(200)							
	// .expect((res) => {
		// // expect(res.body).toInclude([
		// // {name : 'nilesh' , age : 27} , 
		// // {name : 'pr@sad' , age : 25} , 
		// // {name : 'nihal' , age : 22}]).toBeA('object');
		// expect(res.body).toInclude({name : 'nilesh' , age : 27}).toBeA('object');
	// })   								
	// .end(done);			
// });
describe('Server Describe Block' , () => {
	describe('GET /' , () => {
		it('it should return hello buddy' , (done) => {
			request(app)
			.get('/')     							//URL
			.expect(200)							//Status Code Assertion
			.expect('<h2>Hello Buddy...!!!</h2>')   //Response Assertion
			.end(done);								//End of functionlaity
		});
	});

describe('GET /users' , () => {
	it('it should return users array' , (done) => {
		request(app)
		.get('/users')     						
		.expect(200)							
		.expect((res) => {
			// expect(res.body).toInclude([
			// {name : 'nilesh' , age : 27} , 
			// {name : 'pr@sad' , age : 25} , 
			// {name : 'nihal' , age : 22}]).toBeA('object');
		expect(res.body).toInclude({name : 'nilesh' , age : 27}).toBeA('object');
		})   								
		.end(done);			
	   });
	});
});


