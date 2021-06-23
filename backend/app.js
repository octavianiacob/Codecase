const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

const authRoutes = require('./routes/auth-routes');
const setupsRoutes = require('./routes/setups-routes');
const usersRoutes = require('./routes/users-routes');
const toolsRoutes = require('./routes/tools-routes');
const HttpError = require('./models/http-error');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const app = express();

app.use(express.json());

//CORS
app.use(cors());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Passport Auth Routes
app.use(authRoutes);


// Check if user is logged in
const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}

// Setups routes
//app.use('/api/setups', checkUserLoggedIn, setupsRoutes);
app.use('/api/setups', setupsRoutes);

// User routes
//app.use('/api/users', checkUserLoggedIn, usersRoutes);
app.use('/api/users', usersRoutes);

// Tools routes
//app.use('/api/tools', checkUserLoggedIn, toolsRoutes);
app.use('/api/tools', toolsRoutes);

//This middleware runs if a request didn't get a response
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
})

// Error handling middleware
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occured.' });
});

app.listen(5000);