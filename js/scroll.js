const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 2500,
    delay: 400,
    // reset:true
})

sr.reveal('.cabecera-swiper, .about-swiper, .footer-swiper')
// sr.reveal('.about-swiper')
sr.reveal('.choose-swiper, .zapa-swiper',{interval: 100})
sr.reveal('.left-swiper, .left-form-swiper, .left', {origin: 'left'})
sr.reveal('.right-swiper, .right-form-swiper, .new-swiper', {origin: 'right'})