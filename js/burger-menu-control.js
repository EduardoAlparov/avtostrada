const btnMenu = document.getElementsByClassName("btn-menu");
const body = document.body;

for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', function () {
        body.classList.toggle('menu-open');
    });
}
