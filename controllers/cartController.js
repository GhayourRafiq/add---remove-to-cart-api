const User = require('../models/userModel');
const Product = require('../models/productModel');
const Cart = require('../models/cartModel');

// Add product to in cart 
exports.addToCart = async (req, res) => {
  try {
    const { productId, userId, quantity } = req.body;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Calculate total price for the item
    const totalPrice = product.price * quantity;

    // Find or create the cart for the user
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product is already in the cart
    const existingItemIndex = cart.items.findIndex(item => item.productId.equals(product._id));
    if (existingItemIndex !== -1) {
      // If the product is already in the cart, update its quantity and total price
      cart.items[existingItemIndex].quantity = quantity;
      cart.items[existingItemIndex].totalPrice = totalPrice;
    } else {
      // If the product is not in the cart, add it with the specified quantity and total price
      cart.items.push({ productId: product._id, quantity, totalPrice });
    }

    // Save the cart to the database
    await cart.save();

    res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Remove product from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { productId, userId } = req.body;

    // Find the cart for the user
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    // Ensure that the items array is initialized
    if (!cart.items) {
      cart.items = [];
    }

    // Remove product from cart's items array
    cart.items = cart.items.filter(item => !item.productId.equals(productId));
    await cart.save();

    res.status(200).json({ message: 'Product removed from cart successfully' });
  } catch (error) {
    console.error('Error removing product from cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Remove product from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { productId, userId } = req.body;

    // Find the cart for the user
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    // Ensure that the items array is initialized
    if (!cart.items) {
      cart.items = [];
    }

    // Remove product from cart's items array
    cart.items = cart.items.filter(item => !item.productId.equals(productId));
    await cart.save();

    res.status(200).json({ message: 'Product removed from cart successfully' });
  } catch (error) {
    console.error('Error removing product from cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
