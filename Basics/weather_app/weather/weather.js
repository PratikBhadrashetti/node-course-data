console.log('Starting Weather App...!!!');

const request = require('request');

var getWeather = (lat , lng , callback) => {

	request({
		url : `https://api.forecast.io/forecast/4091478d8a640a70136f037f81e9249d/${lat},${lng}`,
		//url : `https://api.darksky.net/forecast/4091478d8a640a70136f037f81e9249d/${lat},${lng}` ,
		json : true
	} , (error,response,body)=>{
		if(error){
			//console.log('Unable To Connect Fetch.io Server...!!!');
			callback('Unable To Connect Fetch.io Server...!!!');
		}else if(response.statusCode === 400){
			//console.log('Unable To Fetch Weather...!!!');
			callback('Unable To Fetch Weather...!!!');
		}else if(response.statusCode === 200){
			callback(undefined , {
				temperature : body.currently.temperature,
				apparentTemperature : body.currently.apparentTemperature 
			});
		}
	});

};

module.exports = {
	get_Weather : getWeather
}




