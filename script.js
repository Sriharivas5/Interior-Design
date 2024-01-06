const nav=document.querySelector(".navbar");
const menu=document.querySelector(".navlinks");
const burger=document.querySelector(".burger");
// hamburger functionality
burger.addEventListener('click',()=>{
    menu.classList.toggle("nav-active")
    burger.classList.toggle("toggle")
})