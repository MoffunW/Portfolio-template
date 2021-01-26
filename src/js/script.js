const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
        menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
});

const procents = document.querySelectorAll('.level__procent');
const scale = document.querySelectorAll('.level__scale span');

procents.forEach( (item, i) => {
        scale[i].style.width = item.innerHTML;
});
