let Library = []
// Grabs the DOM elements
const dialogOpenButton = document.querySelector('#open-dialog-button');
const bookInfoDialog = document.querySelector('#add-book-dialog');
const addBookButton = bookInfoDialog.querySelector('#add-book-button');
const mainBody = document.querySelector(".main-body");
const bookForm = document.querySelector('#book-form');

// grabs the dialog inputs
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const cover = document.querySelector("#cover");

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

displayBooks();

console.log(Library) 

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary(title.value, author.value, pages.value, cover.value.startsWith("https://") ? cover.value : "none");
  displayBooks();
  bookInfoDialog.close();
  title.value = "";
  author.value = "";
  pages.value = "";
  cover.value = "";
})

function displayBooks() {
  mainBody.innerHTML = '';
  console.log(Library)
  Library.forEach((book) => {
    // makes the book card elements
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
    // displays text if no cover is provided
    if (book.background === "none") {
      container.appendChild(bookTitle);
      container.appendChild(bookAuthor);
      container.appendChild(bookPages);
    }
    container.appendChild(containerFooter);
    containerFooter.appendChild(readUnread);
    containerFooter.appendChild(readText);
    containerFooter.appendChild(deleteButton);
    // Defaults photo displayed for cover if no url is provided
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
    readText.textContent = "READ"
    readUnread.type = "checkbox";
    container.className = "container";
    bookTitle.className = "title";
    bookAuthor.className = "author";
    containerFooter.className = "container-footer";
    bookPages.className = "pages";
    deleteButton.className = "delete-button";
    bookCover.className = "coverimg"

    deleteButton.addEventListener('click', () => {
      mainBody.removeChild(container)
      Library = Library.filter(b => b.UID !== book.UID)    
    });
  });
}
