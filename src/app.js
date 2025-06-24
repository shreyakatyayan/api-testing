const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/api-testing');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

module.exports = { app, connectDB };
