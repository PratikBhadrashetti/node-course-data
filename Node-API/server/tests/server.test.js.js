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
	"_id" : new ObjectID() ,
	text : 'First test todo'
} , {
	"_id" : new ObjectID() ,
	text : 'Second test todo' ,
	completed : true ,
	completedAt : 333
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

// describe('GET /getTodo/:id' , () => {
	
	// it('It should return todo document' , (done) => {
		// var hexId = todos[1]._id.toHexString();
		
		// request(app)
		 // .get(`/getTodoById/${todos[0]._id.toHexString()}`)  //toHexString - converts ObjectID to string
		 // .expect(200)
		 // .expect((res) => {
			// expect(res.body.todo.text).toBe(todos[0].text); 
		 // })
		 // .end(done);
	// });
	
	// it('It should return 404 if no todo found' , (done) => {
		// var hexId = todos[1]._id.toHexString();
		
		// request(app)
		 // .get(`/getTodoById/${hexId}`)  //toHexString - converts ObjectID to string
		 // .expect(404)
		 // .end(done);
	// });
	
	// it('It should return 404 for non-object ids' , (done) => {
		// var hexId = todos[1]._id.toHexString();
		
		// request(app)
		 // .get('/getTodoById/123abc')  //toHexString - converts ObjectID to string
		 // .expect(404)
		 // .end(done);
	// });
// });


// describe('DELETE /deleteTodo/:id' , () => {
	
	// it('It should delete todo from mongodb' , (done) => {
		// var hexId = todos[1]._id.toHexString();   //toHexString - converts ObjectID to string
		
		// request(app)
		  // .delete(`/deleteTodo/${hexId}`) 
		  // .expect(200)
		  // .expect((res) => {
			  // expect(res.body.todo._id).toBe(hexId);
		  // })
		  // .end((err ,res) => {
			  // if(err){
				// return done(err);
			  // }
			   
			  // Todo.findById(hexId).then((todo) => {
				  // expect(todo).toNotExist();
				  // done();
			  // }).catch((err) => done(err));
		  // });
	// });
	
	 
	// it('It should return 404 if no todo found' , (done) => {
		// var hexId = todos[1]._id.toHexString();
		
		// request(app)
		   // .delete(`/deleteTodo/${hexId}`)  
		   // .expect(404)
		   // .end(done);
	// });
	
	 
	// it('It should return 404 for non-object ids' , (done) => {
		// var hexId = todos[1]._id.toHexString();
		
		// request(app)
		   // .delete('/deleteTodo/123abc')  
		   // .expect(404)
		   // .end(done);
	// });
// });


describe('PATCH /updateTodo/:id' , () => {
	
	it('It should update and return todo from mongodb database' , (done) => {
			var hexId = todos[0]._id.toHexString();
			var text = 'This is updated text'
			
			request(app)
			.patch(`/updateTodo/${hexId}`)
			.send({
				completed : true ,
				text : text
			})
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(text);
				expect(res.body.todo.completed).toBe(true);
				//expect(res.body.todo.completedAt).toBe('number');
			})
			.end(done);
	});
	
	
	it('It should clear completedAt when todo is not completed' , (done) => {
		var hexId = todos[1]._id.toHexString();
			var text = 'This is updated text...!!!'
			
			request(app)
			.patch(`/updateTodo/${hexId}`)
			.send({
				completed : false ,
				text : text
			})
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(text);
				expect(res.body.todo.completed).toBe(false);
				//expect(res.body.todo.completedAt).toNotExist();
			})
			.end(done);
	});
	
});