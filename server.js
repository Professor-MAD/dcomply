const express = require('express');
const mongoose = require('mongoose');
const Video = require('./models/Video'); // Import the Video model
const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://your-mongo-connection-string')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware to parse JSON data
app.use(express.json());

// Placeholder for API routes (can be re-enabled later)
app.get('/api/videos/:id', (req, res) => {
  res.json({ title: "Placeholder video title" });
});

// Serve static files from the 'images' folder
app.use('/images', express.static('images'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
