const Campaign = require('../models/Campaign');

exports.createCampaign = async (req, res) => {
    try {
        const campaign = new Campaign({ ...req.body, user: req.user.id });
        await campaign.save();
        res.status(201).json(campaign);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find({ user: req.user.id });
        res.json(campaigns);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

