const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

/* Middleware - Takes the code from the URL, then fetches the user profile from Google
 then calls the callback function from the Google Strategy, then redirect to dashboard */
router.get('/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

router.get('/api/logout', 
  (req, res) => {
    req.logout();
    res.redirect('/');
  }
);

router.get('/api/current_user', (req, res) => {
  if(req?.user) {
    res.send(req.user);
  }
  else {
    res.send({});
  }
});

module.exports = router;