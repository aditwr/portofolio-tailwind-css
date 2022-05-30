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

// Typed.Js
var typed = new Typed('#typed', {
    // strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    stringsElement: '#typed-strings',
    typeSpeed: 80,
    backDelay: 1000,
    loop: true,
});