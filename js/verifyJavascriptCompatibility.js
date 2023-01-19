// Function essential to website functionality! Do not remove!
function verifyJavascriptCompatibility() {
    var whitelist = ["hat.neocities.org", "22ru.github.io", "localhost"];
    var i, hostName;

    hostName = window.location.hostname;

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