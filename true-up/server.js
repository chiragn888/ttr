// Import necessary dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import routes
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const jobRoutes = require('./routes/jobRoutes');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Database connection
const dbURI = 'mongodb://localhost:27017/trueUp'; // Replace with your MongoDB URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

// Use routes
app.use(authRoutes);
app.use(profileRoutes);
app.use(jobRoutes);

// Serve static files from the React app
app.use(express.static('public'));

// Basic route for testing the server
app.get('/', (req, res) => {
  res.send('Welcome to True Up Job Portal');
});

// Listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```