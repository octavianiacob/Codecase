const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = require('../models/user');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id})
      if (existingUser) {
        //googleID is already in DB
        return done(null, existingUser);
      }
      // googleID is not in DB -> create new user
      console.log(profile);
      const user = await new User({
        googleID: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        username: profile.displayName.split(' ').join('').toLowerCase(),
        photoURL: profile.photos[0].value,
        country: '',
        website: '',
        github: '',
        about: '',
        setups: [],
        likedSetups: []
       }).save();
      done(null, user);
    }
  )
);