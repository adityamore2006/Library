let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.id = crypto.randomUUID();
}

function addBookToLibrary() {
  document.getElementById('book-form').addEventListener('submit', function(event){
    event.preventDefault();
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked

    myLibrary.push(new Book(title, author, pages, read))

    this.reset()
    
    updateList()

    document.querySelector('dialog').close();
  })
}

function updateList() {
  const parent = document.querySelector('.book-rows');
  parent.innerHTML = ''; //clear all previous books and information
  
  myLibrary.forEach(book => {
    const row = document.createElement('div')
    row.className = 'book-row' 
  
    const title = document.createElement('div')
    title.textContent = book.title

    const author = document.createElement('div')
    author.textContent = book.author  
  
    const pages = document.createElement('div')
    pages.textContent = book.pages

    const read = document.createElement('div')
    read.textContent = book.read

    row.append(title, author, pages, read)
    parent.appendChild(row)

  })
}

document.getElementById('openDialogue').addEventListener('click', () => {
  const dialog = document.querySelector("dialog")
  const openDialogue = document.getElementById("openDialogue")
  const closeButton = document.getElementById("closeButton").addEventListener("click", () => dialog.close())
  const addBook = document.getElementById("addBook")

  dialog.showModal();
  
})



addBookToLibrary();