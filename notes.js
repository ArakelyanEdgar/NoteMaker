const fs = require('fs')

//helper function to retrieve parsed JSON
let fetchNotes = () => {
    try{
        notes = fs.readFileSync('notes-data.json')
        return JSON.parse(notes)
    }catch(err){
        return []
    }
}

//helper function to save JSON to file
let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

//helper function to print out a note's contents
let printNote = (note) => {
    console.log('____')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}

//creates and adds note to JSON file
let addNote = (title, body) => {
    let notes = fetchNotes()
    note = {
        title,
        body
    }
    let duplciateNotes = notes.filter((note) => note.title===title)

    if (duplciateNotes.length === 0){
        notes.push(note)
        saveNotes(notes)
        return note
    }
}

//returns all notes in JSON
let getAll = () => {
   return fetchNotes()
}

//returns note with param title from JSON
let getNote = (title) => {
    notes = fetchNotes()

    notes = notes.filter((note) => note.title === title)
    return notes[0]
}

//removes note with param title from JSON
let removeNote = (title) => {
    notes = fetchNotes()
    let newNotes = notes.filter((note) => note.title != title)
    saveNotes(newNotes)
    if(newNotes.length !== notes.length)
        return true
    else
        return false
}

module.exports = {
    addNote, // same as addNote: addNote
    getAll,
    getNote,
    removeNote,
    printNote
}