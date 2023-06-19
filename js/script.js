
const navbar = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");


menuBtn.onclick = () => {
    menuList.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = () => {
    menuList.classList.remove("active");
    menuBtn.classList.remove("hide");
}

window.onscroll = () => {
    this.scrollY > 200 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

/*================== Scroll Reveal Animation =================*/ 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset:true
})



