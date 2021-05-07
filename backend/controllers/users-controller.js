const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const User = require('../models/user');
const Setup = require('../models/setup');

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on getAllUsers', 500)
    );
  }

  //If request is valid, but no users are found
  if (!users || users.length === 0) {
    return next(
      new HttpError(`No users found`)
    )
  }
  res.json({ users: users.map(user => user.toObject({ getters: true })) });
}

const getUserByID = async (req, res, next) => {
  const userID = req.params.uid;
  let user;
  try {
    user = await User.findById(userID);
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on getUserByID', 500)
    );
  }
  //If request is valid, but no user is found
  if (!user) {
    return next(
      new HttpError(`User with ID ${userID} not found.`, 404)
    );
  }
  //Convert user from mongoose object to JS object, remove '_' from '_id'
  res.json({ user: user.toObject({ getters: true }) });
};

const updateUser = async (req, res, next) => {
  const { firstName, lastName, email, username, photoURL, country, website, github, about } = req.body;
  const userID = req.params.uid;

  let user;
  try {
    user = await User.findById(userID);
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on updateUser', 500)
    );
  }
  //If request is valid, but no user is found
  if (!user) {
    return next(
      new HttpError(`User with ID ${userID} not found.`, 404)
    );
  }
   
  if (firstName) {
    user.firstName = firstName;
  }
  
  if (lastName) {
    user.lastName = lastName;
  }
  
  if (email) {
    user.email = email;
  }
 
  if (username) {
    user.username = username;
  }

  if (photoURL) {
    user.photoURL = photoURL;
  }

  if (country) {
    user.country = country;
  }

  if (website) {
    user.website = website;
  }

  if (github) {
    user.github = github;
  }

  if (about) {
    user.about = about;
  }



  try {
    await user.save();
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on saving update on user', 500)
    );
  }

  res.status(200).json({ user: user.toObject({ getters: true }) });
}

const deleteUser = async (req, res, next) => {
  const userID = req.params.uid;

  let user;
  try {
    user = await User.findById(userID);
    //Delete setups before deleting user
    for await (setup of user.setups){
      Setup.findByIdAndDelete(setup, (err, setup) => {
        if(err) {
          console.log(err);
        }
      });
    }
    await user.remove();
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on deleteUser', 500)
    );
  }
  res.status(200).json({ messages: 'User deleted.' });
}

const likeSetup = async (req, res, next) => {
  const setupID = req.params.sid;
}

exports.getAllUsers = getAllUsers;
exports.getUserByID = getUserByID;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.likeSetup = likeSetup;