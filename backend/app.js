const express = require('express');

require('./services/passport');
const authRoutes = require('./routes/auth-routes');
const setupsRoutes = require('./routes/setups-routes');
const HttpError = require('./models/http-error');

const app = express();



app.use(express.json());

authRoutes(app);

app.use('/api/setups', setupsRoutes); // /api/setups/...

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