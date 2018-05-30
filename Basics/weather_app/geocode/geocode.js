console.log('Starting Geo_Code App...!!!');

const request = require('request');

var geoCodeAddress = (address , callback) => {
	
var encoded_Address = encodeURIComponent(address);
console.log('Encoded Address : ' , encoded_Address);

	request({
		url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_Address}`,
		json : true
	} , (error,response,body)=>{
		if(error){
			//console.log('Unable To Connect Google Server...!!!');
			callback('Unable To Connect Google Server...!!!');
		}else if(body.status === 'ZERO_RESULTS'){
			//console.log('Unable To Find Address...!!!');
			callback('Unable To Find Address...!!!');
		}else if(body.status === 'OK'){
			//console.log('Address : ' , body.results[0].formatted_address);
			//console.log('Latitude : ' , body.results[0].geometry.location.lat);
			//console.log('Lognitude : ' , body.results[0].geometry.location.lng);
			callback(undefined , {
				address :  body.results[0].formatted_address , 
				latitude :  body.results[0].geometry.location.lat ,
				lognitude : body.results[0].geometry.location.lng
			});
		}
	});

};

module.exports = {
	geo_Code_Address : geoCodeAddress
}
