import Books from "./modules/addbook.js";
import retrieveFromLocalStorage from "./modules/getdata.js";
import displayBooks from "./modules/displaybooks.js";
import deleteBook from "./modules/deletebook.js";
import { DateTime } from "./modules/luxon.min.js";

const titleObj = document.querySelector('#title');
const authorObj = document.querySelector('#author');
const formObj = document.querySelector('#form');
const container = document.getElementById('books-list');
const date = document.querySelector('.date-time');


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
  
  const homePageSection = document.getElementById('home-page');
const addPageSection = document.getElementById('add-page');
const contactPageSection = document.getElementById('contact-page');

const linksBtn = document.getElementById('lists');
const addBookBtn = document.getElementById('add-link');
const contactBtn = document.getElementById('contact');

linksBtn.addEventListener('click', () => {
  addPageSection.style.display = 'none';
  contactPageSection.style.display = 'none';
  homePageSection.style.display = 'block';

  linksBtn.classList.add('active');
  addBookBtn.classList.remove('active');
  contactBtn.classList.remove('active');
});

addBookBtn.addEventListener('click', () => {
  homePageSection.style.display = 'none';
  contactPageSection.style.display = 'none';
  addPageSection.style.display = 'block';

  linksBtn.classList.remove('active');
  addBookBtn.classList.add('active');
  contactBtn.classList.remove('active');
});

contactBtn.addEventListener('click', () => {
  addPageSection.style.display = 'none';
  homePageSection.style.display = 'none';
  contactPageSection.style.display = 'block';

  linksBtn.classList.remove('active');
  contactBtn.classList.add('active');
  addBookBtn.classList.remove('active');
});

window.addEventListener('DOMContentLoaded', () => {
  addPageSection.style.display = 'none';
  contactPageSection.style.display = 'none';
  homePageSection.style.display = 'block';
});

date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);