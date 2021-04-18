const express = require('express');
const router = express.Router();

const setupsController = require('../controllers/setups-controller')

// GET ALL SETUPS
router.get('/', setupsController.getAllSetups);

// POST NEW SETUP
router.post('/', setupsController.createSetup);

// GET ALL SETUPS OF THE SPECIFIED USER
router.get('/user/:uid', setupsController.getSetupsByUserID);

// GET A SPECIFIC SETUP BASED ON SETUPID
router.get('/:sid', setupsController.getSetupByID);

// UPDATE AN EXISTING SETUP
router.patch('/:sid', setupsController.updateSetup);

// DELETE AN EXISTING SETUP
router.delete('/:sid', setupsController.deleteSetup);



module.exports = router;