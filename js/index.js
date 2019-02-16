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
