const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
	value: String,
	id: String	
});

module.exports = mongoose.model('brands', brandSchema);
