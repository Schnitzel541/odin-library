const myLibrary = [];

function Book(name, author, year, pageCount, read) {
    this.name = name,
    this.author = author,
    this.year = year,
    this.pageCount = pageCount,
    this.read = read;
}

Book.prototype.addToArray = function() {
    myLibrary.push(this)
}

function displayBooks() {
    let table = document.querySelector("table");
    if (!table) {
        document.createElement("table")
        document.body.appendChild(table);
    }

    let tbody = table.querySelector("tbody");
    if (!tbody) {
        document.createElement("tbody");
        table.appendChild(tbody)
    }

  myLibrary.forEach((book) => {
    let newRow = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = book.name;
    newRow.appendChild(nameCell);

    let authorCell = document.createElement('td');
    authorCell.textContent = book.author;
    newRow.appendChild(authorCell);
    
    let yearCell = document.createElement('td');
    yearCell.textContent = book.year;
    newRow.appendChild(yearCell);

    let pageCountCell = document.createElement('td');
    pageCountCell.textContent = book.pageCount;
    newRow.appendChild(pageCountCell);

    let readCell = document.createElement('td');
    readCell.textContent = book.read;
    newRow.appendChild(readCell);

    tbody.appendChild(newRow);

});
}

function promptUserForBook() {
    const name = prompt("Enter the name of the book");
    const author = prompt("Enter the author of the book");
    const year = prompt("Enter the year of the book");
    const pageCount = prompt("Enter the amount of pages of the book");
    const read = prompt("Have you read this book?");

    const newBook = new Book(name, author, year, pageCount, read);
    newBook.addToArray();
}
promptUserForBook();
promptUserForBook();
promptUserForBook();

displayBooks();
