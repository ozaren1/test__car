 let bg = document.querySelector(".header__burger");
 let content = document.querySelector(".content");
 let nav = document.querySelector(".nav__list");
 let header = document.querySelector(".header");
 let body = document.querySelector("body");
 bg.addEventListener('click', function() {
    bg.classList.toggle('active');
    content.classList.toggle('active');
    nav.classList.toggle('active');
    header.classList.toggle('active');
    body.classList.toggle('lock');
});