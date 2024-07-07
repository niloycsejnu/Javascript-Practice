
/*
let header=document.getElementById("heading");
console.dir(header);

let header1 = document.getElementsByClassName("header");
console.dir(header1);

let header2 = document.getElementsByTagName("p");
console.dir(header2);

let header3 = document.getElementsByTagName("h1");
console.dir(header3);
*/

/*
let firstEl = document.querySelector("p");
console.dir(firstEl);
let allEl = document.querySelectorAll("p");
console.dir(allEl);
*/

/*
let fiEl = document.querySelector(".header");
console.dir(fiEl);
let allEl = document.querySelectorAll(".header");
console.dir(allEl);
*/

/*
let fiEl = document.querySelector("#name");
console.dir(fiEl);
let allEl = document.querySelectorAll("#name");
console.dir(allEl);
*/

/*
let id1 = document.getElementById("name");
console.dir(id1.tagName);
console.dir(id1.innerText);
console.dir(id1.innerHTML);
console.dir(id1.textContent);
*/

/*
console.dir(document.querySelector("div").children);
console.dir(document.querySelector("div").firstElementChild);
console.dir(document.querySelector("div").lastElementChild);
*/

// -----------------------------------------------------------------------------------

/*
let item = document.querySelector("div");
console.dir(item);
console.dir(item.innerText);

let item1 = document.querySelector("h1");
console.log(item1);
item1.innerText = "New Heading";
console.log(item1);
*/

/*
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College Students ";
console.dir(h2.innerText);
*/

/*
let divs= document.querySelectorAll(".box");
let idx =1;
for(div of divs){
    div.innerText = `The value is ${idx}`;
    idx++;
}
*/

/*
function myfunc(){
    let info = document.lastModified;
    document.querySelector("p").innerHTML=info;

}

function niloy(){
    document.open("text/html","replace");
    document.write("<button>CSE</button>");
    document.close();
}
*/  

/*
function btn(){
    let w = window.open();
    w.document.write("<h1>Hello!</h1>");
    w.document.close();
}
    */

/*
function myPara(){
    let x = document.querySelectorAll("p");
    document.querySelector("#para").innerHTML = x.length;
}
  */  

/*
function add(){
    let x = document.getElementById("id1").value;
    let y = document.getElementById("id2").value;
    let z = parseFloat(x) + parseFloat(y);
    document.querySelector("p").innerText = `The result is ${z}`;
}

  */  