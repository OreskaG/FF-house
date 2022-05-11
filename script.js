/* <img src="./src/butterflies.jpg" alt="" class="butterflies screenshot">
<img src="./src/left.jpg" alt="" class="left screenshot">
<img src="./src/middle.jpg" alt="" class="middle screenshot">
<img src="./src/throne.png" alt="" class="throne screenshot">
<img src="./src/tunnel.png" alt="" class="tunnel screenshot"> */

const Middle = document.getElementById('middle');
const Butterflies = document.getElementById('butterflies');
const Left = document.getElementById('left');
const Throne = document.getElementById('throne');
const Tunnel = document.getElementById('tunnel');

function activeImg1 () {
    Middle.classList.toggle('active');
}
Middle.addEventListener('click', activeImg1)

function activeImg2 () {
    Left.classList.toggle('active');
}
Left.addEventListener('click', activeImg2)

function activeImg3 () {
    Butterflies.classList.toggle('active');
}
Butterflies.addEventListener('click', activeImg3)

function activeImg4 () {
    Throne.classList.toggle('active');
}
Throne.addEventListener('click', activeImg4)

function activeImg5 () {
    Tunnel.classList.toggle('active');
}
Tunnel.addEventListener('click', activeImg5)
