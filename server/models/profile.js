const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    brideName: {
        type: String,
        required: true,
      },
    groomName: {
        type: String,
        required: true,
      },
    registryTitle: {
        type: String,
    },
    weddingDate: {
        type: String,
        required: true
    },
    registryItems: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product', // Reference to the Product model
          },
          quantity: {
            type: Number,
            default: 1, // Default quantity
          },
        },
      ],
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);