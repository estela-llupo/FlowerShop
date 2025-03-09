const User = require('../models/user.models');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => { 
    try{
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
            }
            const newUser = new User({ name, email, password });
            const savedUser = await newUser.save();
            res.json({ message: "User created successfully" });
            } catch (error) {
                res.status(400).json({ message: "Error creating user" });
                }
                
};
exports.login = async (req, res) => {
    try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = await user.generateToken();
    res.json({ token });
    } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
    }
};

exports.getProfile = async (req, res) => {
    try {
    const user = await User.findById(req.user.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
    } catch (error) {
    res.status(500).json({ message: 'Error getting profile' });
    }
};

exports.addToCart = async (req, res) => {
    try {
    const { productId } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
        const newCart = new Cart({ user: req.user.id, products: [product] });
        await newCart.save();
        res.json(newCart);
    } else {
        cart.products.push(product);
        await cart.save();
        res.json(cart);
    }
    } catch (error) {
    res.status(500).json({ message: 'Error adding to cart' });
    }
};

exports.getCart = async (req, res) => {
    try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
    } catch (error) {
    res.status(500).json({ message: 'Error getting cart' });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
    const { productId } = req.body;
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    const productIndex = cart.products.findIndex((product) => product.id === productId);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found in cart' });
    }
    cart.products.splice(productIndex, 1);
    await cart.save();
    res.json(cart);
    } catch (error) {
    res.status(500).json({ message: 'Error removing from cart' });
    }
};