import mongoose from 'mongoose';

const brandSchema = mongoose.Schema({
	value: String,
	id: String	
});

const Brands = mongoose.model('Brands', brandSchema);

export default Brands;
