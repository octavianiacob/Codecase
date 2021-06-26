const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const setupsController = require('../controllers/setups-controller')

// Check if user is logged in
const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}

// GET ALL SETUPS
router.get('/', setupsController.getAllSetups);

// POST NEW SETUP
router.post('/', checkUserLoggedIn, setupsController.createSetup);

// GET ALL SETUPS OF THE SPECIFIED USER
router.get('/user/:uid', setupsController.getSetupsByUserID);

// GET ALL LIKED SETUPS OF THE SPECIFIED USER
router.get('/liked/:uid', checkUserLoggedIn, setupsController.getLikedSetupsByUserID);

// GET ALL SETUPS CONTAINING THE SPECIFIED TOOL
router.get('/tool/:tid', setupsController.getSetupsByToolID);

// GET A SPECIFIC SETUP BASED ON SETUPID
router.get('/:sid', setupsController.getSetupByID);

// UPDATE AN EXISTING SETUP
router.patch(
  '/:sid',
  [
    check('title')
      .not()
      .isEmpty()
  ],
  checkUserLoggedIn,
  setupsController.updateSetup);

// DELETE AN EXISTING SETUP
router.delete('/:sid', checkUserLoggedIn, setupsController.deleteSetup);

//LIKE A SETUP
router.patch('/like/:sid/from/:uid', checkUserLoggedIn, setupsController.likeSetup);

module.exports = router;