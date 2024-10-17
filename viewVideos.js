const mongoose = require('mongoose');
const Video = require('./models/Video'); // This will work because we have defined the model in a separate file.

const mongoURI = 'mongodb+srv://michaeldioguardi:%24PACEwhore%242024%21@cluster0.bdxnz.mongodb.net/myLibrary?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(async () => {
    console.log('MongoDB connected');

    // Fetch all videos
    const videos = await Video.find();
    console.log('All videos:', videos);

    mongoose.connection.close();
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));
