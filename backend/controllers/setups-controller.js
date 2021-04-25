const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const Setup = require('../models/setup');
const User = require('../models/user');
const mongoose = require('mongoose');

const getAllSetups = async (req, res, next) => {
  let setups;
  try {
    setups = await Setup.find();
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on getAllSetups', 500)
    );
  }

  //If request is valid, but no setups are found
  if (!setups || setups.length === 0) {
    return next(
      new HttpError(`No setups found`)
    )
  }
  res.json({ setups: setups.map(setup => setup.toObject({ getters: true })) });
}

const getSetupByID = async (req, res, next) => {
  const setupID = req.params.sid;
  let setup;
  try {
    setup = await Setup.findById(setupID);
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on getSetupByID', 500)
    );
  }
  //If request is valid, but no setup is found
  if (!setup) {
    return next(
      new HttpError(`Setup with ID ${setupID} not found.`, 404)
    );
  }
  //Convert setup from mongoose object to JS object, remove '_' from '_id'
  res.json({ setup: setup.toObject({ getters: true }) });
};

const getSetupsByUserID = async (req, res, next) => {
  const userID = req.params.uid;

  let setups;
  try {
    setups = await Setup.find({ creator: userID });
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on getSetupsByUserID', 500)
    );
  }

  //If request is valid, but no setups are found
  if (!setups || setups.length === 0) {
    return next(
      new HttpError(`No setups found for user with ID ${userID}`)
    )
  }
  res.json({ setups: setups.map(setup => setup.toObject({ getters: true })) });
};

const createSetup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError('Invalid input data', 422);
  }
  const { title, creator } = req.body;

  const createdSetup = new Setup({
    title,
    creator
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    return next( new HttpError('Error on creator user data in createSetup', 500))
  }
  if(!user) {
    return next( new HttpError('Could not find creator user ID'));
  }

  // Use sessions and transactions to update User's setups array and Setup creator property
  // Changes commit only if all operations are successful 
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    // Save createdSetup to collection
    await createdSetup.save({ session: session });
    //Add createdSetup's ID to user array of setups
    user.setups.push(createdSetup);
    await user.save({ session: session });
    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Setup creation failed', 500
    );
    return next(error);
  }

  res.status(201).json({ setup: createdSetup });
};

const updateSetup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError('Invalid input data', 422);
  }
  const { title, lastUpdate } = req.body;
  const setupID = req.params.sid;

  let setup;
  try {
    setup = await Setup.findById(setupID);
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on updateSetup', 500)
    );
  }
  //If request is valid, but no setup is found
  if (!setup) {
    return next(
      new HttpError(`Setup with ID ${setupID} not found.`, 404)
    );
  }

  setup.title = title;
  setup.lastUpdate = lastUpdate;

  try {
    await setup.save();
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on saving update on setup', 500)
    );
  }

  res.status(200).json({ setup: setup.toObject({ getters: true }) });
}

const deleteSetup = async (req, res, next) => {
  const setupID = req.params.sid;

  let setup;
  try {
    //Populate - reference document stored in another collection and work with data in that existing document
    setup = await Setup.findById(setupID).populate('creator');
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on deleteSetup', 500)
    );
  }

  if(!setup) {
    return next( new HttpError('Setup not found for the provided ID'))
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    //Remove setup from collection
    await setup.remove({ session: session });
    // Remove setup from setups array in creator user
    setup.creator.setups.pull(setup);
    await setup.creator.save({ session: session });
    await session.commitTransaction();

  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on deleteSetup', 500)
    );
  }
  res.status(200).json({ messages: 'Setup deleted.' });
}

exports.getAllSetups = getAllSetups;
exports.getSetupByID = getSetupByID;
exports.getSetupsByUserID = getSetupsByUserID;
exports.createSetup = createSetup;
exports.updateSetup = updateSetup;
exports.deleteSetup = deleteSetup;