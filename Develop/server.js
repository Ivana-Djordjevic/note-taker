const express = require('express');
const path = require('path');

const api = require('./routes/api');

const app = express();

const PORT = 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//API route
app.use('/api', api);

// GET Route for note page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// get route for invalid path
app.get('*', (req, res) => {
  res.status(404).send(`<h1> Error 404 ^_^ </h1>`);
}
 
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);