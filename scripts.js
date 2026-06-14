const Library = []
const dialogOpenButton = document.querySelector('#open-dialog-button');
const bookInfoDialog = document.querySelector('#add-book-dialog');
const bookAddbutton = bookInfoDialog.querySelector('#add-book-button');
const mainBody = document.querySelector(".main-body")

dialogOpenButton.addEventListener('click', () => {
  bookInfoDialog.showModal();
})

function Book(title, author, pages, background) {
  if (!new.target){throw Error("you have to use 'new' operator to call the constructor")}
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.background = background;
  this.UID = crypto.randomUUID()

}

function addBookToLibrary(title, author, pages, background) {
  const book = new Book(title, author, pages, background)
  Library.push(book)
}

addBookToLibrary("Name of the Wind", "Patrick Rothfuss", 550, "https://grimoakpress.com/cdn/shop/files/cover-notw-fc.jpg?v=1706902909&width=713");
addBookToLibrary("The River of Doubt", "Candice Millard", 490, "https://upload.wikimedia.org/wikipedia/en/5/55/The_River_of_Doubt.jpg");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 500, "none");
addBookToLibrary("Master & Apprentice", "Claudia Gray", 400, "none");

console.log(Library) 

Library.forEach((book) => {
  const container = document.createElement("div");
  const bookTitle = document.createElement("h4");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const containerFooter = document.createElement("div");
  const readUnread = document.createElement("input");
  const readText = document.createElement("p");
  const deleteButton = document.createElement("button");
  const bookCover = document.createElement("img")

  mainBody.appendChild(container);
  container.appendChild(bookCover);
  if (book.background === "none") {
    container.appendChild(bookTitle);
    container.appendChild(bookAuthor);
    container.appendChild(bookPages);
  }
  container.appendChild(containerFooter);
  containerFooter.appendChild(readUnread);
  containerFooter.appendChild(readText);
  containerFooter.appendChild(deleteButton);

  bookCover.onerror = function () {
    bookCover.src = '/pictures/No_cover.jpeg'
  }
  bookCover.src = book.background;
  bookCover.alt = `${book.title} ${book.author}`;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>`;

  readUnread.type = "checkbox";
  container.className = "container";
  bookTitle.className = "title";
  bookAuthor.className = "author";
  containerFooter.className = "container-footer";
  bookPages.className = "pages";
  deleteButton.className = "delete-button";
  bookCover.className = "coverimg"
});