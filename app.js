const notes = require('./notes')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

//yarg configuration
titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help().argv

//handling command types
let command = argv._[0]

if (command === 'add'){
    let note = notes.addNote(argv.title, argv.body)
    if(note){
        console.log('Note created')
        notes.printNote(note)
    }else
        console.log(`${argv.title} was a duplicate`)
} else if (command === 'list'){
    allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} notes`)
    allNotes.forEach(note => notes.printNote(note));
} else if (command === 'read'){
    let note = notes.getNote(argv.title)
    if (note){
        console.log('Found note')
        notes.printNote(note)
    }else
        console.log(`Could not find ${argv.title} in notes`)
} else if (command === 'remove'){
    let noteRemoved = notes.removeNote(argv.title)
    let message = noteRemoved ? `Removed ${argv.title}` : `${argv.title} is not in the notes`
    console.log(message)
} else{
    console.log('Command not recognized')
}
