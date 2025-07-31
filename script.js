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
    row.setAttribute('data-id', book.id);
  
    const title = document.createElement('div')
    title.textContent = book.title
    title.className = 'title'

    const author = document.createElement('div')
    author.textContent = book.author  
    author.className = 'author'
  
    const pages = document.createElement('div')
    pages.textContent = book.pages
    pages.className = 'pages'

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener('click', ()=> {
      const bookId = row.getAttribute('data-id');
      const index = myLibrary.findIndex(b => b.id ===bookId)
      if (index !== -1){
        myLibrary.splice(index, 1);
        updateList()

      }
    })

    row.append(title, author, pages, deleteButton)
    parent.appendChild(row)
  })
}

const dialog = document.querySelector("dialog");
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () => dialog.close());

document.getElementById('openDialogue').addEventListener('click', () => {
  dialog.showModal();
});

addBookToLibrary();