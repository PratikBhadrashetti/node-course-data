console.log('Server Test Started...!!!');

const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server.js');
var {Todo} = require('./../models/todo.js');

beforeEach((done) => {
	Todo.remove().then(() => done());
});


describe('POST /addTodo' , () => {
	
	it('It should add new Todo document in mongodb' , (done) => {
		var text = 'Test todo text';
		var completed = false ;
		
		request(app)
			.post('/addTodo')
			.send({
				text : text ,
				completed : completed
			})
			.expect(200)
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err , res) => {
				if(err){
					return done(err); 
				}
			 
				Todo.find().then((docs) => {
				  expect(docs.length).toBe(1);
				  expect(docs[0].text).toBe(text);
				  done();
				}).catch((error) => done(error));
			});
		});
		
		
	it('It should not create new Todo document with invalid body' , (done) => {
		var text = "";
		var completed = true ; 
		
		request(app)
			.post('/addTodo')
			.send({
				text : text ,
				completed : completed
			})
			.expect(400)
			.end((err , res) => {
				if(err){
					return done(err); 
				}
			 
				Todo.find().then((docs) => {
				  expect(docs.length).toBe(0);
				  done();
				}).catch((error) => done(error));
			});
		});

});