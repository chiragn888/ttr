const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  salary: {
    type: Number,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  },
  requirements: {
    experience: {
      type: String,
      required: false
    },
    skills: [String]
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;