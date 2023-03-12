import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, editBook, deleteBook } from './store/actions';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAdd = (book) => {
    dispatch(addBook({ ...book, id: Date.now() }));
  };

  const handleEdit = (book) => {
    dispatch(editBook(book));
  };

  const handleDelete = (book) => {
    dispatch(deleteBook(book));
  };

  return (
    <div>
      <h1>Моя библеотека</h1>
      <BookForm onSubmit={handleAdd} book={{}} />
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;