const fs = require('fs')

let fetchNotes = () => {
    try{
        notes = fs.readFileSync('notes-data.json')
        return JSON.parse(notes)
    }catch(err){
        return []
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

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

let getAll = () => {
   return fetchNotes()
}

let getNote = (title) => {
    notes = fetchNotes()

    notes = notes.filter((note) => note.title === title)
    return notes[0]
}

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
    removeNote
}