const myLibrary = [];

function Book(title, author, genre, length) {
    this.title = title;
    this.author = author;
    this.genre = genre; 
    this.length = length;
    this.read = false;
    this.summary = function () {
        return `The title of the book is ${this.title}, written by ${this.author} that is in the ${this.genre} genre and is ${this.length} pages long.`
    }
}

function addBookToLibrary(title, author, genre, length) {
    const book = new Book(title, author, genre, length);
    myLibrary.push(book);
    return book;
}

function addElement(bookName, index) {
    let cardGrid = document.querySelector(".container")
    let newCard = document.createElement("div");
    newCard.setAttribute("data-attribute", index)
    newCard.classList.add("card");
    newCard.innerHTML = `
    <p>Title: ${bookName.title}</p>
    <p>Author: ${bookName.author}</p>
    <p>Genre:${bookName.genre}</p>
    <p>Page Length:${bookName.length}</p>
    <p> Read Already: ${bookName.read}</p> 
    <button type="button" id="read-book" data-attribute="${index}">Read</button>     
    <button type="button" id="remove-book" data-attribute="${index}">Remove</button>     
    `;
    cardGrid.appendChild(newCard)

  newCard.querySelector("#remove-book").addEventListener("click", (e) => {
        const bookToRemove = document.querySelector(`[data-attribute="${index}"]`);
        if (bookToRemove) {
            cardGrid.removeChild(bookToRemove);
        }

  })
            document.querySelector("#read-book").addEventListener("click", () => {
            console.log(Book.read)
      
    })
}

function addAllBooks(booksArray) {
    for (let i = 0; i < myLibrary.length; i++) {
        addElement(booksArray[i], i)
    }
}

function openAddBookDialog() {
    const dialogParent = document.querySelector("nav");
    const dialog = document.createElement("dialog")
    dialog.innerHTML = `
    <form method="post" id="BookToAdd">
    <p>
    <label>
    Title:
    <input type= "text" id="title" required />
    </label>
    </p>
        <label>
    Author:
    <input type= "text" id="author" required />
    </label>
    </p>
        <label>
    Genre:
    <input type= "text" id="genre" required />
    </label>
    </p>
        <label>
    Pages:
    <input type= "text" id="length" required />
    </label>
    </p>
    <p>
    <button type="submit" id="dialog-submit">Submit</button> 
    </p>
    </form>
    `
    dialogParent.appendChild(dialog)
    dialog.showModal();
    document.querySelector("#dialog-submit").addEventListener("click", (e) => {
        e.preventDefault();
        addElement(addBookToLibrary(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("genre").value, document.getElementById("length").value))
        dialog.remove();
    })
}


document.querySelector("#addBookButton").addEventListener("click", () => {
    openAddBookDialog()
})





// let firstBook = addBookToLibrary("Witch Doctor", "Steven King", "Horror", "400")
// let secondBook = addBookToLibrary("Rubber Ducky", "King Jarn", "Fantasy", "200")
// let thirdBook = addBookToLibrary("Rubber Ducky", "King Jarn", "Fantasy", "200")
// let fourthBook = addBookToLibrary("Rubber Ducky", "King Jarn", "Fantasy", "200")
// let fifthBook = addBookToLibrary("Rubber Ducky", "King Jarn", "Fantasy", "200")
let sixthBook = addBookToLibrary("Rubber Ducky", "King Jarn", "Fantasy", "200")

// addAllBooks(myLibrary)


