// Navbar Fix
const header = document.querySelector('header');
window.onscroll = function () {
    if (window.pageYOffset > header.offsetTop) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
};


// Hamburger Menu
const hamburgerMenu = document.querySelector('#hamburger');
const navMenu = document.querySelector("#nav-menu");

hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});