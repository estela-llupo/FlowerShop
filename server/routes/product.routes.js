const productController = require('../controller/product.controller');
const Composition = require('../controller/product.controller');

module.exports = (app) => {
    app.get('/api/products', productController.getAllProducts);
    app.get('/api/products/:id', productController.getProductById);
    app.get('/api/compositions', Composition.getAllComposition);
    app.delete('/api/products/:id', productController.deleteProduct);
};