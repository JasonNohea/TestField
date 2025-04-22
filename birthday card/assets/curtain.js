setTimeout(slide, 2000);
setTimeout(remove, 4000);
function slide() {
    document.getElementsByClassName("curtainContainer")[0].style.transform =
        "translatex(-150vw) ";
    document.getElementsByClassName("curtainContainer")[1].style.transform =
        "translatex(150vw)";
    startConfetti();
    document.getElementById("overlay").classList.add("opacity");

}

function remove() {
    document.getElementById("curtainBody").classList.add("opacity");
}