const express = require('express');
const path = require('path');

const api = require('./routes/api');
const { logger } = require('./middleware/logger');

const app = express();

const PORT = 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(logger);

//API route
app.use('/api', api);

// GET Route for note page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);