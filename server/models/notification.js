const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  // Notification content
  message: {
    type: String,
    required: true,
  },
  
  // Registry item association (item for which the notification is generated)
  registryItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RegistryItem', // Reference to the RegistryItem model
    required: true,
  },
  
  // User association (user who receives the notification)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model representing the couple/user
    required: true,
  },

  // Timestamp for when the notification was created
  createdAt: {
    type: Date,
    default: Date.now,
  },

  // Flag indicating whether the notification has been read
  isRead: {
    type: Boolean,
    default: false,
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;