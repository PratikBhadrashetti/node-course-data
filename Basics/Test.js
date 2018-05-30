// "use strict"
// for(let temp, i=0, j=1; j<30; temp = i, i = j, j = i + temp){
	// console.log('Temp : ' , temp);
	// console.log('I : ' , i);
	// console.log('J : ' , j);
	// console.log('---------');	
// }
// console.log(j);

// outerloop: // This is the label name
// for (var i = 0; i < 5; i++)
// {
// console.log("Outerloop: " + i);
// innerloop:
// for (var j = 0; j < 5; j++){
// if (j > 3 ) break ; // Quit the innermost loop
// if (i == 2) break innerloop; // Do the same thing
// if (i == 4) break outerloop; // Quit the outer loop
// console.log("Innerloop: " + j);
// }
// }


//*************************************//
// var emp = { name: 'John', Id: 3 }
// var {name, Id} = emp
// console.log(name)
// console.log(Id)

function MyError(message) {
this.name = 'CustomError';
this.message = message || 'Error raised with default message';
}
try {
throw new MyError("Message from...");
} catch (e) {
console.log(e.name);
console.log(e.message); // 'Default Message'
}
