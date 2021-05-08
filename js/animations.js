var x = 0;
var y = 0;
var i = 0;

var bg;

function startAnimations() {
    document.getElementById("animationButton").setAttribute("onClick","endAnimations()");
    bg = setInterval(moveBackground, 70);
}
function endAnimations() {
    document.getElementById("animationButton").setAttribute("onClick","startAnimations()");
    clearInterval(bg);
}

function moveBackground() {
    i = (i + 1) % 120;
    x = Math.cos(i/30 * Math.PI) * 15;
    y = Math.sin(i/30 * Math.PI) * 15;

    document.getElementById("main").style.backgroundPositionX = x + "px";
    document.getElementById("main").style.backgroundPositionY = y + "px";
}
