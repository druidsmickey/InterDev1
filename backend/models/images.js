const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema({
  // files_id: s,
  path: String,
  caption: String
});

module.exports = mongoose.model('images', imagesSchema);