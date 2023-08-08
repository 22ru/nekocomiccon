// Semi functional.
// Issue: back button twice will return you to the same page
// I don't know if this is fixable due to not being able to detect back button presses

var orderInProgress = 0;
var initial = 1;
var anger = 0;
var timeoutID;
var drinkTimeoutID;

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

function initializeIframe() {
    var currentHash;
    var check;

    currentHash = document.location.hash;
    console.log("initializing: current hash is " + currentHash);
    if (currentHash.length < 2 || currentHash.substring(1) == "undefined" || currentHash == "#index.html") {
        console.log("loading welcome page");
        currentHash = "welcome.html";
    } else {
        currentHash = currentHash.substring(1);
    }
    document.getElementById("content").src = currentHash;

    // This is one of my top obnoxious functions of all time.
    check = checkHours();
    if (check == 0) {
        initializeDialog_Cherry();
    } else if (check == 1) {
        initializeDialog_Cheby();
    }

    // doesn't trigger with back and forward
    document.getElementById("content").addEventListener("load", function() {
        console.log("LOAD EVENT. iframe src location = " + document.getElementById("content").src);
        // update hash
        var newHash = document.getElementById("content").contentWindow.location.pathname.substr(6); // 6 is "/cafe/".length 
        console.log("changing hash to " + newHash);
        window.location.hash = "#" + newHash;
    }, false);

    // popstate occurs on back or forward... and all the time...
    window.addEventListener("popstate", function(event) {
        console.log("POPSTATE EVENT. window state changed. window location: " + document.location);

        // need to reload because it is not done automatically.
        var newSrc = document.location.hash.substring(1);
        //if (newSrc.length > 1 && newSrc != document.getElementById("content").src.split("/cafe/")[1]) {
        if (newSrc.length > 1) {
            document.getElementById("content").src = newSrc;
        } else {
            // return to welcome if there is no string
            document.getElementById("content").src = "welcome.html";
        }
    });
}

function checkHours() {
    var d, t;

    d = new Date();
    t = d.getHours();
    if (t < 6 || t > 16) {
    //if (false) {
        document.getElementById("navigation").style.display = 'none';
        document.getElementById("content").src = "closed.html";
        document.getElementById("barista").style.display = 'none';
        document.getElementById("dialogbox").style.display = 'none';
    } else if (d.getDay() == 0) { // Sunday
        return 1;
    }
    return 0;
}

function openup() {
    var d = new Date();
    if (d.getDay() == 0) {
        initializeDialog_Cheby();
    } else {
        initializeDialog_Cherry();
    }
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

    /*if (initial) {
        document.getElementById("barista").addEventListener("click", pokeBarista_Cherry);
        initial = 0;
    }*/

    document.getElementById("barista").removeEventListener("click", pokeBarista_Cheby);
    document.getElementById("barista").addEventListener("click", pokeBarista_Cherry);

    document.getElementById("barista").src = "img/assets/cherrylimeade.gif";

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
    var dbox, orderButton;

    document.getElementById("barista").src = "img/assets/pafnutychebyshev.gif";

    /*if (initial) {
        document.getElementById("barista").addEventListener("click", pokeBarista_Cheby);
        initial = 0;
    }*/
    document.getElementById("barista").removeEventListener("click", pokeBarista_Cherry);
    document.getElementById("barista").addEventListener("click", pokeBarista_Cheby);

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
    var customerName, offset, wrongChar;
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

        customerName = customerName.substr(0, offset).concat(String.fromCharCode(wrongChar) + customerName.substr(offset + 1, customerName.length));

        changeDialog("It'll be just a moment! I'll make you a good one!");

        drinkTimeoutID = setTimeout(function() {
            serveLatte_Cherry(customerName);
        }, prepTimeSeconds*1000);
    }
}

function orderFrenchPress_Cheby() {
    orderInProgress = 1;

    changeDialog("Coming up.");

    drinkTimeoutID = setTimeout(function() {
        serveFrenchPress_Cheby();
    }, 4*60*1000); //4 minutes
}

function pokeBarista_Cherry() {
    if (timeoutID != 0) {
        clearTimeout(timeoutID);
    }
    if (orderInProgress) {
        timeoutID = changeDialog("Just a little longer...");
    } else {
        timeoutID = changeDialog("Did you need help?");
        setTimeout(function() {
            initializeDialog_Cherry();
        }, 3000);
    }
}

function pokeBarista_Cheby() {
    anger += 1;
    if (timeoutID != 0) {
        clearTimeout(timeoutID);
    }
    if (anger >= 14) {
        document.getElementById("barista").src = "img/assets/pafnutychebysheveyecontact.gif";
    }
    if (anger >= 20) {
        changeDialog("Get out of my cafe.");
        setTimeout(function() {
            if (orderInProgress) clearTimeout(drinkTimeoutID);
            setTimeout(function() {
                throwFrenchPress_Cheby();
            }, 4*60*1000); //4 minutes
            document.getElementById("navigation").style.display = 'none';
        changeiFrame("closed");
            document.getElementById("barista").style.display = 'none';
            document.getElementById("dialogbox").style.display = 'none';
            changeiFrame("closed");
        }, 3000);
    } else if (orderInProgress) {
        changeDialog(". . . .");
        timeoutID = setTimeout(function() {
            changeDialog("Go take a seat.");
        }, 3000);
    } else {
        changeDialog("Stop touching me.");
        timeoutID = setTimeout(function() {
            initializeDialog_Cheby();
        }, 3000);
    }
    document.getElementById("barista").style.filter = "drop-shadow(0px 0px " + anger + "px #910000)";
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

function throwFrenchPress_Cheby() {
    document.getElementById("drink").getElementsByTagName("img")[0].src = "img/assets/mugs/LOL02017.gif";
    document.getElementById("drink").getElementsByTagName("img")[0].style["rotate"] = "160deg";
    document.getElementById("drink").getElementsByTagName("p")[0].innerHTML = "AND STAY OUT";

    document.getElementById('overlay').style.display = 'flex';
    orderInProgress = 0;

    document.getElementById('overlay').onclick = function() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById("drink").getElementsByTagName("img")[0].src = "";
        document.getElementById("drink").getElementsByTagName("p")[0].innerHTML = "";
    }
}