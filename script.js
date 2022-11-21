const library = [];
var counter = 0;

var titleInput = document.querySelector('#title');
var authorInput = document.querySelector('#author');
var pagesInput = document.querySelector('#pages');

const submitButton = document.querySelector('.button');

console.log(authorInput.value);



submitButton.addEventListener('click', (event) => { event.preventDefault() });
submitButton.addEventListener('click', addBookToLib);



function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLib() {

    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value);
    library[counter] = newBook;

    library.forEach(book => console.log(book));

    counter++;

}





