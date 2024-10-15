// server.js
const express = require('express');
const app = express();
const port = 5000;

// This serves as a test route to see if the backend is working
app.get('/api/books', (req, res) => {
  res.json([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' }
  ]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
