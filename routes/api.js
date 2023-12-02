const api = require('express').Router();

const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

api.get('/notes', async (req, res) => {
  const notes = JSON.parse(await fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8'));
  res.json(notes)
  });
  
api.post('/notes', async (req, res) => {

  try {
    const {title, text} = req.body;
    const newInput = {
      title, 
      text,
      id: uuidv4()
    }

    const notes = await fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8');
  
    const newNotes = [...JSON.parse(notes), newInput];

    await fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(newNotes))
    res.json(newNotes)
  } catch(err) {
    res.status(500).json({error: 'u_u something went wrong'})
  }
});

api.delete('/notes/:id', async (req, res) => {
  
    try {
      const noteId = req.params.id; 

      const notes = JSON.parse(await fs.readFile('./db/db.json', 'utf-8'));

      const updatedNotes = notes.filter(obj => obj.id !== noteId);
    
      await fs.writeFile('./db/db.json', JSON.stringify(updatedNotes))
      res.json(updatedNotes)
    } catch(err) {
      res.status(500).json({error: 'u_u something went wrong'})
    }
  })
  
  module.exports = api;