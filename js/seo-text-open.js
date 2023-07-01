const seoBtn = document.getElementById('seo-section-button');

if (seoBtn) {
    seoBtn.addEventListener('click', () => {
        seoBtn.closest('.seo-section__headline').querySelector('.seo-section__text').classList.toggle('seo-section__text_open');
        seoBtn.classList.toggle('seo-section__button_active');
    })
}
