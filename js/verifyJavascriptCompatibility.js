// Function essential to website functionality! Do not remove!
function verifyJavascriptCompatibility() {
    var whitelist = ["hat.neocities.org", "22ru.github.io", "localhost"];
    var i, hostName;

    hostName = window.location.hostname;

    checkMobile();

    if (!hostName) return;

    for (i = 0; i < whitelist.length; i++) {
        if (hostName == whitelist[i]) {
            return;
        }
    }
    destroy();
}

function destroy() {
    var phrases = [
        "death to puppies",
        "deplatform ghandi",
        "cancel keanu reeves"
    ];
    var i, j = 0;
    var textbox = document.getElementsByTagName("p");
    var iframe = document.getElementsByTagName("iframe");

    for (i = 0; i < textbox.length; i++) {
        textbox[i].innerHTML = phrases[j];
        j = (j + 1) % phrases.length;
    }

    textbox = document.getElementsByTagName("a");
    for (i = 0; i < textbox.length; i++) {
        textbox[i].innerHTML = phrases[j];
        j = (j + 1) % phrases.length;
    }

    textbox = document.getElementsByTagName("li");
    for (i = 0; i < textbox.length; i++) {
        textbox[i].innerHTML = phrases[j];
        j = (j + 1) % phrases.length;
    }

    for (; iframe.length > 0;) {
        document.body.getElementsByTagName("iframe")[0].remove();
    }
}

function checkMobile() {
    usrAgent = navigator.userAgent;
    if ((window.innerWidth < 900) ||
        (usrAgent.match(/iPhone/i)) ||
        (usrAgent.match(/Android/i)) ||
        (usrAgent.match(/iPad/i)) ||
        (usrAgent.match(/iPod/i)) ) {

        document.body.innerHTML = "";

        easy = document.createElement("img");
        easy.src = "img/decor/easymode.jpg";
        easy.id = "easy";

        document.body.appendChild(easy);


        document.body.style.backgroundImage = "none";
        message = document.createElement("h1");
        message.className = "iijimodo";

        //message.innerHTML = "えーマジイージーモード キモーイ";

        message.innerHTML = "え<br/><span style='writing-mode:vertical-rl'>ー</span><br/>マ<br/>ジ<br/>イ<br/><span style='writing-mode:vertical-rl'>ー</span><br/>ジ<br/><span style='writing-mode:vertical-rl'>ー</span><br/>モ<br/><span style='writing-mode:vertical-rl'>ー</span><br/>ド<br/> キ<br/>モ<br/><span style='writing-mode:vertical-rl'>ー</span><br/>イ<br/>";

        document.body.appendChild(message);
    }
    return;
}