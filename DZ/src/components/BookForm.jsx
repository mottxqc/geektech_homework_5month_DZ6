import React, { useState } from 'react';

const BookForm = ({ onSubmit, book }) => {
  const [title, setTitle] = useState(book.title || '');
  const [author, setAuthor] = useState(book.author || '');
  const [genre, setGenre] = useState(book.genre || '');
  const [year, setYear] = useState(book.year || '');
  const [description, setDescription] = useState(book.description || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, author, genre, year, description });
    setTitle('');
    setAuthor('');
    setGenre('');
    setYear('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input type="text" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Short description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">{book.id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default BookForm;