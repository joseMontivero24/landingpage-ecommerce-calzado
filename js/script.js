
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

// Agrega el siguiente código para cerrar el menú al hacer clic en una opción
const menuOptions = document.querySelectorAll(".menu-list-item");

menuOptions.forEach(option => {
    option.addEventListener("click", () => {
        menuList.classList.remove("active");
        menuBtn.classList.remove("hide");
    });
});

window.onscroll = () => {
    this.scrollY > 200 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}





