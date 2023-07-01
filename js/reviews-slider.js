const swiper = new Swiper('.reviews-carousel__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    speed: 800,

    wrapperClass: 'reviews-carousel__list',
    slideClass: 'reviews-carousel__item',
    slideActiveClass: 'reviews-carousel__item_active',

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-control-next',
      prevEl: '.reviews-control-prev',
    },

    breakpoints: {
      // when window width is >= 640px
      1220: {
        width: 1220,
        spaceBetween: 21,
        slidesPerView: 2,
      }
  }
});


const paginationRevSlider = document.getElementById('reviews-carousel-pagination');
let reviewsSliders = document.querySelectorAll('.reviews-carousel__item');

if (reviewsSliders) {
  reviewsSliders.forEach( el => {
      let paginationItem = document.createElement("div");
      paginationItem.classList.add('pagination__item');
      paginationRevSlider.firstElementChild.appendChild(paginationItem);
      paginationItem.style.width = `${ paginationRevSlider.offsetWidth / reviewsSliders.length }` + 'px';
  });

  reviewsSliders[0]
    .closest('.reviews-carousel__container')
    .querySelector('.pagination__item')
    .classList.add('pagination__item_active');
}

document.querySelectorAll('.reviews-control').forEach(btn => {
  btn.addEventListener('click', function () {
      let slides = document.querySelectorAll('.reviews-carousel__item');
      let activeSlide = document.querySelector('.reviews-carousel__item_active');
      let pags = paginationRevSlider.querySelectorAll('.pagination__item');

      pags.forEach(pag => {
          pag.classList.remove('pagination__item_active');
      })

      for (let index = 0; index <= Array.from(slides).indexOf(activeSlide) + 1; index++) {
          const element = pags[index];
          element.classList.add('pagination__item_active');
      };
  })
})
