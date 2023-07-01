window.addEventListener('scroll', () => {
    document.querySelectorAll('.section-animate').forEach( section => {
        animateSection(section);
    })
});

function animateSection(sectionSelector) {
    const animItemHeight = sectionSelector.offsetHeight;
    const animItemOffset = offset(sectionSelector).top;
    const animStart = 1.1;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
        sectionSelector.classList.add('_active');
    }
}


function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
