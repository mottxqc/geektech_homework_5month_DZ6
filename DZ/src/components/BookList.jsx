import React from 'react';
import Book from './Book';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;