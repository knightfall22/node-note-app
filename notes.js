

const fs = require('fs');

var fetchNote = () => {
    try {
        var noteString = fs.readFileSync('node-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) =>  {
    fs.writeFileSync('node-data.json',JSON.stringify(notes));
}

var addNote = (title,body)=>{
    notes = fetchNote();
    note = {
        title,
        body
    }

   

    var duplicateNotes = notes.filter((note) => note.title === title);

    if( duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }


   
}

var getAll = () => {
    //fetch all notes
    var notes = fetchNote();

    return notes;
}

var getNote = (title) => {
    var notes = fetchNote();

    var Opennote = notes.filter((note) => note.title === title);

    return Opennote[0];

}

var removeNote = (title) => {
    //fetch all notes
    var notes = fetchNote();

    //filter note by removing the one with the title argument
    var note = notes.filter((note) => note.title !== title);
   
    //save new notes array
    saveNotes(note);

    return notes.length !== note.length; 
  
}

var logNote = (note) => {
    console.log("-----------------------");
    console.log(`Title: ${note.title}`);
    console.log("-----------------------");
    console.log(`Body: ${note.body}`);
    console.log("-----------------------");
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}