console.log('Starting Promises_1...!!!');

// var somePromise = new Promise((resolve , reject)=>{
	// // setTimeout(() =>{
	    // // //resolve('Hey , It Worked...!!!');
		// // reject("Sorry , It's Not Working...!!!");
	// // } , 2500);
	
	// resolve('Hey , It Worked Once...!!!');
	// resolve('Hey , It Worked Twice...!!!');
	// //reject("Sorry , It's Not Working...!!!");
// });

// somePromise.then((message) =>{ 
	// console.log('Success Message : ' , message);
	// } , (error_Message)=>{
	// console.log('Error Message : ' , error_Message);
// });


var asyncAdd = (a , b) =>{
    return new Promise((resolve , reject) =>{
	    setTimeout(() =>{	
		if((typeof a === 'number') && (typeof b === 'number')){
			resolve(a + b);
		 }else{
			reject('Arguments must be numbers...!!!');
		 }
		} , 1500);
	});	
};

//Promises chaining...
// asyncAdd(9 , 7).then((result) =>{
	     // console.log('First Result : ' , result);
		 // return asyncAdd(result , 4);
	// } , (error_Message) =>{
	     // console.log('First Error : ' , error_Message);
// }).then((result) =>{
	// console.log('Second Result : ' , result);
// } , (error_Message) =>{
	  // console.log('Second Error : ' , error_Message);
// });

asyncAdd(9 , 7).then((result) =>{
	    console.log('First Result : ' , result);
		return asyncAdd(result , 4);
	}).then((result) =>{
		console.log('Second Result : ' , result);
	}).catch((error_Message) =>{
		console.log('Error : ' , error_Message);
	});