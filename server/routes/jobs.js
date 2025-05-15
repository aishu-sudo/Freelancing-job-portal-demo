const express = require('express');
const router = express.Router();
const Job = require('../models/job');

// Get all jobs
router.get('/', async(req, res) => {
    try {
        const jobs = await Job.find().populate('client', 'name email');
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single job
router.get('/:id', async(req, res) => {
    try {
        const job = await Job.findById(req.params.id).populate('client', 'name email');
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create job (in real app, add authentication)
router.post('/', async(req, res) => {
    const job = new Job({
        title: req.body.title,
        description: req.body.description,
        client: req.body.clientId, // In real app, get from auth
        skillsRequired: req.body.skillsRequired,
        budget: req.body.budget
    });

    try {
        const newJob = await job.save();
        res.status(201).json(newJob);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;