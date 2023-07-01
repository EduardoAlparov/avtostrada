const scrollDown = document.getElementById('scroll-down');
const aboutSection =document.getElementById('about-company-section');
const pages = document.querySelectorAll('.section');
const content = document.querySelector('.main');
const points = document.querySelectorAll('.menu__item');

if (window.matchMedia("(min-width: 575px)").matches) {
    scrollDown.addEventListener('click',  () => {
        window.scrollTo({
            top: aboutSection.offsetTop + 150,
            behavior: 'smooth'
        });
        document.body.classList.remove('_block-scrolling');
    })
} else if (window.matchMedia("(max-width: 574px)").matches) {
    scrollDown.addEventListener('click',  () => {
        window.scrollTo({
            top: aboutSection.offsetTop + 30,
            behavior: 'smooth'
        });
        document.body.classList.remove('_block-scrolling');
    })
}
