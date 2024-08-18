const bookCardContainer = document.querySelector('.container');
const spanBookName = document.querySelector('bookName');
const spanBookAuthor = document.querySelector('bookAuthor');
const spanBookPages = document.querySelector('bookName');


const myLibrary = [{
    name: "1984",
    author: "George Orwell",
    pages: 207,
    read: false,
},
{
    name: "1985",
    author: "George Orwell",
    pages: 207,
    read: false,
}]

function Book(name, author, pages, read) {
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.read = read;
};

function displayBook(arr) {
    const bookCardContainer = document.querySelector('.container');
    bookCardContainer.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const books = document.createElement("div");
        books.classList.add("bookCard")
        bookCardContainer.appendChild(books);

        const bookName = document.createElement("div");
        bookName.classList.add("bookText");
        bookName.innerHTML = `<strong>Name:</strong> ${arr[i].name}`
        books.appendChild(bookName);

        const bookAuthor = document.createElement("div");
        bookAuthor.classList.add("bookText");
        bookAuthor.innerHTML = `<strong>Name:</strong> ${arr[i].author}`
        books.appendChild(bookAuthor);

        const bookPages = document.createElement("div");
        bookPages.classList.add("bookText");
        bookPages.innerHTML = `<strong>Pages:</strong> ${arr[i].pages}`
        books.appendChild(bookPages);

        const bookButtons = document.createElement("div");
        bookButtons.classList.add("buttonContainer");
        bookButtons.innerHTML = `<button>Delete</button><button>Read</button>`
        books.appendChild(bookButtons)

        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.classList.add("bookButtons")
        })
    }
}

displayBook(myLibrary);