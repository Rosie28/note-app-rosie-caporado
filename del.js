const fs = require('fs')

const del = function(id, oldNote){
    const note = JSON.parse(oldNote)
    const newNote = note.filter(function(n,indx){ return n.id !== id})
    fs,fs.writeFileSync('./note.txt', JSON.stringify(newNote))
}

module.exports = del;