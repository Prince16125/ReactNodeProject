const express = require('express');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
const app = express();
const Notes = require('./modal')
require('./config')
app.use(cors());

let db;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  app.get('/getNotes',async (req, res) => {
//   db.collection('notes').find().toArray((err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Internal server error');
//     }
//     res.send(result);
//   });
 let data = await Notes.find();
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.send(data)
  });

app.post('/notes', (req, res) => {
  const data = req.body.note;
  console.log(data.name)
  const currentNote = data.name;
  // db.collection('notes').insertOne(note, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send('Internal server error');
  //   }
  //   console.log(`Added note with id ${result.insertedId}`);
  //   res.sendStatus(201);
  Notes.find()
  //console.log(currentNote)
      const book = new Notes({currentNote})
     book.save().then(()=>{
          res.status(201).json({
              message:"books successfully saved"
         })
      })
  });


app.delete('/deleteNotes/:id', (req, res) => {
  const id = req.params.id;
 Notes.deleteOne({ _id: id }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal server error');
    }
    console.log(`Deleted note with id ${id}`);
    res.sendStatus(200);
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});