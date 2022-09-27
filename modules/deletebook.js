const container = document.getElementById('books-list');
const deleteBook = (e) => {
  if (e.classList.contains('btn')) {
    // Retrieve data-id attribute.
    // It's a string, change it into number
    const id = Number(e.getAttribute('data-id'));
    const savedBooks = JSON.parse(localStorage.getItem('store'));
    const filteredBks = savedBooks.filter((book) => book.id !== id);
    localStorage.setItem('store', JSON.stringify(filteredBks));
    e.parentElement.remove();
    if (savedBooks.length === 0) {
      container.innerHTML = '<p class="no-books">No books available!</p>';
    }
  }
};

export default deleteBook;
