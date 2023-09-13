const mongoose = require('mongoose');

const registryItemSchema = new mongoose.Schema({
  // Product information
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  imageUrl: String,

  registry: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Registry',
    required: true,
  },
});

const RegistryItem = mongoose.model('RegistryItem', registryItemSchema);

module.exports = RegistryItem;