const add = require('./add')
const read = require('./read')
const write = require('./write')
const update = require('./update')



const data = process.argv
//write(data)

var note = {}

if(data[2] == "add"){

    note = {
        "id": data[3],
        "title": data[4],
        "body": data[5]
    }

    var oldNote = read()
    add(note, oldNote)
}

if(data[2] == "read"){
    const present = require('./present')

    present(read())
}

if (data[2] == "delete"){
    let id = data[3]
    let oldNote = read()
    let del = require('./del')
    del(id, oldNote)
    console.log(read());
}

if (data[2] == 'update'){
    const note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }
    const oldNote = read()
    update(note, oldNote)
    let present = require('./present')
    present(read())
}