var mongoose = require('mongoose');

var brandSchema = mongoose.Schema({
	value: String,
	id: String	
});

var Brands = mongoose.model('Brands',brandSchema);

module.exports = Brands;
