// src/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure this path is correct

// Example POST route for login
router.post('/login', authController.login); // Make sure authController.login exists

module.exports = router;

