const bookCardContainer = document.querySelector(".container");

let myLibrary = [];

function Book(name, author, pages, read, uniqueId) {
  (this.name = name),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.uniqueId = Book.incrementId());
}


Book.currentId = 0;
Book.incrementId = function () {
  return Book.currentId++;
};

function displayBook(arr) {
  const bookCardContainer = document.querySelector(".container");
  bookCardContainer.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const books = document.createElement("div");
    books.classList.add("bookCard");
    bookCardContainer.appendChild(books);

    const bookName = document.createElement("div");
    bookName.classList.add("bookText");
    bookName.innerHTML = `<strong>Name:</strong> ${arr[i].name}`;
    books.appendChild(bookName);

    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("bookText");
    bookAuthor.innerHTML = `<strong>Name:</strong> ${arr[i].author}`;
    books.appendChild(bookAuthor);

    const bookPages = document.createElement("div");
    bookPages.classList.add("bookText");
    bookPages.innerHTML = `<strong>Pages:</strong> ${arr[i].pages}`;
    books.appendChild(bookPages);

    const bookButtons = document.createElement("div");
    bookButtons.classList.add("buttonContainer");
    bookButtons.innerHTML = `<button id="deleteBookBtn" onclick="deleteBookBtn(${arr[i].uniqueId})">Delete</button><button id="readBtn" name="${arr[i].uniqueId}" onclick="flipRead(${arr[i].uniqueId})">${arr[i].read ? "Read" : "Not Read"}</button>`;
    books.appendChild(bookButtons);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.add("bookButtons");
    });
  }
}
function addBookToLibrary() {
  const nameInput = document.querySelector("#bookNameInput").value;
  const authorInput = document.querySelector("#bookAuthorInput").value;
  const pagesInput = document.querySelector("#bookPagesInput").value;

  const newBook = new Book(nameInput, authorInput, pagesInput, false);
  myLibrary.push(newBook);
  displayBook(myLibrary);
  console.log(newBook);
}

const lotr = new Book("Lord of the Rings", "1137", "J.R.R. Tolkien", false)
myLibrary.push(lotr);


const modal = document.querySelector(".modal");
const openModalButton = document.querySelector("#openModal");
openModalButton.addEventListener("click", () => {
  const bookNameInput = document.querySelector("#bookNameInput");
  const bookAuthorInput = document.querySelector("#bookAuthorInput");
  const bookPagesInput = document.querySelector("#bookPagesInput");
  bookNameInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  
  modal.showModal();
});

const warning = document.createElement("div");
const addBookButton = document.querySelector("#addBookButton");
addBookButton.addEventListener("click", (event) => {

  const bookNameInput = document.getElementById("#bookNameInput");
  const bookAuthorInput = document.querySelector("#bookAuthorInput");
  const bookPagesInput = document.querySelector("#bookPagesInput");
  event.preventDefault();
  if (bookPagesInput.value !== "" && bookPagesInput.value !== isNaN){
    if (bookNameInput !== "" && bookAuthorInput !== "") {
      addBookToLibrary();
      warning.textContent = ""
      modal.close();
    }
  }
  else {
    warning.style.color = "red";
    warning.style.textAlign = "center";
    warning.textContent = "Please fill out all fields"
    modal.appendChild(warning)
  }
});

function getLastInArray() {
  const lastIndex = myLibrary[myLibrary.length - 1];
  return lastIndex;
}

function deleteBookBtn(uniqueId) {
    const bookIndex = myLibrary.findIndex((book) => book.uniqueId === uniqueId);

    if (!bookIndex !== -1) {
      myLibrary.splice(bookIndex, 1)
    }

    displayBook(myLibrary);
  }

function flipRead(uniqueId) {
  const bookIndex = myLibrary.findIndex((book) => book.uniqueId === uniqueId);

  if (bookIndex !== -1) {
    myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
  }
  displayBook(myLibrary);
}

displayBook(myLibrary);
