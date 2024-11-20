const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you're using a User model for storing user data

// Protect routes with JWT
const protect = async (req, res, next) => {
    let token;

    // Check if token exists in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get the token from the header
            token = req.headers.authorization.split(' ')[1];
            
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // Find the user associated with the token (optional, depending on the implementation)
            req.user = await User.findById(decoded.id).select('-password');
            
            next(); // Allow the request to proceed to the next middleware or route handler
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, invalid token' });
        }
    }

    // If no token, send an error response
    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = protect;

