const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: { type: String, unique: true },
  fullName: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: {type: String },
  username: { type: String, unique: true },
  photoURL: { type: String }
});

module.exports = mongoose.model('User', userSchema);