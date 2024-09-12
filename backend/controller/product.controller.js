const db = require("../models/index")
const Product = db.Product

const getAllProducts =async (req, res) => {
    try {
    const products = await Product.findAll();
    res.status(200).json(products);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
    const product = await Product.findByPk(id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};
const createProduct = async (req, res) => {
    const { name, description, price, stock, imageUrl, category_id } = req.body;
    try {
    const newProduct = await Product.create({
        name,
        description,
        price,
        stock,
        imageUrl,
        category_id
    });
    res.status(201).json(newProduct);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock, imageUrl, category_id } = req.body;
    try {
    const product = await Product.findByPk(id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
        await product.update({
        name,
        description,
        price,
        stock,
        imageUrl,
        category_id
    });
    res.status(200).json(product);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
    const product = await Product.findByPk(id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    await product.destroy();
    res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}

