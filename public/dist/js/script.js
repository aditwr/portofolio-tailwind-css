// Navbar Fix
const header = document.querySelector('header');
const toTopButton = document.querySelector('#to-top');
window.onscroll = function () {
    if (window.pageYOffset > header.offsetTop) {
        header.classList.add("navbar-fixed");
        // display the to top button
        toTopButton.classList.remove('hidden');
        toTopButton.classList.add('flex');
    } else {
        header.classList.remove("navbar-fixed");
        // hidden the to top button
        toTopButton.classList.remove('flex');
        toTopButton.classList.add('hidden');
    }
};


// Hamburger Menu
const hamburgerMenu = document.querySelector('#hamburger');
const navMenu = document.querySelector("#nav-menu");

hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Click outside hamburger to close it
window.addEventListener('click', function (event) {
    if ((event.target != hamburgerMenu) && (event.target != navMenu)) {
        navMenu.classList.add('hidden');
        hamburgerMenu.classList.remove('hamburger-active');
    }
})


// Typed.Js
var typed = new Typed('#typed', {
    // strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    stringsElement: '#typed-strings',
    typeSpeed: 80,
    backDelay: 1000,
    loop: true,
});


