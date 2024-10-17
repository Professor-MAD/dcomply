const express = require('express');
const mongoose = require('mongoose');
const Video = require('./models/Video'); // Import the Video model
const app = express();
const port = 5000;

// MongoDB connection string
const mongoURI = 'mongodb+srv://michaeldioguardi:%24PACEwhore%242024%21@cluster0.bdxnz.mongodb.net/myLibrary?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Define a route to fetch a video by ID
app.get('/api/videos/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching the video', error: err });
  }
});

// Serve static files from the 'images' folder
app.use('/images', express.static('images'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
