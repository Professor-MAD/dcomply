const mongoose = require('mongoose');

// Define the Book schema and model directly in seed.js
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema);

// Replace with your actual MongoDB connection string
const mongoURI = 'mongodb+srv://michaeldioguardi:%24PACEwhore%242024%21@cluster0.bdxnz.mongodb.net/myLibrary?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(async () => {
    console.log('MongoDB connected');

    // Define the two books
    const books = [
      {
        title: 'Intergalactic Spore',
        image: '/images/intergalactic-spore.jpg'
      },
      {
        title: 'Wire Leaf',
        image: '/images/wire-leaf.jpg'
      }
    ];

    // Add the books to the database and log their IDs
    const result = await Book.insertMany(books);
    result.forEach(book => console.log(`Book added: ${book.title}, ID: ${book._id}`));

    mongoose.connection.close();
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));
