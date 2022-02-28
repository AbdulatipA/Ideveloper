const hamburger = document.querySelector ('.hamburger'),
      menu = document.querySelector ('.menu'),
      closeElem = document.querySelector ('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.toggle('active');
});
