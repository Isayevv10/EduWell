
let btnClose = document.querySelector('.icon-close');
let btnHamurger = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu');

btnHamurger.addEventListener('click',onbtnHamburgerClick);
btnClose.addEventListener('click',offbtnHamburgerClick);

function onbtnHamburgerClick() {
    menu.classList.remove('hidden');
};
function offbtnHamburgerClick() {
    menu.classList.add('hidden'); 
};