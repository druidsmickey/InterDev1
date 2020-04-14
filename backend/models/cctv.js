import mongoose from 'mongoose';

const cctvSchema = mongoose.Schema({
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

const CCTVs = mongoose.model('CCTVs', cctvSchema);

export default CCTVs;
