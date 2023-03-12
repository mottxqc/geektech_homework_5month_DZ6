import React from 'react';

const Book = ({ book, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.year}</p>
      <p>{book.description}</p>
      <button onClick={() => onEdit(book)}>Edit</button>
      <button onClick={() => onDelete(book)}>Delete</button>
    </div>
  );
};

export default Book;