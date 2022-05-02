// Ude Import export (MANDATORY)
// import {navbar,sidebar} from "../components/navbar.js";
// let n=document.getElementById("navbar");
// n.innerHTML=navbar();

// let m=document.getElementById("sidebar");
// m.innerHTML=sidebar();



let  x=JSON.parse(localStorage.getItem("news"));
let box=document.createElement('div')
box.setAttribute("id","box");
let image=document.createElement("img")
image.src=x.urlToImage;
image.setAttribute("id","image")
let t=document.createElement("h2");
t.innerText=x.title;
let desc=document.createElement("p")
desc.innerText=x.description

box.append(image,t,desc)
document.querySelector("#detailed_news").append(box);