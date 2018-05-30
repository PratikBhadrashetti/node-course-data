 // var object = {
    // name : 'pratik'
 // };

 // var stringobj = JSON.stringify(object);
 // console.log('typeof result : ' , typeof stringobj);
 // console.log('stringify result : ' , stringobj);

// var personString = '{"name":"prasad" , "age" : 25}';
// console.log('typeof result before parsing : ' , typeof personString);
// console.log('Person String : ' , personString);

// var person = JSON.parse(personString);
// console.log('typeof result after parsing : ' , typeof person);
// console.log('Parsed Object : ' , person);

var fs = require('fs');

var origionalNote = {
	title : 'New Note',
	body : 'From @pratik'
};
console.log('typeof origionalNote : ' , typeof origionalNote);

var origionalNoteString = JSON.stringify(origionalNote);
console.log('typeof origionalNoteString : ' , typeof origionalNoteString);

fs.writeFileSync('notes.json' , origionalNoteString);

var file_Content = fs.readFileSync('notes.json');
console.log('typeof File Content : ' , typeof file_Content);

var note = JSON.parse(file_Content);
console.log('typeof note : ' , typeof note);
console.log(' Parsed Result : ' , note.title + " " + note.body);