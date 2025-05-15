const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: String,
    description: String,
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    skillsRequired: [String],
    budget: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);