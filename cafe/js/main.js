// Semi functional.
// Issue: back button twice will return you to the same page

var orderInProgress = 0;
var initial = 1;

var mugs = [
    ["engel", "The sunlight comes in the windows brightly as you drink this."],
    ["LOL01224", "A little bear in the cafe."],
    ["LOL02018", "Somehow, this latte makes you smile just a little brighter."],
    ["LOL02019", "It's so sweet!"],
    ["LOL02020", "You call your German speaking friend to find out this isn't coffee."],
    ["LOL02021", "Drinking this reminds you of the silly birds that woke you up this morning."],
    ["LOL02022", "Miki Miki hani kira kira afuu<br />Frustrated hani afuu-nano?"],
    ["LOL02024", "Did Cherry pick the ugliest mug in the cafe for you?"],
    ["LOL02023", "You regret not having ordered a cupcake to go with it."],
    ["LOL02025", "This latte makes you twitch!!!"],
    ["LOL02026", "Suddenly, you feel more productive!"],
    ["LOL02027", "The cup is so big the latte doesn't even fill it half way."],
    ["LOL02028", "There's no milk in your latte."],
    ["LOL02029", "Kyun!"],
    ["LOL02030", "But you already had these memorized!"],
    ["LOL02031", "It's officially licensed merchandise, probably."],
    ["LOL02032", "You decide to go home to check on your villagers."],
    ["LOL02033", "The cup is too warm to pick up!"],
    ["LOL02034", "For some reason, it smells like karaage."],
    ["LOL02035", "Definitely not what you ordered."],
    ["LOL02036", "You call your best friend after drinking this."],
    ["LOL02037", "You become lost in thought about who Julie might be."],
    ["LOL02038", "Your latte is already cold!"],
    ["LOL02039", "You wander off and forget to finish your drink."],
    ["LOL02041", "He looks lonely, but he's not because you're here!"],
    ["LOL02042", "Rrrrrrrrrankochan!"]
];

function changeiFrame(pageName) {
    if (pageName.length > 1 && pageName == "undefined") {
        pageName = "welcome";
    }
	document.getElementById("content").src = pageName + ".html";
    console.log("iframe changing to " + pageName);
}

function updateHash() {
    window.location.hash = "#" + getCurrHashFromIframeLoc();
    console.log("hash updated to " + window.location.hash);
}

function initializeIframe() {
    var currentHash;
    var check;

    currentHash = document.location.hash;
    console.log("initializing: current hash is " + currentHash);
    if (currentHash.length > 1) {
        changeiFrame(currentHash.substr(1));
    }
    else { //default page
        changeiFrame("welcome");
    }

    // This is one of my top obnoxious functions of all time.
    check = checkHours();
    if (check == 0) {
        initializeDialog_Cherry();
    } else if (check == 1) {
        initializeDialog_Cheby();
    }

    //doesnt trigger with back and forward
    document.getElementById("content").addEventListener('load', function() {
        console.log("iframe reloaded");
        window.parent.postMessage("iframe src changed");
    }, false);
    //window.addEventListener('hashchange', updateHash, false);
    window.addEventListener("message", updateHash);
    window.addEventListener("popstate", function(event) {
        console.log("window state changed");
        currentHash = document.location.hash;
        console.log("current hash is " + currentHash);
        if (currentHash.length > 0) {
            changeiFrame(currentHash.substr(1));
        }
    });
}

function notifyChange() {
    window.parent.postMessage("iframe src changed");
}

function getCurrHashFromIframeLoc() {
    var iframeLoc, newHash;

    iframeLoc = document.getElementById("content").contentWindow.location.href;
    console.log("iframe location: " + iframeLoc);
    if (iframeLoc == "about:blank") {
        // we don't ever want it to be blank!
        changeiFrame("welcome");
        //window.location.hash = "#" + newHash; //should be triggered from event listener
    } else {
        newHash = iframeLoc.split("cafe/")[1].split(".html")[0];
    }
    return newHash;
}

function checkHours() {
    var d, t;

    d = new Date();
    t = d.getHours();
    if (t < 6 || t > 16) {
    //if (false) {
        document.getElementById("navigation").style.display = 'none';
        changeiFrame("closed");
        document.getElementById("barista").style.display = 'none';
        document.getElementById("dialogbox").style.display = 'none';
    } else if (d.getDay() == 0) { // Sunday
        return 1;
    }
    return 0;
}

function openup() {
    document.getElementById("navigation").style.display = 'flex';
    document.getElementById("barista").style.display = 'flex';
    document.getElementById("dialogbox").style.display = 'flex';
}

function changeDialog(dialog) {
    var dbox, p;

    dbox = document.getElementById("dialogbox");
    dbox.innerHTML = "";
    p = document.createElement("p");
    p.innerHTML = dialog;
    dbox.append(p);
}

function initializeDialog_Cherry() {
    var dbox, orderForm, orderName, orderButton;

    if (initial) {
        document.getElementById("barista").addEventListener("click", pokeBarista_Cherry);
        initial = 0;
    }

    changeDialog("Would you like a latte?<br />Can I get your name for the order?");
    dbox = document.getElementById("dialogbox");
    orderForm = document.createElement("form");
    orderName = document.createElement("input");
    orderName.setAttribute("type", "text");
    orderName.setAttribute("id", "orderName");
    orderName.setAttribute("rows", "1");
    orderName.setAttribute("size", "15");
    orderName.setAttribute("placeholder", "Latte Lover...");
    orderName.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            orderLatte_Cherry();
        }
    })
    orderForm.append(orderName);
    orderButton = document.createElement("input");
    orderButton.setAttribute("type", "button");
    orderButton.setAttribute("id", "orderButton");
    orderButton.onclick = orderLatte_Cherry;
    orderButton.setAttribute("value", "Pay $100");
    orderForm.append(orderButton);
    dbox.append(orderForm);
}


function initializeDialog_Cheby() {
    var dbox, orderForm, orderButton;

    document.getElementById("barista").src = "img/assets/pafnutychebyshev.gif";

    if (initial) {
        document.getElementById("barista").addEventListener("click", pokeBarista_Cheby);
        initial = 0;
    }

    changeDialog("Today's special is the French press.");
    dbox = document.getElementById("dialogbox");
    orderButton = document.createElement("input");
    orderButton.setAttribute("type", "button");
    orderButton.setAttribute("id", "orderButton");
    orderButton.onclick = orderFrenchPress_Cheby;
    orderButton.setAttribute("value", "Pay $3.");
    dbox.append(orderButton);
}

function orderLatte_Cherry() {
    var customerName, offset, dbox, p, wrongChar;
    var prepTimeSeconds = 20*60;
    var rand = Math.random();

    customerName = document.getElementById("orderName").value;
    if (customerName.length > 2) {
        orderInProgress = 1;
        offset = Math.floor(rand * customerName.length);
        wrongChar = customerName.charCodeAt(offset) + (rand * 100) % 10;
        while (wrongChar < 65 || (wrongChar > 90 && wrongChar < 97) ) {
            wrongChar++;
        }
        while (wrongChar > 122) {
            wrongChar--;
        }

        customerName = customerName.substr(0, offset).concat(String.fromCharCode(wrongChar) + customerName.substr(offset+1, customerName.length));

        changeDialog("It'll be just a moment! I'll make you a good one!");

        setTimeout(function() {
            serveLatte_Cherry(customerName);
        }, prepTimeSeconds*1000);
    }
}

function orderFrenchPress_Cheby() {
    orderInProgress = 1;

    changeDialog("Coming up.");

    setTimeout(function() {
        serveFrenchPress_Cheby();
    }, 4*60*1000); //4 minutes
}

function pokeBarista_Cherry() {
    if (orderInProgress) {
        changeDialog("Just a little longer...");
    } else {
        changeDialog("Did you need help?");
        setTimeout(function() {
            initializeDialog_Cherry();
        }, 3000);
    }
}

function pokeBarista_Cheby() {
    if (orderInProgress) {
        changeDialog(". . . .");
        setTimeout(function() {
            changeDialog("Go take a seat.");
        }, 3000);
    } else {
        changeDialog("Stop touching me.");
        setTimeout(function() {
            initializeDialog_Cheby();
        }, 3000);
    }
}

function serveLatte_Cherry(customerName) {
    var rand = Math.random();

    drinkInfo = mugs[Math.floor(rand * mugs.length)];

    document.getElementById("drink").getElementsByTagName("img")[0].src = "img/assets/mugs/" + drinkInfo[0] + ".gif";
    document.getElementById("drink").getElementsByTagName("p")[0].innerHTML = drinkInfo[1];

    document.getElementById('overlay').style.display = 'flex';

    changeDialog("Latte for " + customerName + "! Your order is ready<br />☕︎٩(ɷ◡ɷ)۶");
    orderInProgress = 0;

    document.getElementById('overlay').onclick = function() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById("drink").getElementsByTagName("img")[0].src = "";
        document.getElementById("drink").getElementsByTagName("p")[0].innerHTML = "";
        setTimeout(function() {
            initializeDialog_Cherry();
        }, 8000);
    }
}

function serveFrenchPress_Cheby() {
    document.getElementById("drink").getElementsByTagName("img")[0].src = "img/assets/mugs/LOL02017.gif";
    document.getElementById("drink").getElementsByTagName("p")[0].innerHTML = "God, I wish that were me.";

    document.getElementById('overlay').style.display = 'flex';

    changeDialog("It's ready.");
    orderInProgress = 0;

    document.getElementById('overlay').onclick = function() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById("drink").getElementsByTagName("img")[0].src = "";
        document.getElementById("drink").getElementsByTagName("p")[0].innerHTML = "";
        setTimeout(function() {
            initializeDialog_Cheby();
        }, 8000);
    }
}