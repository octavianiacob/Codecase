const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const Tool = require('../models/tool');
const Setup = require('../models/setup');
const Note = require('../models/note');
const mongoose = require('mongoose');


const getNoteByID = async (req, res, next) => {
  const noteID = req.params.nid;
  let note;
  try {
    note = await Note.findById(noteID);
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on getNoteByID', 500)
    );
  }
  //If request is valid, but no note is found
  if (!note) {
    return next(
      new HttpError(`Note with ID ${noteID} not found.`, 404)
    );
  }
  //Convert note from mongoose object to JS object, remove '_' from '_id'
  res.json({ note: note.toObject({ getters: true }) });
};

const getNotesBySetupID = async (req, res, next) => {
  const setupID = req.params.sid;
  let setup;
  try {
    setup = await Setup.findById(setupID);
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on getNotesBySetupID', 500)
    );
  }
  let notes = []
  for await (noteID of setup.notes) {
    note = await Note.findById(noteID);
    notes.push(note);
  }

  if (!notes) {
    return next(
      new HttpError(`NoteID Error`, 404)
    );
  }
  res.json({ notes: notes.map(note => note.toObject({ getters: true })) });
};

const createNote = async (req, res, next) => {
  const { creator, setup, tool, markdown } = req.body;

  const createdNote = new Note({
    creator,
    setup,
    tool,
    markdown
  });

  let parentSetup;
  try {
    parentSetup = await Setup.findById(setup);
  } catch (err) {
    return next(new HttpError('Error on setup data in createNote', 500))
  }
  if (!parentSetup) {
    return next(new HttpError('Could not find setup ID'));
  }

  // Use sessions and transactions to update User's setups array and Setup creator property
  // Changes commit only if all operations are successful 
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    // Save createdSetup to collection
    await createdNote.save({ session: session });
    //Add createdSetup's ID to user array of setups
    parentSetup.notes.push(createdNote);
    await parentSetup.save({ session: session });
    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Note creation failed', 500
    );
    return next(error);
  }

  res.status(201).json({ note: createdNote });
}


exports.getNoteByID = getNoteByID;
exports.getNotesBySetupID = getNotesBySetupID;
exports.createNote = createNote;