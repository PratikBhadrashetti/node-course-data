console.log('Starting Async...!!!');

setTimeout(() =>{
	console.log('Inside first setTimeout...');
} , 2000);

setTimeout(() =>{
	console.log('Inside second setTimeout...');
});

console.log('Completed Async...!!!');