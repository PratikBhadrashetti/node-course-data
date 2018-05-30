console.log('Starting Utils Test...!!!');

const expect = require('expect');
const utils = require('./utils');

// it('It should add two numbers' , () =>{
	// var result = utils.add_Numbers(11 , 22);
	// if(result !== 33){
		// throw new Error(`Expected result : 33 , but got : ${result} `);
	// }else{
		 // console.log(`Result is : ${result}`);
	// }
	 // expect(result).toBe(33).toBeA('number');
// });

// it('It should square number' , () =>{
	// var result = utils.square_Number(9);
	// // if(result !== 81){
		// // throw new Error(`Expected result : 81 , but got : ${result} `);
	// // }else{
		// // console.log(`Result is : ${result}`);
	// // }
	// expect(result).toBe(81 , `Result is : ${result}`);
// });

// it('It should compare *****' , () =>{
	// //expect(12).toNotBe(121);
	
	// //In case of objects & arrays , "toBe(===)" will not work as expected.
	// //expect({name:'prasad'}).toBe({name:'prasad'});
	
	// //expect({name:'prasad'}).toEqual({name:'prasad'});
	
	// //expect({name:'pratik'}).toNotEqual({name:'prathik'});
	
	// //expect([2,3,4]).toInclude(2);
	
	// //expect([2,3,4]).toExclude(22);
	
	// // expect({
		// // name : 'pratik',
		// // age : 25,
		// // location : 'solapur'
	// // }).toInclude({
		// // age : 25
	// // });
	
	 // expect({
		 // name : 'pratik',
		 // age : 25,
		 // location : 'solapur'
	 // }).toExclude({
		 // age : 25.5
	 // });
// });

// it('It should set first and last name of user' , () => {
	// var user = {
		// age : 25 ,
		// location : 'solapur'
	// }
	
	// var result = utils.get_Full_Name(user , 'Pratik Shetty');
	// //expect(result).toEqual({age : 25 , location : 'solapur' , firstName : 'Pratik' , lastName : 'Shetty'}).toBeA('object');
	// expect(result).toInclude({firstName : 'Pratik' , lastName : 'Shetty'}).toBeA('object');
// });


//"done" - This argument tells 'mocha' , that we have an asynchronous test and it will not finish processing until 'done' argument gets called.
// it('It should add two numbers asynchronously' , (done) => {
      // utils.async_Add(11 , 55 , (result) => {
		  // expect(result).toEqual(66).toBeA('number'); 
		  // done();
	  // });
// });

// it('It should square number asynchronously' , (done) =>{
	 // utils.square_Number_Async(9 , (result) => {
		// expect(result).toBe(81).toBeA('number'); 
		// done();
	// });
// });
 
 
describe('Utils Describe Block' , () => {
	
	describe('Asynchronous Add Function' , () => {
		it('It should add two numbers asynchronously' , (done) => {
		utils.async_Add(11 , 55 , (result) => {
		  expect(result).toEqual(66).toBeA('number'); 
		  done();
	    });
	  });
	});
	
	describe('Asynchronous Square Function' , () => {
		it('It should square number asynchronously' , (done) =>{
	    utils.square_Number_Async(9 , (result) => {
		  expect(result).toBe(81).toBeA('number'); 
		  done();
	    });
	   });
	});		
});