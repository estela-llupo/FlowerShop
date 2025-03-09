const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware.js');

module.exports = (app) => {
    app.post('/api/users/register', userController.register);
    app.post('/api/users/login', userController.login);
    app.get('/api/users/profile', authMiddleware, userController.getProfile);
    app.post('/api/users/cart/add', authMiddleware, userController.addToCart);
    app.get('/api/users/cart', authMiddleware, userController.getCart);
    app.delete('/api/users/cart/remove/:productId', authMiddleware, userController.removeFromCart);
};