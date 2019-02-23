let villas = document.querySelector('.villas');
let homeVillas = document.querySelector('.middle-section .home-villas');
let outskirts = document.querySelector('.outskirts');
let homeOutskirts = document.querySelector('.middle-section .home-outskirts');
let blocks = document.querySelector('.blocks');
let homeBlocks = document.querySelector('.middle-section .home-the-blocks');

function villasSquare() {
    let tween = new TimelineLite({});
    tween.fromTo(villas, 1, {left: '150%'}, {left: '63%'});
}
homeVillas.addEventListener('mouseenter', () => villasSquare());


function outskirtsSquare() {
    let tween = new TimelineLite({});
    tween.fromTo(outskirts, 1, {right: '100%'}, {right: 0});
}
homeOutskirts.addEventListener('mouseenter', () => outskirtsSquare());

function blocksSquare() {
    let tween = new TimelineLite({});
    tween.fromTo(blocks, 1, {left: '150%'}, {left: '63%'});
}
homeBlocks.addEventListener('mouseenter', () => blocksSquare());