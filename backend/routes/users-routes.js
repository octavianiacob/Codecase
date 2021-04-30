const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const usersController = require('../controllers/users-controller')

// GET ALL SETUPS
router.get('/', usersController.getAllUsers);

// GET A SPECIFIC USER BASED ON USERID
router.get('/:uid', usersController.getUserByID);

// UPDATE AN EXISTING USER
router.patch('/:uid', usersController.updateUser);

// DELETE AN EXISTING SETUP
router.delete('/:uid', usersController.deleteUser);

router.patch('/:sid', usersController.likeSetup);

module.exports = router;