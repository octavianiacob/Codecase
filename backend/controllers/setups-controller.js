const HttpError = require('../models/http-error');
const { v4: uuid } = require('uuid');


let DUMMY_SETUPS = [
  { id: 's1', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
  { id: 's2', title: 'C++ Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'JohnDoe', languagesList: ['C++', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
  { id: 's3', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
  { id: 's4', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
  { id: 's5', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
  { id: 's6', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] },
  { id: 's7', title: 'MERN Stack Development Setup', lastUpdate: 'Apr 3 2021', likes: 21, username: 'Octavzz', languagesList: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'], toolsList: ['VSCode', 'Chrome', 'Sizzy', 'iTerm2', 'GitHub Desktop'] }
];

const getAllSetups = (req, res, next) => {
  res.json({ DUMMY_SETUPS });
}

const getSetupByID = (req, res, next) => {
  const setupID = req.params.sid;
  const setup = DUMMY_SETUPS.find(s => {
    return s.id === setupID;
  });

  //Error Handling
  if (!setup) {
    return next(
      new HttpError(`Setup with ID ${setupID} not found.`, 404)
    );
  }

  res.json({ setup });
};

const getSetupsByUserID = (req, res, next) => {
  const userID = req.params.uid;

  const setups = DUMMY_SETUPS.filter(s => {
    return s.username === userID;
  });

  //Error Handling
  if (!setups || setups.length === 0) {
    return next(
      new HttpError(`No setups found for user with ID ${userID}`)
    )
  }
  res.json({ setups });
};

const createSetup = (req, res, next) => {
  const { title, lastUpdate, likes, username, languagesList, toolsList } = req.body;
  const createdSetup = {
    id: uuid(),
    title,
    lastUpdate,
    likes,
    username,
    languagesList,
    toolsList
  };

  DUMMY_SETUPS.push(createdSetup);
  res.status(201).json({setup: createdSetup});
};

const updateSetup = (req, res, next) => {
  const { title, lastUpdate, languagesList, toolsList } = req.body;
  const setupID = req.params.sid;

  const updatedSetup = { ... DUMMY_SETUPS.find(s => s.id === setupID)};
  const setupIndex = DUMMY_SETUPS.findIndex(s => s.id === setupID);
  updatedSetup.title = title;
  updatedSetup.lastUpdate = lastUpdate;
  updatedSetup.languagesList = languagesList;
  updatedSetup.toolsList = toolsList;

  DUMMY_SETUPS[setupIndex] = updatedSetup;

  res.status(200).json({setup: updatedSetup});
}

const deleteSetup = (req, res, next) => {
  const setupID = req.params.sid;
  DUMMY_SETUPS = DUMMY_SETUPS.filter(s => s.id !== setupID);
  res.status(200).json({messages: 'Setup deleted.'});
}

exports.getAllSetups = getAllSetups;
exports.getSetupByID = getSetupByID;
exports.getSetupsByUserID = getSetupsByUserID;
exports.createSetup = createSetup;
exports.updateSetup = updateSetup;
exports.deleteSetup = deleteSetup;