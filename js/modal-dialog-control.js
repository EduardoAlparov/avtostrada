const dialogs = document.querySelectorAll(".modal-dialog");

if( dialogs ) {
    dialogs.forEach( dialog => {
        dialog.addEventListener('click', (e) => {
            // close any modal:
            if(e.target.closest('.modal-dialog__close-button')) {
                dialogs.forEach( dial => {
                    dial.classList.remove('modal-dialog_open');
                    document.body.style.overflow = "auto";
                })
            }

            // close cart modal:
            if(e.target.closest('.info-cart__button')) {
                e.target.closest('.modal-dialog').classList.remove('modal-dialog_open');
                document.getElementById('modal-consaltation').classList.add('modal-dialog_open');
                document.body.style.overflow = "hidden";
            }

            // offer questions jump:
            if(e.target.closest(".question-button-next")) {
                const idNextModal = e.target.closest('.modal-dialog').getAttribute('id');

                e.target.closest('.modal-dialog').classList.remove('modal-dialog_open');

                document.getElementById(idNextModal.slice(0, -1) + (parseInt(idNextModal.slice(-1)) + 1))
                    .classList.add('modal-dialog_open');

            } else if(e.target.closest(".question-button-prev")) {
                const idNextModal = e.target.closest('.modal-dialog').getAttribute('id');

                e.target.closest('.modal-dialog').classList.remove('modal-dialog_open');
                document.body.style.overflow = "auto";

                document.getElementById(idNextModal.slice(0, -1) + (parseInt(idNextModal.slice(-1)) - 1))
                    .classList.add('modal-dialog_open');
                document.body.style.overflow = "hidden";
            } else if (e.target.closest(".question-button-final")) {
                e.preventDefault();

                document.getElementById('offer-question-final').classList.add('modal-dialog_open');
                document.body.style.overflow = "hidden";
            }

            // close modal on click across the border
            if (!e.target.closest('.modal-dialog__inner-wrapper')
                && !e.target.closest('.offer__container')) {
                dialogs.forEach( dial => {
                    dial.classList.remove('modal-dialog_open');
                    document.body.style.overflow = "auto";
                })
            }
        })
    })
}

// product-cart open modal:
const productCarts = document.querySelectorAll('.product-cart');

productCarts.forEach( cart => {
    cart.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('cart-popup').classList.add('modal-dialog_open');
        document.body.style.overflow = "hidden";
    })
})
// ========================

// offer open modal:
const offerButton = document.querySelector('.offer__button');

offerButton.addEventListener('click', () => {
    document.getElementById('offer-question-1').classList.add('modal-dialog_open');
    document.body.style.overflow = "hidden";
})

// =================

// offer final question validate:
const modalForm = document.querySelector('.feedback-form_modal')

// if(modalForm) {
//     modalForm.addEventListener('change', changeFormHandler);

//     function changeFormHandler() {
//         if (modalForm.checkValidity()) {
//             modalForm.querySelector('.question-button-final').removeAttribute('disabled');
//         }
//     }
// }
// ==============================

// call back modal open:
const callbackButtons = document.querySelectorAll('.callback-button');

if(callbackButtons) {
    callbackButtons.forEach(callbackButton => {
        callbackButton.addEventListener('click', () => {
            document.getElementById('modal-callback').classList.add('modal-dialog_open');
            document.body.style.overflow = "hidden";
        })
    })
}
// =====================

// about delivery modal open:
const aboutDeliveryButton = document.querySelectorAll('.about-delivery-button');

if(aboutDeliveryButton) {
    aboutDeliveryButton.forEach(deliveryButton => {
        deliveryButton.addEventListener('click', () => {
            document.getElementById('modal-delivery').classList.add('modal-dialog_open');
            document.body.style.overflow = "hidden";
        })
    })
}

// ==========================

// submit-button popup open:
const submitButtons = document.querySelectorAll('.submit-button');

if(submitButtons) {
    submitButtons.forEach(submitButton => {
        submitButton.addEventListener('click', (e) => {
            let form = submitButton.closest('form');

            if (form.checkValidity()) {
                e.preventDefault();

                dialogs.forEach( dial => {
                    dial.classList.remove('modal-dialog_open');
                })

                document.getElementById('submit-answer').classList.add('modal-dialog_open');
                document.body.style.overflow = "hidden";
            }

            form.querySelectorAll('.input-block__input').forEach( input => {
                input.value = '';
            })
        })
    })
}

// ========================
