const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema({
  // files_id: s,
  data: Buffer,
  n: Number
});

module.exports = mongoose.model('images', imagesSchema);