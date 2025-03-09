const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
    required: true 
    },
    cart: [
        { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product' }
    ]
},
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);