
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
    this.scrollY > 350 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

/*================== Scroll Reveal Animation =================*/ 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset:true
})

sr.reveal('.cabecera-swiper, .about-swiper, .footer-swiper')
// sr.reveal('.about-swiper')
sr.reveal('.choose-swiper, .zapa-swiper',{interval: 100})
sr.reveal('.left-swiper, .left-form-swiper, .left', {origin: 'left'})
sr.reveal('.right-swiper, .right-form-swiper, .new-swiper', {origin: 'right'})

