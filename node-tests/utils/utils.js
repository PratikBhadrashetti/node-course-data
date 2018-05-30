console.log('Starting Utils...!!!');

//module.exports.add = (a , b) => (a + b);
//module.exports.square = (x) => (x * x);


function add(a , b){
	return (a + b);
}

function square(x){
    return (x * x);	
}

function getFullName(user , fullName){
    var names = fullName.split(' ');
	user.firstName = names[0];
	user.lastName = names[1];
	return user;
}

function asyncAdd(a , b , callback){
	setTimeout(() => {
		callback(a + b);
	}, 1000);
}

function squareNumberAsync(x , callback){
	setTimeout(() => {
		callback(x * x);
	} , 1000);
}


module.exports = {
	add_Numbers : add ,
	square_Number : square ,
	get_Full_Name : getFullName ,
	async_Add : asyncAdd ,
	square_Number_Async : squareNumberAsync
}


// function add(a , b){
	// return (a + b);
// }

// var result = add(11,22);
// console.log('Result : ' , result);