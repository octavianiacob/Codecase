const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setupSchema = new Schema({
  title: { type: String, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
}, {timestamps: true});

module.exports = mongoose.model('Setup', setupSchema);