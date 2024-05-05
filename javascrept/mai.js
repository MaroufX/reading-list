let bookNameInput = document.querySelector("#bookName");
let bookAuthorInput = document.querySelector("#authorName");
let bookPagesInput = document.querySelector("#bookPages");
let bookStatueInput = document.querySelector("#bookStatue");
let form = document.querySelector(".card__form");
let tableInfo = document.querySelector(".list-info");
let booksInfo = [];

let bookInfo = {
  bookName: "",
  bookAuthor: "",
  bookPages: 0,
  bookStatue: 'read',
};

function handleSubmit(event) {
  event.preventDefault();
}

form.addEventListener("submit", () => {
  createBook();
});

let createBook = () => {
  if (
    bookNameInput.value == "" ||
    bookAuthorInput.value == "" ||
    bookPagesInput.value <= 0
  ) {
    alert("add book");



    
  } else {
    bookInfo.bookName = bookNameInput.value;
    bookInfo.bookAuthor = bookAuthorInput.value;
    bookInfo.bookPages = bookPagesInput.value;
    bookInfo.bookStatue = bookStatueInput.value;

    booksInfo.push(bookInfo);

    bookInfo = {
      bookName: "",
      bookAuthor: "",
      bookPages: 0,
      bookStatue: false,
    };

    let x = "";
    for (let i = 0; i < booksInfo.length; i++) {
      x += `<tr>
              <td>${booksInfo[i].bookName}</td>
              <td>${booksInfo[i].bookAuthor}</td>
              <td>${booksInfo[i].bookPages}</td>
              <td><button id='isRead' class='${booksInfo[i].bookStatue}'>${booksInfo[i].bookStatue}</button></td>
              <td><button>delete</button></td>
            </tr> `;
    }
    console.log(x);

    tableInfo.innerHTML = x;
    console.log(booksInfo);
  }
};
function editBook () {
let isRead = document.querySelector("#isRead");
 isRead.addEventListener('click', (e) =>{
  console.log(e);

 })
}
editBook();