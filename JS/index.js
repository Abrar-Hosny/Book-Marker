var bookName = document.getElementById("bookname");
var bookLink = document.getElementById("Link");
var displaybody = document.getElementById("displaybody");


var bookList;

if(localStorage.getItem("books")==null){
  bookList=[];
}
else{
  bookList=JSON.parse(localStorage.getItem("books"));
  display();
}

function addBook(){
bookNameValue = bookName.value; 
bookLinkValue = bookLink.value ;
if(bookNameValue == null || bookLinkValue==null ){
 
}

bookList.push({name:bookNameValue , link : bookLinkValue});
localStorage.setItem("books" , JSON.stringify(bookList));
console.log(bookList) ;
display();
}


function display(){
  var cartona="";
  for(var i =0 ; i<bookList.length ; i++){
cartona+=`<tr>
          <td>${i+1}</td>
          <td>${bookList[i].name}</td>
          <td><a class="btn fw-bold" href="${bookList[i].link}" target="_blank">Visit</a></td>
          <td><a onclick="deleteBook(${i})" class="btn  fw-bold ">Delete</a></td>
          </tr>
       `
  }

displaybody.innerHTML=cartona ; 

}


function deleteBook(deletedindex){
  bookList.splice(deletedindex,1);
  localStorage.setItem("books" , JSON.stringify(bookList));
console.log(deletedindex)
display();

}

function visit(visitedIndex){
  

}


function validation(element){
 var  regex = { 
  bookname:/[A-z0-9a-z]{3,}/
 , Link:/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i
 }
 if(regex[element.id].test(element.value)){
element.classList.add("is-valid");
element.classList.remove("is-invalid");
 }
else{
element.classList.add("is-invalid");
element.classList.remove("is-valid");

}

 }






