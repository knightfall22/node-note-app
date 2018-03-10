//3rd - party modules
const fs = require('fs'),
      _  = require('lodash'),
     yargs = require('yargs'),

//created modules
    notes = require('./notes.js'),
//other variables
    noteTitle =  {
    describe:'Title of note',
    demand:true,
    alias: 't'

},
noteBody =  {
    describe:'body of note',
    demand:true,
    alias: 'b' 
};


var arg = yargs
.command('add','Add a new note',{
    title: noteTitle,
    body: noteBody
})
.command('list','List all notes')
.command('read','Read a note',{title: noteTitle})
.command('remove','Remove a note',{title: noteTitle})

.help()
.argv;
  

var command = arg._[0];



if( command === 'add'){
    var note = notes.addNote(arg.title,arg.body);
   if(note){
    console.log("Note as been created");
      notes.logNote(note);
   }else{
    console.log("Title name is taken");
   } 
}
else if( command === 'list'){
   var allNotes = notes.getAll();

    console.log(`Printing ${allNotes.length} note(s). `);

    allNotes.forEach((note) => notes.logNote(note))

}else if( command === 'read'){
   var note=notes.getNote(arg.title);
   if(note){
    console.log("Note Was Found");
    notes.logNote(note);
   }else{
       console.log('Note Not Found');
   }
}else if( command === 'remove'){
   var removeNote = notes.removeNote(arg.title);
  
   var message = removeNote ? 'Note Was Removed' : 'Note not found';

   console.log(message);
}
else{
    console.log(`Command '${command}' not recgonise`);
}