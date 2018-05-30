console.log('Starting Debugging...!!!');

var person = {
	name : 'pratik',
	age : 24
};

person.age = 25;

debugger;

person.name = 'swapnil';

console.log('Person : ' , JSON.stringify(person));