console.log('Starting App-Promise...!!!');

const axios = require('axios');
const yargs = require('yargs');

//var command = process.argv[2];
//console.log('Command Line Argument : ' , command);

const args = yargs
			.options({
				a :{
				  demand : true,
				  alias : 'address',
				  describe : 'Address To Fetch Weather',
				  string : true
				}  	
			})
			.help()
			.argv;
			
//console.log('Yargs Argument : ' , args);

var encoded_Address = encodeURIComponent(args.address);
var geoCodeURl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_Address}`;

//Axios liberary used for promises chaining.
axios.get(geoCodeURl).then((response)=>{
	if(response.data.status === 'ZERO_RESULTS'){
		throw new Error('Unable To Find The Address...!!!');
	}
	
	var lat = response.data.results[0].geometry.location.lat ;
	var lng = response.data.results[0].geometry.location.lng ;
	var weatherURl = `https://api.forecast.io/forecast/4091478d8a640a70136f037f81e9249d/${lat},${lng}`;
	console.log('Response : ' , response.data.results[0].formatted_address);
	
	return axios.get(weatherURl);
}).then((response)=>{
	var temperature = response.data.currently.temperature ;
	var apparentTemperature = response.data.currently.apparentTemperature ;
	console.log(`Temperature  : ${temperature} & Apparent-Temperature : ${apparentTemperature}`); 
}).catch((error)=>{
	if(error.code === 'ENOTFOUND'){
		console.log('Error Message : Unable To Connect Google Maps API Server...!!!');
	}else{
		console.log(e.message);
	}
});
