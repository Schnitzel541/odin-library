const bookCardContainer = document.querySelector('.container');

const myLibrary = [{}, {}, {}]

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


const modal = document.querySelector(".modal")
const openModalButton = document.querySelector("#openModal");
openModalButton.addEventListener('click', () => {
    modal.showModal();})

displayBook(myLibrary);