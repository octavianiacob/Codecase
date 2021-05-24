const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notes-controller')

// GET NOTE BY ID
router.get('/:nid', notesController.getNoteByID);

// GET ALL NOTES OF A SETUP BASED ON SETUPID
router.get('/setup/:sid', notesController.getNotesBySetupID);

router.post('/', notesController.createNote);

module.exports = router;