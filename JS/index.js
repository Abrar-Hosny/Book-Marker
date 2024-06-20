var bookName = document.getElementById("bookname");
var bookLink = document.getElementById("Link");
var displaybody = document.getElementById("displaybody");

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
cartona+=`<tr>
          <td>${i+1}</td>
          <td>${bookList[i].name}</td>
          <td><a class="btn  fw-bold ">Visit</a></td>
          <td><a  class="btn  fw-bold ">Delete</a></td>
          </tr>
       `
  }

displaybody.innerHTML=cartona ; 

}







