const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const Setup = require('../models/setup');

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
    setups = await Setup.find({ author: userID });
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
  const { title, author } = req.body;

  const createdSetup = new Setup({
    title,
    author
  });

  try {
    await createdSetup.save();
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
    setup = await Setup.findById(setupID);
    await setup.remove();
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