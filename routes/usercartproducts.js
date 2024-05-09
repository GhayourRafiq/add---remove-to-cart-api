// routes/cartRoutes.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartuserhistory');

// Route to get cart history for a user
router.get('/:userId/history', cartController.getCartHistory);

module.exports = router;
