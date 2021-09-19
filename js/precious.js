class preciousThing {
    constructor(imgurl, description) {
        this.imgurl = imgurl;
        this.description = description;
    }
};

var preciousArray = [
    new preciousThing("img/precious/asuka.gif", "this asuka is so cute!"),
    new preciousThing("img/precious/draggie.gif", "a little draggie"),
    new preciousThing("img/precious/gameboy.gif", "it's older than me"),
    new preciousThing("img/precious/kittykittykitten.gif", "KITTY. KITTY. KITTEN."),
    new preciousThing("img/precious/komasan.gif", "he guards my tea rack"),
    new preciousThing("img/precious/macaroni.gif", "my yoshi, Macaroni"),
    new preciousThing("img/precious/myadoptedson.gif", "my adopted son"),
    new preciousThing("img/precious/ohshit.gif", "i ran out of this years ago"),
    new preciousThing("img/precious/pokemoncard.gif", "my favorite card"),
    new preciousThing("img/precious/furby.gif", "my first furby! (i think)"),
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
        j.style["filter"] = "blur(" + (preciousArray.length - j.style["z-index"]) + "px)";

        j.addEventListener("mouseenter", function() {
            document.getElementById("subtitles").innerText = this.alt;
            this.style["filter"] = "blur(0px)";
        });
        j.addEventListener("mouseout", function() {
            document.getElementById("subtitles").innerText = "";
            this.style["filter"] = "blur("+ (preciousArray.length - this.style["z-index"]) +"px)";
        });
        document.body.appendChild(j);
    }
    document.getElementsByTagName("img")[i-1].style["width"] = "200px";
    document.getElementsByTagName("img")[i-1].addEventListener("click", function() {
        window.history.back();
    });
}
