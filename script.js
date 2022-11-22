const library = [];
var counter = 0;

var titleInput = document.querySelector('#title');
var authorInput = document.querySelector('#author');
var pagesInput = document.querySelector('#pages');

const submitButton = document.querySelector('.button');
const bookCardHolder = document.querySelector('.book-cards');
const addBookButton = document.querySelector('#add-book')
const formWrapper = document.querySelector('#form-wrapper');
const form = document.querySelector('form');
const container =  document.querySelector('.container');

console.log(authorInput.value);



submitButton.addEventListener('click', (event) => { event.preventDefault() });
submitButton.addEventListener('click', addBookToLib);
submitButton.addEventListener('click', createBookCard);
addBookButton.addEventListener('click', openFormWindow);



function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

Book.prototype.isRead = function(){
    console.log("read");
}





function addBookToLib() {
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value);
    library[counter] = newBook;
}

function openFormWindow(){
    formWrapper.style.display = "block";
    form.style.display = "grid";

}

function createBookCard(){
    let createButton = document.createElement('button');
    createButton.id = "exit-button";
    let createNewDiv = document.createElement('div');

    createNewDiv.classList.add("card");
    createNewDiv.setAttribute("data-index", counter);
    bookCardHolder.appendChild(createNewDiv);

    let pointToNewCard = document.querySelector('.book-cards').lastChild;
    pointToNewCard.appendChild(createButton);


    for (let i = 0; i < 3; i++) {
        let createParaG = document.createElement('p');
        pointToNewCard.appendChild(createParaG);
    }
    console.log(library);
    let firstPara = pointToNewCard.childNodes[1];
    let secondPara = pointToNewCard.childNodes[2];
    let thirdPara = pointToNewCard.childNodes[3];
    firstPara.textContent = library[counter].title;
    secondPara.textContent = library[counter].author;
    thirdPara.textContent = library[counter].pages;

    formWrapper.style.display = "none";

    counter++;
    
}





