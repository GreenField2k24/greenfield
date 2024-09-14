const express = require("express")
const Router = express.Router()
const productController = require('../controller/product.controller');

Router.get('/Products', productController.getAllProducts);

Router.get('/:id', productController.getProductById);

Router.post('/create', productController.createProduct);

Router.put('/:id', productController.updateProduct);

Router.delete('/:id', productController.deleteProduct);


module.exports = Router