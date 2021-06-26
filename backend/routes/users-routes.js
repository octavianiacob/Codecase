const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const usersController = require('../controllers/users-controller')

// Check if user is logged in
const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}

// GET ALL SETUPS
router.get('/', usersController.getAllUsers);

// GET A SPECIFIC USER BASED ON USERID
router.get('/:uid', usersController.getUserByID);

// UPDATE AN EXISTING USER
router.patch('/:uid', checkUserLoggedIn, usersController.updateUser);

// DELETE AN EXISTING SETUP
router.delete('/:uid', checkUserLoggedIn, usersController.deleteUser);

module.exports = router;