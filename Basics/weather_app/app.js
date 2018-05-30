console.log('Starting App...!!!');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const yargs = require('yargs');

//Address Callback Function...
// const args = yargs
			 // .options({
				 // a : {
					 // describe : 'Address to fetch weather for' ,
					 // demand : true ,
					 // alias : 'a' ,
					 // //string : true
				 // }
			 // })
			 // .help()
			 // .alias('help' , 'h')
			// .argv;

//const args = yargs.argv;
//var address = args.address;

//console.log('Yargs Arguments : ' , args);

// geocode.geo_Code_Address(args.a , (error_Message , results)=>{
	// if(error_Message){
		// console.log('Error Message : ' , error_Message);
	// }else{
		// console.log('Address : ' , JSON.stringify(results , undefined , 2));
	// }
// });


//Weather Callback Function...
// const Latitude = {
	// describe : 'Latitude to fetch weather for' ,
	// demand : true ,
	// alias : 'lat' 
// };

// const Lognitude = {
	// describe : 'Lognitude to fetch weather for' ,
	// demand : true ,
	// alias : 'lng' 
// };


// const args = yargs
			 // .options({
				 // lat : Latitude,
				 // lng : Lognitude
			 // })
			 // .help()
			 // .alias('help' , 'h')
			 // .argv;
		
// console.log('Yargs Latitude : ' , args.lat);
// console.log('Yargs Lognitude : ' , args.lng);
		
// weather.get_Weather(args.lat , args.lng , (error_Message , weather_Results)=>{
	    // if(error_Message){
			// console.log('Error Message : ' , error_Message);
		// }else{
			// console.log('Weather : ' , JSON.stringify(weather_Results , undefined , 2));
		// }
// });


//Callback Function Chaining...
const Address = {
	   describe : 'Address to fetch weather for' ,
	   demand : true ,
	   alias : 'a' ,
	   string : true
};

const args = yargs
			.options({
				 a : Address
			    })
			.help()
			.argv;


console.log('Yargs Address : ' , args.a);


geocode.geo_Code_Address(args.a , (error_Message , results)=>{
	 if(error_Message){
		 console.log('Error Message : ' , error_Message);
	 }else{
		 console.log('Address : ' , JSON.stringify(results , undefined , 2));
		 
		 weather.get_Weather(results.latitude , results.lognitude , (error_Message , weather_Results)=>{
	     if(error_Message){
			 console.log('Error Message : ' , error_Message);
		 }else{
			 console.log('Weather : ' , JSON.stringify(weather_Results , undefined , 2));
		 }
	 });
	} 
});
