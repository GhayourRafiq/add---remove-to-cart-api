const Cart = require('../models/cartModel');

// Get cart history for a user
exports.getCartHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find all carts associated with the user ID
    const cartHistory = await Cart.find({ userId });

    if (!cartHistory) {
      return res.status(404).json({ error: 'Cart history not found' });
    }

    res.status(200).json({ cartHistory });
  } catch (error) {
    console.error('Error fetching cart history:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
