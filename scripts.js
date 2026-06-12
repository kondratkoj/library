const Library = []

function Book(title, author, pages) {
  if (!new.target){throw Error("you have to use 'new' operator to call the constructor")}
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.UID = crypto.randomUUID()

}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages)
  Library.push(book)
}

addBookToLibrary("thisisatest", "madebyme", 420);
addBookToLibrary("thisisanothertest", "madebyalsome", 7);
addBookToLibrary("Book4", "J.K.", 71);
addBookToLibrary("Book3", "J.K.", 69);

console.log(Library)