const mongoose = require('mongoose');

// Load environment variables from a .env file if available
require('dotenv').config();

// MongoDB connection URL from environment variables
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hitched_db';

// Configure and establish the MongoDB connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//  useCreateIndex: true,
 // useFindAndModify: false,
});

const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
