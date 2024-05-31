console.log("hi");
let no = document.getElementById('no');
let yes = document.getElementById('yes');

function move() {
    let maxW = 300;
    let maxH = 200;

    let randomX = Math.floor(Math.random() * maxW);
    let randomY = Math.floor(Math.random() * maxH);

    no.style.left = randomX + 'px';
    no.style.top = randomY + 'px';

}

no.addEventListener('mouseenter', function (){
    move();
});
    
yes.addEventListener("click", function () {
    window.location.href = "./accept.html";
});