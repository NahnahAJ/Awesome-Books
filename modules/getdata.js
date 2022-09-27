import Books from './addbook.js';

const book = new Books();
const retrieveFromLocalStorage = (key) => {
  book.booksArray = JSON.parse(localStorage.getItem(key));
  return book.booksArray;
};
export default retrieveFromLocalStorage;
