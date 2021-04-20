const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth-controller')

// 
router.get('/auth/google', authController.step1);

// 
router.get('/auth/google/callback', authController.step2);

router.get('/api/logout', (req, res) => {
  req.logout();
  res.send({message: 'logged out'});
});

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;