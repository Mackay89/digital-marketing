const express = require('express');
const { getRealTimeData } = require('../controllers/realTimeController');
const router = express.Router();

// Get real-time data
router.get('/', getRealTimeData);

module.exports = router;

