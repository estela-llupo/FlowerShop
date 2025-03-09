const Flower = require('../models/product.model');

exports.getAllProducts = async (req, res) => { 
    try {
    const products = await Flower.find();
    res.json(products);
} catch (err) {
    res.status(500).json({ message: err.message });
} };

exports.getProductById = async (req, res) => { 
    try {
        const id = req.params.id;
        const product = await Flower.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
            }
            res.json(product);
            } catch (err) {
                res.status(500).json({ message: err.message });
                }
                
};



exports.getProductsDetails = async (req, res) => { 
    try {
        const id = req.params.id;
        const product = await Flower.findById
        (id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
            }
            res.json(product);
            } catch (err) {
                res.status(500).json({ message: err.message });
                }
                
};
exports.deleteProduct = async (req, res) => { 
    try {
        const id = req.params.id;
        await Flower.findByIdAndDelete(id);
    } catch (err) {
        res.status(500).json({ message: err.message });
        }
};

const Composition = require('../models/compose.modules');
exports.getAllComposition = async (req, res) => { 
    try {
    const compositions = await Composition.find();
    res.json(compositions);
} catch (err) {
    res.status(500).json({ message: err.message });
} };