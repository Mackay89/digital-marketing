const RealTimeData = require('../models/RealTimeData');

// Fetch real-time analytics data
exports.getRealTimeData = async (req, res) => {
    try {
        const data = await RealTimeData.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Save real-time data
exports.saveRealTimeData = async (req, res) => {
    try {
        const data = new RealTimeData(req.body);
        await data.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

