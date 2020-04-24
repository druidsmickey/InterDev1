const mongoose = require('mongoose');

const accessorySchema = mongoose.Schema({
	brand: String,
	model: String,
	description: String,
	price: Number
});

module.exports = mongoose.model('accessories', accessorySchema);
