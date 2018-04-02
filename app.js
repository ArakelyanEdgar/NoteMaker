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
    console.log(notes.getNote(argv.title))
} else if (argv.remove){
    notes.removeNote(argv.title)
} else{
    console.log('Command not recognized')
}

