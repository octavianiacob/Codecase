const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toolSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  logo: { type: String }
});

module.exports = mongoose.model('Tool', toolSchema);