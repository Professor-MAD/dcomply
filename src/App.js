import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [books, setBooks] = useState([]);

    // Fetch the books from the backend when the component mounts
    useEffect(() => {
        fetch('/api/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
