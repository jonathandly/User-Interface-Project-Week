// JS goes here

const close = '../img/nav-hamburger-close.png';
const burger = '../img/nav-hamburger.png';
const navbar = document.querySelector('.navbar');
const anchor = document.querySelectorAll('.menu ul li a');
const menu = document.querySelector('.menu');


const menuButton = document.querySelector('.menu-button');

function slideIn() {
    let tween = new TimelineLite({});
    tween.fromTo(menu, 0.5, {height: 0}, {height: '100vh'});
}

const toggleMenu = () => {
    // Toggle the "menu-expand" class on the menu reference.
    menu.classList.toggle('menu-expand');
    // slideIn();
    if(menu.classList.contains('menu-expand')) {
        menuButton.setAttribute('src', close);
        navbar.setAttribute('style', 'background-color: rgba(119,136,153,0.9);');
    } else {
        menuButton.setAttribute('src', burger);
        navbar.setAttribute('style', 'background-color: rgb(119,136,153);');
    }
}

menuButton.addEventListener('click', () => {
    toggleMenu()
    slideIn();
});

class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;

        
        this.item = document.querySelector(`.tab-item[data-tab='${this.data}']`);
        this.img = document.querySelector(`.tab-img[data-tab='${this.data}']`);
        this.heading = document.querySelector(`.tab-item-heading[data-tab='${this.data}']`);

        this.tabItem = new TabItem(this.item);

        this.element.addEventListener('click', () => this.select());
    };

    select() {
        const links = document.querySelectorAll('.tab-link');
        const imgs = document.querySelectorAll('.tab-img');
        const headings = document.querySelectorAll('.tab-item-heading');

        Array.from(links).forEach(link => link.classList.remove('tab-link-selected'));
        Array.from(imgs).forEach(img => img.classList.remove('tab-item-selected'));
        Array.from(headings).forEach(heading => heading.classList.remove('tab-item-heading-selected'));
        
        this.img.classList.add('tab-item-selected');
        this.element.classList.add('tab-link-selected');
        this.heading.classList.add('tab-item-heading-selected');

        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.tab-item');

        Array.from(items).forEach(item => item.classList.remove('tab-item-selected'));

        this.element.classList.add('tab-item-selected');
    }
}

let links = document.querySelectorAll('.tab-link')
            .forEach(link => new TabLink(link));
