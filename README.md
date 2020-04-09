# **Notesapp_Node.js**

##### simple note app example using Node.js

## Basic Commands to use app
$ npm install
$ node app.js --help

### Add note
To add a new note.
$ node app.js add --title="new note" --body="Hello world" 
or
$ node app.js add -t="new note" -b="Hello world"

### List note
To read all notes.
$ node app.js list

### Read note
To read specific note.
$ node app.js read --title="new note"
or
$ node app.js read -t="new note"

### Remove note
To Remove specific note.
$ node app.js remove --title="new note"
or
$ node app.js remove -t="new note"
