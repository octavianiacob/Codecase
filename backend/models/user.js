const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: String,
  firstName: String,
  lastName: String,
  username: String,
  photoURL: String
});

mongoose.model('users', userSchema);