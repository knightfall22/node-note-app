/*var obj = {
    name:'pelumi'
}

var stringObj = JSON.stringify(obj);
console.log(stringObj);
console.log(typeof stringObj); */

/*var personString = '{"name":"pelumi","age":16}'
var person = JSON.parse(personString);
console.log(person);*/

const fs = require('fs');

var originalNote = {
    title:'Some title',
    body: 'Some Body'
}

//originalNoteString
var originalNoteSting = JSON.stringify(originalNote);
fs.writeFileSync('note.json',originalNoteSting);

var noteString = fs.readFileSync('note.json'); 

//note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);