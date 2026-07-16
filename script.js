const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".menu-overlay");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.add("active");
    overlay.classList.add("active");

});

closeMenu.addEventListener("click", closeMobileMenu);
overlay.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

}

document.querySelector(".mobile-dropdown-btn")
.addEventListener("click", function(){

    document
    .querySelector(".mobile-submenu")
    .classList.toggle("active");

});