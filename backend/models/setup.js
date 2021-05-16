const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setupSchema = new Schema({
  title: { type: String, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
  likes: { type: Number, default: 0 },
  usersThatLiked: [{ type: mongoose.Types.ObjectId, required: true, ref: 'User' }],
  description: { type: String },
  tools: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Tool' }],
  notes: [{ type: mongoose.Types.ObjectId, ref: 'Note' }]

}, { timestamps: true });

module.exports = mongoose.model('Setup', setupSchema);