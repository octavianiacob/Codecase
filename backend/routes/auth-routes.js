const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth-controller')

// 
router.get('/', authController.step1);

// 
router.get('/callback', authController.step2);

module.exports = router;