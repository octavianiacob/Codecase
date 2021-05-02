const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: { type: String, unique: true },
  fullName: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: {type: String },
  username: { type: String },
  photoURL: { type: String },
  setups: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Setup' }],
  likedSetups: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Setup' }]
});

module.exports = mongoose.model('User', userSchema);