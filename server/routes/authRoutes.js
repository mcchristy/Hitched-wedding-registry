const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

// Define routes for authentication

// Register a new user
router.post('/register', registerUser);

// Log in a user
router.post('/login', loginUser);

// Log out a user
router.post('/logout', logoutUser);

module.exports = router;
