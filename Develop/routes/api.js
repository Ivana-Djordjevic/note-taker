const api = require('express').Router();

const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

const dbJson = require('../db/db.json');

api.get('/notes', (req, res) => {
    res.json(dbJson)
  });
  
api.post('/notes', async (req, res) => {
    
    try {
      console.log(req.body);
      const payload = req.body;
      const {title, text} = payload;
      const newInput = {
        title, 
        text,
        id: uuidv4()
      }
      const notes = await fs.readFile('../db/db.json', 'utf-8');
      const newNotes = [...JSON.parse(notes), newInput];
    
      await fs.writeFile('./db/db.json', JSON.stringify(newNotes))
      res.json(newNotes)
    } catch(err) {
      res.status(500).json({error: 'u_u something went wrong'})
    }
  });
  
api.delete('/notes/:id', async (req, res) => {
  
    try {
      const noteId = parseInt(req.params.id); // why do this? (convert to number)
      const notes = await fs.readFile('./db/db.json', 'utf-8');
      const noteTotDelete = notes.find(el => el.noteId === noteId);
      const index = notes.indexOf(noteTotDelete);
    
      notes.splice(index, 1);
    
      await fs.writeFile('./db/db.json', JSON.stringify(notes))
      res.json(notes)
    } catch(err) {
      res.status(500).json({error: 'u_u something went wrong'})
    }
  })
  
  module.exports = api;