const infoCartButtons = document.querySelectorAll('.info-cart__nav-button');
const viewWindows = document.querySelectorAll('.info-cart__view-window-item');
if(infoCartButtons) {
    infoCartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            infoCartButtons.forEach(bttn => {
                bttn.classList.remove('info-cart__nav-button_active');
            })

            btn.classList.add('info-cart__nav-button_active');

            viewWindows.forEach( element => {
                element.classList.remove('_block');
            });

            document.getElementById(btn.getAttribute('data-role')).classList.add('_block');
        })
    })
}
