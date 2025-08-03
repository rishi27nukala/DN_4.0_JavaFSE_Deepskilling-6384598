import React from 'react';

const books = [
  { name: 'Master React', price: 670 },
  { name: 'Deep Dive into Angular 11', price: 800 },
  { name: 'Mongo Essentials', price: 450 },
];

const BookDetails = () => {
  return (
    <div className="section">
      <h2>Book Details</h2>
      {books.map((book, index) => (
        <div key={index}>
          <strong>{book.name}</strong>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
