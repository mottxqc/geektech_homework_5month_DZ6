export const addBook = (book) => {
    return { type: 'ADD_BOOK', payload: book };
};
  
export const editBook = (book) => {
    return { type: 'EDIT_BOOK', payload: book };
};
  
export const deleteBook = (book) => {
    return { type: 'DELETE_BOOK', payload: book };
};