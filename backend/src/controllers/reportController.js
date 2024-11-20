const Report = require('../models/Report');

// Create a new report
exports.createReport = async (req, res) => {
    try {
        const report = new Report({
            title: req.body.title,
            data: req.body.data,
            user: req.user.id,
        });
        await report.save();
        res.status(201).json(report);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all reports for a user
exports.getReports = async (req, res) => {
    try {
        const reports = await Report.find({ user: req.user.id });
        res.json(reports);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single report by ID
exports.getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (!report) return res.status(404).json({ error: 'Report not found' });
        res.json(report);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a report
exports.deleteReport = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (!report) return res.status(404).json({ error: 'Report not found' });

        if (report.user.toString() !== req.user.id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        await report.remove();
        res.json({ message: 'Report removed' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

