console.log('Starting App...!!!');

//Built-In Node Maodules...
const fs = require('fs');
const os = require('os');

//Third Party Noode Module...
const _ = require('lodash');
const yargs = require('yargs');

//Our Own Module...
const notes = require('./notes.js');

//const user = os.userInfo();
//console.log("User : " , user);

//fs.appendFile('greetings.txt' , ' Hello ' + user.username + '!'); 
//fs.appendFile('greetings.txt' , `Hello ${user.username}...!!!!`); 

//var result = notes.addNumbers(5,6);
//console.log('Result : ' , result);

//console.log('String : ' , _.isString('pr@atik'));
//console.log('Number : ' , _.isString(1));
//console.log('Boolean : ' , _.isString(true));
//console.log('Array 1 : ' , _.uniq([1,2,3,1]));
//console.log('Array 2 : ' , _.uniq(['pratik', 1 , 'prathik' , 1 , 'prasad' , 2 , 3 , 4 ]));

//console.log('Process Argument : ' , process.argv);
 
var command = process.argv[2];
//console.log('Command Line Argument : ' , command);

// const titleOptions = {
					// description : 'Title Of Note',
					// demand : true ,
					// alias : 't'
				 // };
				 
// const bodyOptions = {
					// description : 'Body Of Note',
					// demand : true,
					// alias : 'b'
				// };

// const args = yargs
			// .command('add' , 'Add a new note' , {
				// title : titleOptions ,
				// body : bodyOptions
			// })
			// .command('list' , 'List All Commands')
			// .command('read' , 'Read A Note' , {
				// title : titleOptions,
			// }).
			// command('remove' , 'Remove A Note' , {
				 // title : titleOptions,
			// })
			// .help()
			// .argv;
// console.log('Yargs Argument : ' , args);

 // if(command === 'add'){
	 // //console.log('Adding New Note...');
	 // var note = notes.add_Note(args.title , args.body);
	 // if(note === undefined){
		// console.log('Note with title ' + args.title + ' already exists...!!!');
	 // }else{
		// console.log('New Note : ' + note.title + ' with Body : ' + note.body + ' added to list...!!!');  
	 // }
 // }else if(command === 'list'){
	 // //console.log('List : ' + JSON.stringify(notes.get_All()));
	 // var all_notes = notes.get_All();
	 // all_notes.forEach(note => {
		 // console.log(' Note with title : ' + note.title + ' and body : ' + note.body );
	 // });
 // }else if(command === 'read'){
	 // //console.log('Reading Notes...');
	 // var note = notes.read_Note(args.title);
	 // if(note){
		 // console.log('Note : ' + JSON.stringify(note));
	 // }else{
		// console.log('Note not found...!!!');  
	 // }
 // }else if(command === 'remove'){
	 // //console.log('Removing Notes...');
	 // var remaining_notes = notes.remove_Note(args.title);
	 // console.log(JSON.stringify(remaining_notes));
	 // var message = remaining_notes ? 'Note was removed' : 'Note not found...';
	 // console.log('Message : ' , message);
 // }else{
     // console.log('Command Not Found...');
 // }

