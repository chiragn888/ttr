const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Route to post a new job
router.post('/jobs', async (req, res) => {
  try {
    const { title, company, position, salary, description, location, type, requirements } = req.body;
    const newJob = new Job({
      title,
      company,
      position,
      salary,
      description,
      location,
      type,
      requirements
    });
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to get all jobs
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a single job by ID
router.get('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update a job by ID
router.patch('/jobs/:id', async (req, res) => {
  try {
    const { title, company, position, salary, description, location, type, requirements } = req.body;
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { title, company, position, salary, description, location, type, requirements },
      { new: true }
    );
    if (updatedJob) {
      res.json(updatedJob);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a job by ID
router.delete('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (job) {
      res.json({ message: 'Job deleted successfully' });
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to apply to a job by ID
router.post('/jobs/:id/apply', async (req, res) => {
  try {
    // This is a placeholder implementation. Replace this with the actual logic.
    const { applicantName, applicantEmail, resumeLink } = req.body;
    // Assuming the actual application logic involves updating the job document to include this application.
    // The implementation details for updating the Job document are beyond the scope of this file.
    // For demonstration purposes, we are just returning a success response.
    res.status(200).json({
      message: `Application received from ${applicantName}.`,
      jobId: req.params.id,
      applicantEmail,
      resumeLink
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
```