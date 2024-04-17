const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send({ message: 'No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send({ message: 'Failed to authenticate token.' });
    req.userId = decoded.id;
    next();
  });
};

// Fetch user profile
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).send({ message: 'User not found.' });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching user profile.' });
  }
});

// Update user profile
router.put('/profile', verifyToken, async (req, res) => {
  const { name, email, bio } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(req.userId, { name, email, bio }, { new: true }).select('-password');
    if (!updatedUser) return res.status(404).send({ message: 'User not found.' });
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send({ message: 'Error updating user profile.' });
  }
});

module.exports = router;