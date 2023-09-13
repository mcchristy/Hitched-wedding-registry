const mongoose = require('mongoose');

const registrySchema = new mongoose.Schema({
  registryName: {
    type: String,
    required: true,
  },
  registryType: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  
  location: String,
  description: String,

  registryItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', 
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],

  couple: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
});

const Registry = mongoose.model('Registry', registrySchema);

module.exports = Registry;