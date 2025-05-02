const menu = document.getElementById("menu");
const list = document.getElementById("list");
const bars = document.querySelectorAll(".fa-bars");
menu.addEventListener("click",()=>{
    list.classList.toggle('navlist-active');
    bars.classList.toggle('fa-xmark');
});