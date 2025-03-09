const mongoose = require('mongoose');

const compositionSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: String },
});

module.exports = mongoose.model('Composition', compositionSchema);