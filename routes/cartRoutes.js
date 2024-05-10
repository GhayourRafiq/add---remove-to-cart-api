// routes/cartRoutes.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Route to add an item to the cart
router.post('/add', cartController.addToCart);

// Route to remove an item from the cart in
router.post('/remove', cartController.removeFromCart);

module.exports = router;
