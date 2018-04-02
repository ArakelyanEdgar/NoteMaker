const notes = require('./notes')

const fs = require('fs')
const _ = require('lodash')
const argv = require('yargs').argv

if (argv.add){
    let note = notes.addNote(argv.title, argv.body)
    if(note){
        console.log('Note created')
        notes.printNote(note)
    }else
        console.log(`${argv.title} was a duplicate`)
} else if (argv.list){
    notes.getAll().forEach(note => {
        notes.printNote(note)
    });
} else if (argv.read){
    let note = notes.getNote(argv.title)
    if (note){
        console.log('Found note')
        notes.printNote(note)
    }else
        console.log(`Could not find ${argv.title} in notes`)
} else if (argv.remove){
    let noteRemoved = notes.removeNote(argv.title)
    let message = noteRemoved ? `Removed ${argv.title}` : `${argv.title} is not in the notes`
    console.log(message)
} else{
    console.log('Command not recognized')
}
