console.log('Starting Notes...!!!');

// module.exports.addNumbers = (a , b) =>{
	 //console.log('Add Numbers...!!!');
	// return ( a + b );
 //};

const fs = require('fs');

var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}catch(error){
		//console.log('Error Occured : ' , error);
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json' , JSON.stringify(notes));
};


var addNote = (title ,body) => {
	//console.log('Adding Note : ' , title , body);
	var notes = fetchNotes();
	var note = {
		title : title,
		body : body
	};

	var duplicateNotes = notes.filter((note) => note.title === title);
	if(duplicateNotes.length === 0){
	   	notes.push(note);
		saveNotes(notes);
		return note;
	} 
};

var getAll = () =>{
	//console.log('Getting All Notes...');
	return fetchNotes();
};

var readNote = (title) =>{
	//console.log('Reading Note : ' , body);
	var notes = fetchNotes();
	
	var note = notes.filter((note) => note.title === title);
	return note[0];
};

var removeNote = (title) =>{
	//console.log('Removing Note...!!!');
	var notes = fetchNotes();
	var filtered_Notes = notes.filter((note) => note.title != title);
	saveNotes(filtered_Notes);
	return notes.length != filtered_Notes.length ;
};


module.exports = {
	add_Note : addNote,
	get_All : getAll,
	read_Note : readNote,
	remove_Note : removeNote
};