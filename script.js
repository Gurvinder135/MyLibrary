function book(title, author,pages, read){
  
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.info=function(){
      return(`${title} by ${author},${pages} pages,${read}`);
  }
};


let myLibrary = [];
let a=0;
function addBookToLibrary( title, author, pages, read) {

myLibrary.push(new book(title,author,pages,read));

window.sessionStorage.setItem('user', JSON.stringify(myLibrary));
a=myLibrary.length-1;
books_list(a);


};

let container= document.querySelector(".container");
let button=document.querySelector(".button");
let form=document.querySelector("#form");

button.addEventListener("click", function (){
main.classList.add("form");  
form_hide.classList.remove("form");
document.querySelector("#title").value="";
document.querySelector("#author").value="";
document.querySelector("#pages").value="";
document.querySelector("#read").checked=false;
})
function books_list(a) {  
 let tag1= document.createElement("div")
 tag1.textContent=myLibrary[a].title;
 let tag2= document.createElement("div")
 tag2.textContent=myLibrary[a].author;
 let tag3= document.createElement("div")
 tag3.textContent=myLibrary[a].pages;
 let tag4= document.createElement("div")
 tag4.textContent=myLibrary[a].read;
 let tag5= document.createElement("div")
 let toggle= document.createElement("div")
 let inner= document.createElement("div")
 let tag6=document.createElement("div")
 toggle.classList.add("table");
 toggle.classList.add("toggle");
 toggle.classList.add(`${a}`);
 tag4.classList.add(`${a}b`)
 if(myLibrary[a].read==="Yes"){
   toggle.classList.add("active");
 };
 inner.classList.add("innerCircle");
 tag5.classList.add("delete");
 tag6.classList.add("flex");
 tag6.classList.add(`${a}a`);
 tag5.classList.add(`${a}`);
 tag1.classList.add("table");
 tag2.classList.add("table");
 tag3.classList.add("table");
 tag4.classList.add("table");
 tag5.classList.add("table");
 container.appendChild(tag6); 
 toggle.appendChild(inner);
 tag6.appendChild(tag1);
 tag6.appendChild(tag2);
 tag6.appendChild(tag3);
 tag6.appendChild(tag4);
 tag6.appendChild(tag5);
 tag6.appendChild(toggle);
  
}


let main=document.querySelector(".main");
let form_hide=document.querySelector(".form");
let submit=document.querySelector("#submit");
let delete1=document.querySelectorAll(".delete")
form.addEventListener("submit", function (e){
e.preventDefault();
main.classList.remove("form");  
form_hide.classList.add("form");
let title=document.querySelector("#title").value;
let author=document.querySelector("#author").value;
let pages=document.querySelector("#pages").value;
let read= document.querySelector("#read").checked;
if(read===true){ read='Yes'}
else {read='No'};

addBookToLibrary(title,author,pages,read);
});


container.addEventListener("click", function (e) {
  
  if(e.target.classList.contains("delete")){
    let b=e.target.classList[1];
    myLibrary.splice(b,1);
    window.sessionStorage.setItem('user', JSON.stringify(myLibrary));
    remove(b);
  }
  if(e.target.classList.contains("toggle")&&!e.target.classList.contains("active")){
    e.target.classList.add("active")
    myLibrary[e.target.classList[2]].read="Yes";
   
    window.sessionStorage.setItem('user', JSON.stringify(myLibrary));
    document.getElementsByClassName(`${e.target.classList[2]}b`)[0].textContent="Yes";
  } else if(e.target.classList.contains("toggle")&&e.target.classList.contains("active")){
    e.target.classList.remove("active")
    myLibrary[e.target.classList[2]].read="No";
 
    window.sessionStorage.setItem('user', JSON.stringify(myLibrary));
    document.getElementsByClassName(`${e.target.classList[2]}b`)[0].textContent="No";
  }
})
function remove(b){
  let tag1= document.getElementsByClassName(`${b}a`)[0];
  console.log(tag1);
  tag1.remove();

}  
window.onload=function(){
  myLibrary=JSON.parse(window.sessionStorage.getItem('user'));
  if(myLibrary===null){
    myLibrary=[];
  } else{
  for(items in myLibrary){
    books_list(items);
  }}
  
}
