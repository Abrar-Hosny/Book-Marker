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
          <td><a class="btn  fw-bold ">Visit</a></td>
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







