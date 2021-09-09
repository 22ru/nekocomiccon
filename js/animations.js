var x = 0;
var y = 0;
var i = 0;

var bg;
var ti;


function startAnimations() {
    document.getElementById("animationButton").setAttribute("onClick","endAnimations()");
    bg = setInterval(moveBackground, 70);
    ti = setInterval(vibrate, 100);
}
function endAnimations() {
    document.getElementById("animationButton").setAttribute("onClick","startAnimations()");
    clearInterval(bg);
    clearInterval(ti);
}

function moveBackground() {
    i = (i + 1) % 120;
    x = Math.cos(i/30 * Math.PI) * 15;
    y = Math.sin(i/30 * Math.PI) * 15;

    document.getElementById("main").style.backgroundPositionX = x + "px";
    document.getElementById("main").style.backgroundPositionY = y + "px";
}

function vibrate() {
    var t = document.getElementsByTagName("h1")[0];
    var rand = Math.floor(Math.random()*17);
    if (rand == 0) {
        t.innerText = "ハットのnekoコミコン";
    } else if (rand == 1) {
        t.style.fontFamily = "Arial";
    } else if (rand == 2) {
        t.innerText = "HAT の nekocomicコン";        
    } else if (rand == 3) {
        t.style.color = "#3F00D1";
    } else if (rand == 4) {
        t.innerText = "hat's nekoコミコン";
    } else if (rand == 5) {
        t.style.color = "#AA00D1";
    } else if (rand == 6) {
        t.innerText = "ハット's 猫コミコン";
    } else if (rand == 7) {
        t.innerText = "hat's 猫comiccon";
    } else if (rand == 8) {
        t.style.color = "#D100B0";
    } else if (rand == 9) {
        t.style.color = "#D10300";
    } else if (rand == 10) {
        t.style.fontFamily = "Monaco";
    } else if (rand == 11) {
        t.style.color = "#D16F00";
    } else if (rand == 12) {
        t.style.fontFamily = "Times New Roman";
    } else if (rand == 13) {
        t.style.fontFamily = "Copperplate";
    } else if (rand == 14) {
        t.style.fontFamily = "Courier New";
    } else if (rand == 15) {
        t.style.color = "#FFFFFF";
    } else if (rand == 16) {
        t.style.color = "#D10069";
    }
    t.style.marginTop = 21 + rand/2 + "px";
    t.style.marginLeft = rand*2 + "px";
}