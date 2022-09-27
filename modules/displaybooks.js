const container = document.getElementById('books-list');

const displayBooks = (bookObj) => {
  const holder = document.createElement('div');
  const titleAuthor = document.createElement('p');
  const removeBtn = document.createElement('button');

  titleAuthor.innerText = `"${bookObj.title}" by ${bookObj.author}`;
  removeBtn.innerText = 'Remove';
  removeBtn.setAttribute('data-id', bookObj.id);
  removeBtn.className = 'btn';
  titleAuthor.className = 'title-author';
  holder.className = 'book-holder';
  holder.append(titleAuthor);
  holder.append(removeBtn);
  container.append(holder);
};
export default displayBooks;
