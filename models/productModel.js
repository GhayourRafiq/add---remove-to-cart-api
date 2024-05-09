const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({ 
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  // Add any additional fields you need for your product model
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
