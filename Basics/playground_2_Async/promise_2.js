console.log('Starting Promises_2...!!!');

var request = require('request');

var geo_Code_Address = (address) =>{
	var encoded_Address = encodeURIComponent(address);
	console.log('Encoded Address : ' , encoded_Address);

	return new Promise ((resolve , reject) =>{
		request({
				url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_Address}`,
				json : true
		} , (error,response,body)=>{
		if(error){	
				reject('Unable To Connect Google Server...!!!');
		}else if(body.status === 'ZERO_RESULTS'){
				reject('Unable To Find Address...!!!');
		}else if(body.status === 'OK'){
				resolve({
				    address :  body.results[0].formatted_address , 
					latitude :  body.results[0].geometry.location.lat ,
					lognitude : body.results[0].geometry.location.lng
				});
			}
		});		
	});		
};

geo_Code_Address('00000').then((result) =>{
	    console.log('Address : ' , JSON.stringify(result , undefined , 2));
	} , (error_Message) =>{
		 console.log('Error Message : ' , error_Message);
});