console.log('------------------------------------------------');
console.log("Notes");
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

//---------help starts here---------
const titleoption = {
    describe: 'Title of note',
    demand: true, 
    alias: 't'
};
const bodyoption = {
    describe: 'Body of note',
    demand: true, 
    alias: 'b'
};
const argv = yargs.command('add','Add New note.',{
    title: titleoption,
    body: bodyoption
})
.command('list','Read all notes.')
.command('read','Read specific note.',{
    title: titleoption
})
.command('remove','Remove Specific note.',{
    title: titleoption
})
.help()
.argv;

//---------help ends here---------


//---------argument & function---------
var command = argv._[0];
//---------add argument---------
if(command === 'add')
{
    var note = notes.addNote(argv.title, argv.body);
    notes.exist(note);
}
//---------list argument---------
else if(command === 'list')
{
    var allnotes = notes.listNotes();
    allnotes.forEach((note) => notes.lognote(note));
}
//---------read argument---------
else if(command === 'read')
{
    var notedata = notes.getNote(argv.title);
    notes.notefoundforread(notedata);
}
//---------remove argument---------
else if(command === 'remove')
{
    debugger;
    var noteremoved = notes.removeNote(argv.title);
    notes.noteremoved(noteremoved,argv.title);
}
//---------imappropriate argument---------
else
{
    console.log('Command not recognized.');
}
//---------argument & function ends here---------
console.log('------------------------------------------------');