const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
  setup: { type: mongoose.Types.ObjectId, ref: 'Setup' },
  tool: { type: mongoose.Types.ObjectId, ref: 'Tool' },
  markdown: { type: String, required: true }
});

module.exports = mongoose.model('Note', noteSchema);