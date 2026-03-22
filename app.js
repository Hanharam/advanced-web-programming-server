const express = require('express')
const path = require('path')

// Create Express app object
const app = express();

// Server can read JSON data
app.use(express.json());

// Route files
const studentRoutes = require('./routes/studentRoutes');

// Mapping routes, address
app.use('/students', studentRoutes);

module.exports = app;