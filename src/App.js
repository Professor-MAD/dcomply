import React, { useState } from 'react';
import './App.css';

function App() {
  const [book, setBook] = useState(null);

  const fetchBook = (id) => {
    fetch(`/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error('Error fetching book:', error));
  };

  return (
    <div>
      <h1>Ham Creatures</h1>
      <button onClick={() => fetchBook('670fe7f707095f282dddc69f')}>Show Intergalactic Spore</button>
      <button onClick={() => fetchBook('670fe7f707095f282dddc6a0')}>Show Wire Leaf</button>

      {book && (
        <div>
          <h2>{book.title}</h2>
          <img src={book.image} alt={book.title} style={{ width: '200px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}

export default App;
