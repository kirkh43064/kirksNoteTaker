const uuidv1 = require('uuid');
const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
// const deleteFileAsync = util.promisify(fs.unlink());

class Store {
  read() {
    //read db.json file and return contents
    return readFileAsync("./db.json", "utf8")
  }

  write(note) {
    // write to db.json
    return writeFileAsync("./db.json", JSON.stringify(note))
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

        const newNote = { title, text, id: uuidv1 }

        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => this.newNote)
  }

  removeNote(id) {
    return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(keptNotes => this.write(keptNotes))
  }

}

module.exports = new Store();