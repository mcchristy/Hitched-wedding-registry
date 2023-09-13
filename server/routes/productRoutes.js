const express = require('express');
const router = express.Router();
const { createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// Define routes for managing products

// Create a new product
router.post('/products', createProduct);

// Get a product by ID
router.get('/products/:productId', getProduct);

// Update a product by ID
router.put('/products/:productId', updateProduct);

// Delete a product by ID
router.delete('/products/:productId', deleteProduct);

module.exports = router;
