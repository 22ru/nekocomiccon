// If you really want you can steal this code,
// but I do not give you permission to steal the precious thing!

class preciousThing {
    constructor(imgurl, description) {
        this.imgurl = imgurl;
        this.description = description;
    }
};

var preciousArray = [
    new preciousThing("img/precious/asuka.gif", "this asuka is so cute!"),
    new preciousThing("img/precious/draggie.gif", "a little draggie"),
    new preciousThing("img/precious/tamagotchi.gif", "i cried when my teacher took this from me in 5th grade"),
    new preciousThing("img/precious/smoking.gif", "old habits die hard"),
    new preciousThing("img/precious/kittykittykitten.gif", "KITTY. KITTY. KITTEN."),
    new preciousThing("img/precious/komasan.gif", "he guards my tea rack"),
    new preciousThing("img/precious/macaroni.gif", "my yoshi, Macaroni"),
    new preciousThing("img/precious/ohshit.gif", "i ran out of this years ago"),
    new preciousThing("img/precious/pokemoncard.gif", "my favorite card"),
    new preciousThing("img/precious/furby.gif", "my first furby! (i think)"),
    new preciousThing("img/precious/phoneback.gif", "ryan's phone back that i stole in 2014"),
    new preciousThing("img/precious/pocketpikachu.gif", "i cant get this dude to stop running away!"),
    new preciousThing("img/precious/gameboy.gif", "it's older than me"),
    new preciousThing("img/precious/teapot.gif", '"well seasoned"'),
    new preciousThing("img/precious/myadoptedson.gif", "my adopted son"),
    new preciousThing("img/precious/bigspoon.gif", "if i could eat all my meals with the big spoon, i would"),
    new preciousThing("img/precious/tamagotchion.gif", "my best friend bought this for me ;A;"),
    new preciousThing("img/precious/engel.gif", "i bought this mug in germany!"),
    new preciousThing("img/precious/wateringcan.gif", "the perfect can"),
    new preciousThing("img/precious/quatchi.gif", "he wasnt so matted before i slept on him for 10 years"),
    new preciousThing("img/precious/babpikachu.gif", "what have i done..."),
    new preciousThing("img/precious/button.gif", "dont talk to me or my son ever again"),
    //the last one is the exit button, which is always unblurred
    new preciousThing("img/decor/rose4.gif", "Get me outta here!!!")
]

function loadThings () {
    var i, j;
    for (i = 0; i < preciousArray.length; i++) {
        j = document.createElement("img");
        j.src = preciousArray[i].imgurl;
        j.alt = preciousArray[i].description;

        j.style["position"] = "fixed";
        j.style["left"] = Math.random() * (document.documentElement.clientWidth - j.width) + "px";
        j.style["top"] = Math.random() * (document.documentElement.clientHeight - j.height) + "px";
        j.style["z-index"] = i + 1;
        j.style["filter"] = "blur(" + (preciousArray.length - j.style["z-index"])/2 + "px)";

        j.addEventListener("mouseenter", function() {
            document.getElementById("subtitles").innerText = this.alt;
            this.style["filter"] = "blur(0px)";
        });
        j.addEventListener("mouseout", function() {
            document.getElementById("subtitles").innerText = "";
            this.style["filter"] = "blur("+ (preciousArray.length - this.style["z-index"])/2 +"px)";
        });
        document.body.appendChild(j);
    }
    document.getElementsByTagName("img")[i-1].style["width"] = "200px";
    document.getElementsByTagName("img")[i-1].addEventListener("click", function() {
        window.history.back();
    });
}
