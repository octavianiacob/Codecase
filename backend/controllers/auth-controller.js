const passport = require('passport');

const step1 = passport.authenticate('google', {
  scope: ['profile', 'email']
});

const step2 = passport.authenticate('google');

exports.step1 = step1;
exports.step2 = step2;