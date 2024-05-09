// models/cartModel.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            default: 0,
        }
        
    }]
});

module.exports = mongoose.model('Cart', cartSchema);
