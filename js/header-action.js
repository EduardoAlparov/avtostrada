const header = document.getElementById("fixed-header");

// fixed header sticky on scroll up and hide header on scroll down:
if (header) {
    let lastScrollTop = 0;

    window.onscroll = function() {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;;

        if (currentScrollPosition > lastScrollTop) {
            header.classList.add("sticky");
            header.classList.remove("header_dark-style");
        } else {
            header.classList.remove("sticky");
            header.classList.add("header_dark-style");
        }

        if ( window.pageYOffset === 0) {
            header.classList.remove("header_dark-style");
            header.classList.remove("header_dark-style");
        }

        lastScrollTop = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    };
};
