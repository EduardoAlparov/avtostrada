const slider = new Swiper('.slider__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    watchOverflow: false,
    speed: 800,

    wrapperClass: 'slider__list',
    slideClass: 'slider__slide',
    slideActiveClass: 'slider__slide_active',

    // Navigation arrows
    navigation: {
      nextEl: '.promotions-control-next',
      prevEl: '.promotions-control-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        1219: {
            width: 1220,
        }
    }
});

const paginationPromSlider = document.getElementById('slider-pagination');
let promotionSliders = document.querySelectorAll('.slider__slide');

if (promotionSliders) {
    promotionSliders.forEach( el => {
        let paginationItem = document.createElement("div");
        paginationItem.classList.add('pagination__item');
        paginationPromSlider.firstElementChild.appendChild(paginationItem);
        paginationItem.style.width = `${ paginationPromSlider.offsetWidth / promotionSliders.length }` + 'px';
    });

    document.querySelector('.pagination__item').classList.add('pagination__item_active');

    promotionSliders[0]
    .closest('.slider__container')
    .querySelector('.pagination__item')
    .classList.add('pagination__item_active');
}

document.querySelectorAll('.promotions-control').forEach(btn => {
    btn.addEventListener('click', function () {
        let slides = document.querySelectorAll('.slider__slide');
        let activeSlide = document.querySelector('.slider__slide_active');
        let pags = paginationPromSlider.querySelectorAll('.pagination__item');

        pags.forEach(pag => {
            pag.classList.remove('pagination__item_active');
        })

        for (let index = 0; index <= Array.from(slides).indexOf(activeSlide); index++) {
            const element = pags[index];
            element.classList.add('pagination__item_active');
        };
    })
})
