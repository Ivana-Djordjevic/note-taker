const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dbJson = require('./db/db.json');
const exp = require('constants'); //not sure where this came from

const app = express();

const PORT = 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/api/notes', (req, res) => {
  res.json(dbJson)
});

app.post('/api/notes', async (req, res) => {
  console.log(req.body);
  const payload = req.body;
  const {title, text} = payload;
  const newInput = {
    title, 
    text,
    id: uuidv4()
  }
  const notes = await fs.readFile('./db/db.json', 'utf-8')
  const newNotes = [...JSON.parse(notes), newInput]

  await fs.writeFile('./db/db.json', JSON.stringify(newNotes))
  res.json(newNotes)
});

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for note page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// //not yet created 
// // Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);