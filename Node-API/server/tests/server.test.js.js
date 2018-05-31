console.log('Server Test Started...!!!');

const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

var {app} = require('./../server.js');
var {Todo} = require('./../models/todo.js');

beforeEach((done) => {
	Todo.remove().then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
});

const todos = [{
	_id : new ObjectID() ,
	text : 'First test todo'
} , {
	_id : new ObjectID() ,
	text : 'Second test todo'
}];


// describe('POST /addTodo' , () => {
	
	// it('It should add new Todo document in mongodb' , (done) => {
		// var text = 'Test todo text';
		// var completed = false ;
		
		// request(app)
			// .post('/addTodo')
			// .send({
				// text : text ,
				// completed : completed
			// })
			// .expect(200)
			// .expect((res) => {
				// expect(res.body.text).toBe(text);
			// })
			// .end((err , res) => {
				// if(err){
					// return done(err); 
				// }
			 
				// Todo.find().then((docs) => {
				  // expect(docs.length).toBe(1);
				  // expect(docs[0].text).toBe(text);
				  // done();
				// }).catch((error) => done(error));
			// });
		// });
		
		
	// it('It should not create new Todo document with invalid body' , (done) => {
		// var text = "";
		// var completed = true ; 
		
		// request(app)
			// .post('/addTodo')
			// .send({
				// text : text ,
				// completed : completed
			// })
			// .expect(400)
			// .end((err , res) => {
				// if(err){
					// return done(err); 
				// }
			 
				// Todo.find().then((docs) => {
				  // expect(docs.length).toBe(0);
				  // done();
				// }).catch((error) => done(error));
			// });
		// });
// });

describe('GET /getTodo/:id' , () => {
	
	it('It should return todo document' , (done) => {
		var hexId = new ObjectID().toHexString();
		
		request(app)
		 .get(`/getTodoById/${todos[0]._id.toHexString()}`)  //toHexString - converts ObjectID to string
		 .expect(200)
		 .expect((res) => {
			expect(res.body.todo.text).toBe(todos[0].text); 
		 })
		 .end(done);
	});
	
	it('It should return 404 if no todo found' , (done) => {
		var hexId = new ObjectID().toHexString();
		
		request(app)
		 .get(`/getTodoById/${hexId}`)  //toHexString - converts ObjectID to string
		 .expect(404)
		 .end(done);
	});
	
	it('It should return 404 for non-object ids' , (done) => {
		var hexId = new ObjectID().toHexString();
		
		request(app)
		 .get('/getTodoById/123abc')  //toHexString - converts ObjectID to string
		 .expect(404)
		 .end(done);
	});
});