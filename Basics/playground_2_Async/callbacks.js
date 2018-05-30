console.log('Starting Callbacks...!!!');

var getUser = (id , callback) => {
	var user = {
		id : id,
		name : 'prasad',
		mail_id : 'prasad@gmail.com'
	};
	//callback(user);
	setTimeout(() => {
		callback(user);
	} , 3000);
};

getUser(77 , (user) =>{
	console.log("User : " , user);
});