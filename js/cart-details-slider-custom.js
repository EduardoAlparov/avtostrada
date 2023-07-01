if (document.getElementById('cart-popup')) {
    const prevButton = document.querySelector('.gallery-cart-control-prev');
    const nextButton = document.querySelector('.gallery-cart-control-next');
    const slides = document.querySelectorAll('.gallery-cart__image-item');
    const pagination = document.getElementById('gallery-cart-pagination');

    // pagination init and render:

    if (slides) {
        slides.forEach( el => {
            let paginationItem = document.createElement("div");
            paginationItem.classList.add('pagination__item');
            pagination.firstElementChild.appendChild(paginationItem);
            paginationItem.style.width = `${pagination.offsetWidth / slides.length}` + 'px';
        });

        pagination.querySelector('.pagination__item').classList.add('pagination__item_active');
    }

    let counterOfSlide = 0;

    prevButton.addEventListener('click', () => {
        let paginationItems = pagination.querySelectorAll('.pagination__item');

        paginationItems.forEach( item => {
            item.classList.remove('pagination__item_active');
        });

        slides.forEach(slide => {
            slide.classList.remove('gallery-cart__image-item_active');
        });

        if(counterOfSlide <= 0) {
            counterOfSlide = slides.length-1;
        } else {
            counterOfSlide -=1;
        }

        slides[counterOfSlide].classList.add('gallery-cart__image-item_active');

        for (let index = 0; index <= counterOfSlide; index++) {
            const element = paginationItems[index];
            element.classList.add('pagination__item_active');
        }

    })

    nextButton.addEventListener('click', () => {
        let paginationItems = pagination.querySelectorAll('.pagination__item');

        paginationItems.forEach( item => {
            item.classList.remove('pagination__item_active');
        });

        slides.forEach(slide => {
            slide.classList.remove('gallery-cart__image-item_active');
        });

        if(counterOfSlide >= slides.length-1) {
            counterOfSlide = 0;
        } else {
            counterOfSlide +=1;
        }

        slides[counterOfSlide].classList.add('gallery-cart__image-item_active');

        for (let index = 0; index <= counterOfSlide; index++) {
            const element = paginationItems[index];
            element.classList.add('pagination__item_active');
        }
    })
}
