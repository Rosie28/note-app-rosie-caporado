const fs= require('fs')

const add = function(note=[], oldnote){
    let finalNote= JSON.parse(oldnote)

    finalNote.push(note)

    let objectNote = JSON.stringify(finalNote)
    fs.writeFileSync('note.txt', objectNote)
}

module.exports = add