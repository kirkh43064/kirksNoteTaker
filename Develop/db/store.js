const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const deleteFileAsync = util.promis

class Store {
  read() {
    //read db.json file and return contents
  }

  write(note) {
    // write to db.json
  }

  getNotes() {
    //get all notes
  }

  addNote(note) {
   
  }

}

module.exports = new Store();