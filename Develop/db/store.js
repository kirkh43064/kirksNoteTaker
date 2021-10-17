
const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    //read db.json file and return contents
    return readFileAsync("db/db.json", "utf8")
    
  }

  write(note) {
    // write to db.json
    return writeFileAsync("db/db.json", JSON.stringify(note))
  }

  getNotes() {
    //get all notes
    return this.read()
            .then(notes => {
                return JSON.parse(notes) || [];
            })
  }

  addNote(note) {
    const { title, text } = note

        if (!title || !text) {
            throw new Error("title and text cannot be blank")
        }

        const newNote = { title, text, id: uuidv4() }

        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNote => this.write(updatedNote))
            .then(() => this.newNote)
  }

  removeNote(id) {
    return this.getNotes()
            .then(note => note.filter(note => note.id !== id))
            .then(savedNote => this.write(savedNote))
  }

}

module.exports = new Store();