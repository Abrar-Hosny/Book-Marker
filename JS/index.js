var bookName = document.getElementById("bookname");
var bookLink = document.getElementById("Link");
var displaySec = document.getElementById("displaySection");

var bookList=[];


function addBook(){
bookNameValue = bookName.value; 
bookLinkValue = bookLink.value ;
bookList.push({name:bookNameValue , link : bookLinkValue});
console.log(bookList) ;
display();
}


function display(){
  var cartona;
  for(var i =0 ; i<bookList.length ; i++){
cartona+=` <table class="table-bordered table-sm position-relative m-auto w-75">
        <thead>
          <th>Index</th>
          <th>Name</th>
          <th>Visit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          <tr>
          <td>${i+1}</td>
          <td>${bookList[i].name}</td>
          <td><a class="btn  fw-bold ">Visit</a></td>
          <td><a  class="btn  fw-bold ">Delete</a></td>
          
          </tr>
        </tbody>
      </table>`
  }

displaySec.innerHTML=cartona ; 

}







