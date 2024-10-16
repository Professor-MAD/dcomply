const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Replace with your actual MongoDB connection string
const mongoURI = 'mongodb+srv://michaeldioguardi:%24PACEwhore%242024%21@cluster0.bdxnz.mongodb.net/myLibrary?retryWrites=true&w=majority&appName=Cluster0';



// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define a Mongoose schema for a book
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

// Create a Mongoose model based on the schema
const Book = mongoose.model('Book', bookSchema);


// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Define a simple route to test the server
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books from the database
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books', error: err });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
