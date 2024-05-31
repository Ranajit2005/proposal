console.log("hi");
let no = document.getElementById('no');
let yes = document.getElementById('yes');

function move() {
    let maxW = 300;
    let maxH = 300;

    let randomX = Math.floor(Math.random() * maxW);
    let randomY = Math.floor(Math.random() * maxH);

    no.style.left = randomX + 'px';
    no.style.top = randomY + 'px';
    // no.style.padding.left = 30 + 'px';
    // no.style.padding.right = 30 + 'px';
}

no.addEventListener('mouseenter', function (){
    move();
});

