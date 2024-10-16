const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Replace with your actual MongoDB connection string
const mongoURI = 'mongodb+srv://michaeldioguardi:%24PACEwhore%242024%21@cluster0.bdxnz.mongodb.net/myLibrary?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB using Mongoose (removed deprecated options)
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define a Mongoose schema for a book
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String, // This will store the path to the image file
    required: true
  }
});

// Create a Mongoose model based on the schema
const Book = mongoose.model('Book', bookSchema);

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Define a route to fetch a book by ID
app.get('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching the book', error: err });
  }
});

// Serve static files from the 'images' folder
app.use('/images', express.static('images'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
