// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar,sidebar} from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar();

let m=document.getElementById("sidebar");
m.innerHTML=sidebar();