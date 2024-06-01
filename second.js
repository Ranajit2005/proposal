// console.log("hi");
let no = document.getElementById('no');
let yes = document.getElementById('yes');

yes.addEventListener("click", function () {
    window.location.href = "./accept.html";
});

no.addEventListener("click", function () {
    window.location.href = "./last.html";
});