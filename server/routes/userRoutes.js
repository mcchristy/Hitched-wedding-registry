const express = require('express');
const router = express.Router();
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');

// Define routes for managing users

// Create a new user
router.post('/users', createUser);

// Get a user by ID
router.get('/users/:userId', getUser);

// Update a user by ID
router.put('/users/:userId', updateUser);

// Delete a user by ID
router.delete('/users/:userId', deleteUser);

module.exports = router;
