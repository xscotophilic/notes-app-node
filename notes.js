const fs = require('fs');

//---------fetching all notes---------
var fetchNote = () => { 
    try{
        var notestring = fs.readFileSync('notes-data.json');
         return JSON.parse(notestring);
    }
    catch(e){
        return [];
    }
};

//---------saving all notes---------
var saveNotes = (notes) => { 
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


//---------add note function---------
var addNote = (title , body) => {
    var notes = fetchNote();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0)
    {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

//---------add note function and checking if note already exists with same title---------
var exist = (note) => {
    if(note)
    {
        lognote(note);
     }
    else{
        console.log('------------------------------------------------');
        console.log('Note with same name exists.');
    }
};

//---------read specific note function---------
var getNote = (title) => {
    var notes = fetchNote();
    var matchnote = notes.filter((note)=> note.title === title);
    return matchnote[0]; 
};

//---------read specific note function and checking if note found or not---------
var notefoundforread = (note) => {
    debugger;
    if(note)
    {
        lognote(note);
    }
    else{
        console.log(`No Note found.`);
    }
};

//---------list(read) all note function---------
var listNotes = () => {
    return fetchNote();
};

//---------remove specific note function---------
var removeNote = (title) => {
    var notes = fetchNote();
    var filterednotes = notes.filter((note) => note.title !== title);
    saveNotes(filterednotes);
    return (notes.length !== filterednotes);
};

//---------remove specific note function and checking if note removed or not---------
var noteremoved = (noteremoved,title) => {
    if(noteremoved)
    {
        debugger;
        console.log('Note removed with title: ',title);
     }
    else{
        debugger;
        console.log('No Note exists with title: ',title);
    }
};

//---------Printing note---------
var lognote = (note) => {
    console.log('------------------------------------------------');
    console.log('Title: \t',note.title);
    console.log('Body: \t',note.body);
};

//-----------export functions----------
module.exports = {
    addNote,
    getNote,
    listNotes,
    removeNote,
    exist,
    noteremoved,
    notefoundforread,
    lognote
};