const menuLink = document.querySelectorAll('.menu__link');

// scroll to section by hedaer and footer menu:
if (window.matchMedia("(min-width: 575px)").matches) {
    if (menuLink) {
        menuLink.forEach( link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                let href = link.getAttribute('href').replace('#', '');
                let scrollDiv = document.getElementById(href).offsetTop + 150;

                window.scrollTo({
                    top: scrollDiv,
                    behavior: 'smooth'
                });

                menuLink.forEach( l => {
                    l.parentNode.classList.remove('menu__item_active');
                })
                link.parentNode.classList.add('menu__item_active');

                if(link.classList.contains('hidden-menu__link')) {
                    document.body.classList.remove('menu-open');
                }
            })
        })
    }
} else if (window.matchMedia("(max-width: 574px)").matches) {
    if (menuLink) {
        menuLink.forEach( link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                let href = link.getAttribute('href').replace('#', '');
                let scrollDiv = document.getElementById(href).offsetTop + 30;

                window.scrollTo({
                    top: scrollDiv,
                    behavior: 'smooth'
                });

                menuLink.forEach( l => {
                    l.parentNode.classList.remove('menu__item_active');
                })
                link.parentNode.classList.add('menu__item_active');

                if(link.classList.contains('hidden-menu__link')) {
                    document.body.classList.remove('menu-open');
                }
            })
        })
    }
}

// add active class to header menu item when we scrolling:
const sectionsMenuNav = document.querySelectorAll('.section-nav-menu');

window.addEventListener('scroll', function() {
    sectionsMenuNav.forEach(sec => {
        Visible(sec);
    })
});

let Visible = function (target) {
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },

    windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        menuLink.forEach( link => {
            link.parentNode.classList.remove('menu__item_active');

            if(link.getAttribute('href') == ('#' + target.getAttribute('id'))) {
                link.parentNode.classList.add('menu__item_active');
            }
        })
    }
};
