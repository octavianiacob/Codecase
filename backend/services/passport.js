const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log('access token: ', accessToken);
      // console.log('refresh token: ', refreshToken);
      // console.log('profile: ', profile);
      User.findOne({ googleID: profile.id})
        .then((existingUser) => {
          if (existingUser) {
            //googleID is already in DB
          } else {
            // googleID is not in DB -> create new user
            new User({ googleID: profile.id }).save();
          }
        });
    }
  )
);