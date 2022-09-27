import Books from "./modules/addbook.js";
import retrieveFromLocalStorage from "./modules/getdata.js";
import displayBooks from "./modules/displaybooks.js";
import deleteBook from "./modules/deletebook.js";

const titleObj = document.querySelector('#title');
const authorObj = document.querySelector('#author');
const formObj = document.querySelector('#form');
const container = document.getElementById('books-list');


const book = new Books();
book.booksArray = retrieveFromLocalStorage('store') || [];

book.booksArray.forEach(e => {
  displayBooks(e);
});


formObj.addEventListener('submit', (e) => {
  e.preventDefault();
  book.addBook(titleObj.value, authorObj.value);
  container.innerHTML = '';
  localStorage.setItem('store', JSON.stringify(book.booksArray));
  book.booksArray.forEach(e => {
    displayBooks(e);
  })
  formObj.reset();
  } )

  container.addEventListener('click', (e) => {
    deleteBook(e.target);
  });

  if (book.booksArray.length === 0) {
    container.innerHTML = '<p class="no-books">No books available!</p>';
  }
  