console.log('Starting Arrow Functions...!!!');

const yargs = require('yargs');

//Expression Function...
// var square = (number) => {
	 // return (number * number);
// };

//Arrow Function...
var square = (x) => x * x ;

var args = yargs.argv;
var number = process.argv[2];

var square_of_Number = square(number);
console.log(`Square of number : ${number} is ${square_of_Number}`);

var user = {
	name : 'pradeep',
	sayHi_1 :() =>{
		console.log('SayHi_1 Arguments : ' , arguments);
		console.log(`Hi form sayHi_1...i'm ${this.name}...!!!`);
	},
	
	sayHi_2 () {
		console.log('SayHi_2 Arguments : ' , arguments);
		console.log(`Hi from sayHi_2...i'm ${this.name}...!!!`);
	},
};

user.sayHi_1(9,8,7,6,5);
user.sayHi_2(1,2,3,4,5);