const express = require('express');
const router = express.Router();

const toolsController = require('../controllers/tools-controller')

// GET ALL TOOLS
router.get('/', toolsController.getAllTools);

// GET TOOL BY ID
router.get('/:tid', toolsController.getToolByID);

// GET ALL TOOLS OF A SETUP BASED ON SETUPID
router.get('/setup/:sid', toolsController.getToolsBySetupID);

module.exports = router;