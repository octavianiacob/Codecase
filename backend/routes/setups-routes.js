const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const setupsController = require('../controllers/setups-controller')

// GET ALL SETUPS
router.get(
  '/',
  [
    check('title')
      .not()
      .isEmpty(),
    check('languagesList')
      .not()
      .isEmpty(),
    check('toolsList')
      .not()
      .isEmpty()
  ],
  setupsController.getAllSetups);

// POST NEW SETUP
router.post('/', setupsController.createSetup);

// GET ALL SETUPS OF THE SPECIFIED USER
router.get('/user/:uid', setupsController.getSetupsByUserID);

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
  setupsController.updateSetup);

// DELETE AN EXISTING SETUP
router.delete('/:sid', setupsController.deleteSetup);



module.exports = router;