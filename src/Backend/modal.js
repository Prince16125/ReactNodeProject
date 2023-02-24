const mongoose = require('mongoose');


const notesSchema = new mongoose.Schema({
    notes: {
        type: String,
    },
    currentNote: {
        _id:String,
        type: String,
    },
    
})

const Notes = mongoose.model("Note", notesSchema)
module.exports = Notes
