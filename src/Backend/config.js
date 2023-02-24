const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/NotesApp",{
   
}).then(()=>{
console.log("connection succesfullly")
}).catch((err)=>console.log("no connection"))