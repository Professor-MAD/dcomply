const mongoose = require('mongoose');
const Video = require('./models/Video'); // Assuming you've moved the model to a separate file

const mongoURI = 'mongodb+srv://michaeldioguardi:%24PACEwhore%242024%21@cluster0.bdxnz.mongodb.net/myLibrary?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(async () => {
    console.log('MongoDB connected');

    const videos = [
      { title: 'Introduction to BComply' },
      { title: 'Advanced Compliance Techniques' }
    ];

    for (const videoData of videos) {
      // Check if the video already exists by title
      const existingVideo = await Video.findOne({ title: videoData.title });
      if (!existingVideo) {
        await Video.create(videoData); // Insert new video only if it doesn't exist
        console.log(`Video added: ${videoData.title}`);
      } else {
        console.log(`Video already exists: ${existingVideo.title}`);
      }
    }

    mongoose.connection.close();
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));
