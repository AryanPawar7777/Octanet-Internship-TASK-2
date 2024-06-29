document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#menu');
    const navbar = document.querySelector('.navbar');
    const close = document.querySelector('#close');

    menu.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
