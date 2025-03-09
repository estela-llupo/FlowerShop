const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    category: {type: String},
});

module.exports = mongoose.model('Flower', flowerSchema);

