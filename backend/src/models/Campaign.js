const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    budget: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['active', 'paused', 'completed'], default: 'active' },
});

module.exports = mongoose.model('Campaign', CampaignSchema);

