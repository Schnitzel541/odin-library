function Book(name, author, year, pageCount, read) {
    this.name = name,
    this.author = author,
    this.year = year,
    this.pageCount = pageCount,
    this.read = read;
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

const harryPotter = new Book("Harry Potter", "J.K. Rowling", 1995, 342, false);
const lordOfTheRings = new Book("Lord of the rings", "J.R.R Tolkien", 1899, 342, true);
const orwell1984 = new Book("1984", "George Orwell", 1950, 342, true);

const myLibrary = [harryPotter, lordOfTheRings, orwell1984];

displayBooks();
