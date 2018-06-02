console.log('Mongoose Server Started...!!!');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(process.env.MONGODB_URI);

//process.env.NODE_ENV = 'production' ;
//process.env.NODE_ENV = 'development' ;
//process.env.NODE_ENV = 'test' ;

module.exports = {
	mongoose : mongoose
};