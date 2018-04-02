const notes = require('./notes')

const fs = require('fs')
const _ = require('lodash')
const argv = require('yargs').argv

if (argv.add){
    let note = notes.addNote(argv.title, argv.body)
    if(note){
        console.log('Note created')
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    }else
        console.log(`${argv.title} was a duplicate`)
} else if (argv.list){
   console.log(notes.getAll())
} else if (argv.read){
    let readNote = notes.getNote(argv.title)
    if (readNote){
        console.log('Found note')
        console.log(`Title: ${readNote.title}`)
        console.log(`Body: ${readNote.body}`)
    }else
        console.log(`Could not find ${argv.title} in notes`)
} else if (argv.remove){
    let noteRemoved = notes.removeNote(argv.title)
    let message = noteRemoved ? `Removed ${argv.title}` : `${argv.title} is not in the notes`
    console.log(message)
} else{
    console.log('Command not recognized')
}

