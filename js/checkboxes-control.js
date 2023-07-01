const checkboxesContainer = document.getElementById('checkboxes-container');

if (window.matchMedia("(min-width: 1221px)").matches) {
    /* the viewport is at least 400 pixels wide */
    // question one:
    if (checkboxesContainer) {
        let checkboxes = checkboxesContainer.querySelectorAll('input[type="checkbox"]');
        const barrel = document.querySelector('.question__image-barrel');
        let barrelWidth = barrel.offsetWidth;

        checkboxes.forEach( checkbox => {
            checkbox.addEventListener('click', () => {
                checkboxes.forEach( el => {
                    el.checked = false;
                })

                checkbox.checked = true;

                if (checkbox.getAttribute('data-value') == 10) {
                    barrel.style.width = `${barrelWidth + barrelWidth - 55}` + 'px';
                } else {
                    barrel.style.width = `${checkbox.getAttribute('data-value') * 50 + barrelWidth }` + 'px';
                }
                barrel.firstElementChild.textContent = '';
                barrel.firstElementChild.textContent = checkbox.nextElementSibling.textContent;
            })
        })
    }
} else if (window.matchMedia("(min-width: 766px)").matches) {
    /* the viewport is less than 766 pixels wide */
    if (checkboxesContainer) {
        let checkboxes = checkboxesContainer.querySelectorAll('input[type="checkbox"]');
        const barrel = document.querySelector('.question__image-barrel');
        let barrelWidth = barrel.offsetWidth;

        checkboxes.forEach( checkbox => {
            checkbox.addEventListener('click', () => {
                checkboxes.forEach( el => {
                    el.checked = false;
                })

                checkbox.checked = true;

                if (checkbox.getAttribute('data-value') == 10) {
                    barrel.style.width = `${barrelWidth + barrelWidth - 33}` + 'px';
                } else {
                    barrel.style.width = `${checkbox.getAttribute('data-value') * 35 + barrelWidth }` + 'px';
                }
                barrel.firstElementChild.textContent = '';
                barrel.firstElementChild.textContent = checkbox.nextElementSibling.textContent;
            })
        })
    }
} else if (window.matchMedia("(min-width: 575px)").matches) {
     /* the viewport is less than 575 pixels wide */
     if (checkboxesContainer) {
        let checkboxes = checkboxesContainer.querySelectorAll('input[type="checkbox"]');
        const barrel = document.querySelector('.question__image-barrel');
        let barrelWidth = barrel.offsetWidth;

        checkboxes.forEach( checkbox => {
            checkbox.addEventListener('click', () => {
                checkboxes.forEach( el => {
                    el.checked = false;
                })

                checkbox.checked = true;

                if (checkbox.getAttribute('data-value') == 10) {
                    barrel.style.width = `${barrelWidth + barrelWidth - 25}` + 'px';
                } else {
                    barrel.style.width = `${checkbox.getAttribute('data-value') * 30 + barrelWidth }` + 'px';
                }
                barrel.firstElementChild.textContent = '';
                barrel.firstElementChild.textContent = checkbox.nextElementSibling.textContent;
            })
        })
    }
}  else if (window.matchMedia("(min-width: 319px)").matches) {
         /* the viewport is less than 319 pixels wide */
         if (checkboxesContainer) {
            let checkboxes = checkboxesContainer.querySelectorAll('input[type="checkbox"]');
            const barrel = document.querySelector('.question__image-barrel');
            let barrelWidth = barrel.offsetWidth;

            checkboxes.forEach( checkbox => {
                checkbox.addEventListener('click', () => {
                    checkboxes.forEach( el => {
                        el.checked = false;
                    })

                    checkbox.checked = true;

                    if (checkbox.getAttribute('data-value') == 10) {
                        barrel.style.width = `${barrelWidth + barrelWidth - 15}` + 'px';
                    } else {
                        barrel.style.width = `${checkbox.getAttribute('data-value') * 15 + barrelWidth }` + 'px';
                    }
                    barrel.firstElementChild.textContent = '';
                    barrel.firstElementChild.textContent = checkbox.nextElementSibling.textContent;
                })
            })
        }
}

// question two:
const checkboxesContainerTwo = document.getElementById('checkboxes-container-2');


if (checkboxesContainerTwo) {
    let checkboxes = checkboxesContainerTwo.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach( checkbox => {
        checkbox.addEventListener('click', () => {
            checkboxes.forEach( el => {
                el.checked = false;
            })

            checkbox.checked = true;

            if (checkbox.getAttribute('data-value') == "pump-active") {
                document.querySelector('.question__svg-disabled-pump').style.display = 'none';
                document.querySelector('.question__svg-active-pump').style.display = 'inline';
            } else if (checkbox.getAttribute('data-value') == "pump-disabled") {
                document.querySelector('.question__svg-disabled-pump').style.display = 'inline';
                document.querySelector('.question__svg-active-pump').style.display = 'none';
            }
        })
    })
}

// question 3:
const checkboxesContainerThree = document.getElementById('checkboxes-container-3');

if(checkboxesContainerThree) {
    let checkboxes = checkboxesContainerThree.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach( checkbox => {
        checkbox.addEventListener('click', () => {
            checkboxes.forEach( el => {
                el.checked = false;
            })

            checkbox.checked = true;

            if (checkbox.getAttribute('data-value') == "question__svg-one") {
                document.querySelector('.question__svg-one').style.display = 'inline';
                document.querySelector('.question__svg-two').style.display = 'none';
                document.querySelector('.question__svg-three').style.display = 'none';
            } else if (checkbox.getAttribute('data-value') == "question__svg-two") {
                document.querySelector('.question__svg-one').style.display = 'none';
                document.querySelector('.question__svg-two').style.display = 'inline';
                document.querySelector('.question__svg-three').style.display = 'none';
            } else if (checkbox.getAttribute('data-value') == "question__svg-three") {
                document.querySelector('.question__svg-one').style.display = 'none';
                document.querySelector('.question__svg-two').style.display = 'none';
                document.querySelector('.question__svg-three').style.display = 'inline';
            }
        })
    })
}

// question 4:
const checkboxesContainerFour = document.getElementById('checkboxes-container-4');

if(checkboxesContainerFour) {
    let checkboxes = checkboxesContainerFour.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach( checkbox => {
        checkbox.addEventListener('click', () => {
            checkboxes.forEach( el => {
                el.checked = false;
            })

            checkbox.checked = true;

            if (checkbox.getAttribute('data-value') == "question__axes-svg-one") {
                document.querySelector('.question__axes-svg-one').style.display = 'inline';
                document.querySelector('.question__axes-svg-two').style.display = 'none';
                document.querySelector('.question__axes-svg-three').style.display = 'none';
            } else if (checkbox.getAttribute('data-value') == "question__axes-svg-two") {
                document.querySelector('.question__axes-svg-one').style.display = 'none';
                document.querySelector('.question__axes-svg-two').style.display = 'inline';
                document.querySelector('.question__axes-svg-three').style.display = 'none';
            } else if (checkbox.getAttribute('data-value') == "question__axes-svg-three") {
                document.querySelector('.question__axes-svg-one').style.display = 'none';
                document.querySelector('.question__axes-svg-two').style.display = 'none';
                document.querySelector('.question__axes-svg-three').style.display = 'inline';
            }
        })
    })
}
