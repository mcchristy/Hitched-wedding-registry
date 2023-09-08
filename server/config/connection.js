const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping');

module.exports = mongoose.connection;

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
      type: String,
      required: true
    }
  });
   const User = mongoose.model('User', userSchema);