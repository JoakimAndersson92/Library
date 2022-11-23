const library = [];

var titleInput = document.querySelector('#title');
var authorInput = document.querySelector('#author');
var pagesInput = document.querySelector('#pages');

const submitButton = document.querySelector('.button');
const haveReadCheckbox = document.querySelector('[type="checkbox"]');
const bookCardHolder = document.querySelector('.book-cards');
const addBookButton = document.querySelector('#add-book')
const formWrapper = document.querySelector('#form-wrapper');
const form = document.querySelector('form');
const container =  document.querySelector('.container');

console.log(authorInput.value);



submitButton.addEventListener('click', (event) => {event.preventDefault()});
submitButton.addEventListener('click', addBookToLib);
submitButton.addEventListener('click', createBookCard);
addBookButton.addEventListener('click', openFormWindow);



function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLib() {
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value);
    library.push(newBook);
}

function openFormWindow(){
    formWrapper.style.display = "block";
    form.style.display = "grid";

}


function createBookCard(){
    let createDiv = document.createElement('div');
    let createPara = document.createElement('p');
    let createExit = document.createElement('button');

    createDiv.classList.add('card');
    createExit.classList.add('exit-button');
    createExit.setAttribute("data-index", library.length);
    createDiv.setAttribute("data-index", library.length);
    

    bookCardHolder.appendChild(createDiv);
    bookCardHolder.lastChild.appendChild(createExit);
    let newCardDiv = bookCardHolder.lastChild;

    for (let i = 0; i < 4; i++) {
        let createPara = document.createElement('p');
        newCardDiv.appendChild(createPara);
    }
    

    let exit = document.querySelector('.book-cards').lastChild.children[0];
    let para1 = document.querySelector('.book-cards').lastChild.children[1];
    let para2 = document.querySelector('.book-cards').lastChild.children[2];
    let para3 = document.querySelector('.book-cards').lastChild.children[3];
    let para4 = document.querySelector('.book-cards').lastChild.children[4];

    exit.textContent = "X";
    para1.textContent = library[library.length -1].title;
    para2.textContent = library[library.length -1].author;
    para3.textContent = library[library.length -1].pages;

    if(haveReadCheckbox.checked){
    para4.textContent = "Complete";
    }
    else{
        para4.textContent = "Not read";          
    }

    exit.addEventListener('click', removeCard);
  
    formWrapper.style.display = "none";
    form.reset();
}

function removeCard(){
    
    this.parentElement.style.display = "none";
}





