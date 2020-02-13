var mongoose = require('mongoose');

var cctvSchema = mongoose.Schema({
	brand: String,
	model: String,
	quality: String,
	type: String,
	lens: String,
	lenstype: String,
	transmission: String,
	protection: String,
	ir: String,
	audioin: String,
	powersupply: String,
	link: String,
	price: Number,
	featured: Number
});

var CCTVs = mongoose.model('CCTVs',cctvSchema);

module.exports = CCTVs;
