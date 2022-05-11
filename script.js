// const Middle = document.getElementById('middle');
// const Butterflies = document.getElementById('butterflies');
// const Left = document.getElementById('left');
// const Throne = document.getElementById('throne');
// const Tunnel = document.getElementById('tunnel');
const ScreenShot = [...document.querySelectorAll('.screenshot')]

function activeImg () {
    this.classList.toggle('active');
    this.removeEventListener('click', activeImg);
    setTimeout(() => {
        this.classList.toggle('activeZIndex');
        // Защита от встратых Кошкодевок
        this.addEventListener('click', activeImg);
    }, '600');
}

for ( let i = 0 ; i < ScreenShot.length ; i++ ) {
    ScreenShot[i].addEventListener('click', activeImg)
}