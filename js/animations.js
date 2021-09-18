var x = 0;
var y = 0;
var i = 0;
var j = 0;

var bg;
var ti;
var sub;

var subs = [["Onii-chan daisuki!!"],
            ["Doordashers will be shot on sight."],
            ["My Melody did nothing wrong."],
            ["Woomy if you want to woomy."],
            ["I can't find my phone."],
            ["irashaimasen"]];


function startAnimations() {
    document.getElementById("animationButton").setAttribute("onClick","endAnimations()");
    document.getElementById("subtitles").style.display = "block";

    bg = setInterval(moveBackground, 70);
    ti = setInterval(vibrate, 100);
    sub = setInterval(changeSubs, 3000);
    
}
function endAnimations() {
    document.getElementById("animationButton").setAttribute("onClick","startAnimations()");
    document.getElementById("subtitles").style.display = "none";

    clearInterval(bg);
    clearInterval(ti);
    clearInterval(sub);
}

function moveBackground() {
    i = (i + 1) % 120;
    x = Math.cos(i/30 * Math.PI) * 15;
    y = Math.sin(i/30 * Math.PI) * 15;

    document.getElementById("main").style.backgroundPositionX = x + "px";
    document.getElementById("main").style.backgroundPositionY = y + "px";
}

function changeSubs() {
    if (j > subs.length - 1) j = 0;
    document.getElementById("subtitles").textContent = subs[j];
    j++;
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

