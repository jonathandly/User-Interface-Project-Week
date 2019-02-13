// JS goes here

const close = '../img/nav-hamburger-close.png';
const burger = '../img/nav-hamburger.png';
const navbar = document.querySelector('.navbar');

const toggleMenu = () => {
    // Toggle the "menu-expand" class on the menu reference.
    menu.classList.toggle('menu-expand');
    if(menu.classList.contains('menu-expand')) {
        menuButton.setAttribute('src', close);
        navbar.setAttribute('style', 'background-color: rgba(119,136,153,0.7);');
    } else {
        menuButton.setAttribute('src', burger);
        navbar.setAttribute('style', 'background-color: rgb(119,136,153);');
    }

}

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => toggleMenu());