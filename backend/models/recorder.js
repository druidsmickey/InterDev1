const mongoose = require('mongoose');

const recorderSchema = mongoose.Schema({
	brand: String,
	model: String,
	quality: String,
	compression: String,
	CVIInput: String,
	IPinput: String,
	hddcapacity: String,
	link: String,
	price: Number,
	featured: Number
});

module.exports = mongoose.model('recorders', recorderSchema);
