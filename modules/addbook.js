export default class Books {
  constructor() {
    this.booksArray = JSON.parse(localStorage.getItem('store')) || [];
  }


    addBook = (title, author) => {
    const id = Math.floor(Math.random() * 10000);
    this.booksArray = this.booksArray.concat({ title, author, id });
    localStorage.setItem('store', JSON.stringify(this.booksArray));
    return this.booksArray;
  }
}
