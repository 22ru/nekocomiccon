// Semi functional.
// Issue: back button twice will return you to the same page

var orderInProgress = 0;
var initial = 1;

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
    currentHash = document.location.hash;
    console.log("initializing: current hash is " + currentHash);
    if (currentHash.length > 1) {
        changeiFrame(currentHash.substr(1));
    }
    else { //default page
        changeiFrame("welcome");
    }

    // This is one of my top obnoxious functions of all time.
    //checkHours();

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
        document.getElementById("navigation").remove();
        changeiFrame("closed");
        document.getElementById("barista").remove();
        document.getElementById("dialogbox").remove();
    }
}

function orderLatte() {
    var customerName, offset, dbox, p, wrongChar;
    var prepTimeSeconds = 25*60;
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
            serveLatte(customerName);
        }, prepTimeSeconds*1000);
    }
}

function serveLatte(customerName) {
    changeDialog("Latte for " + customerName + "! Your order is ready<br />☕︎٩(ɷ◡ɷ)۶");
    orderInProgress = 0;
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('overlay').onclick = function() {
        document.getElementById('overlay').style.display = 'none';
        setTimeout(function() {
            initializeDialog();
        }, 8000);
    }
}

function pokeBarista() {
    if (orderInProgress) {
        changeDialog("Just a little longer...");
    } else {
        changeDialog("Did you need help?");
        setTimeout(function() {
            initializeDialog();
        }, 3000);
    }
}

function changeDialog(dialog) {
    dbox = document.getElementById("dialogbox");
    dbox.innerHTML = "";
    p = document.createElement("p");
    p.innerHTML = dialog;
    dbox.append(p);
}

function initializeDialog() {
    if (initial) {
        document.getElementById("barista").addEventListener("click", pokeBarista);
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
            orderLatte();
        }
    })
    orderForm.append(orderName);
    orderButton = document.createElement("input");
    orderButton.setAttribute("type", "button");
    orderButton.setAttribute("id", "orderButton");
    orderButton.onclick = orderLatte;
    orderButton.setAttribute("value", "Pay $100");
    orderForm.append(orderButton);
    dbox.append(orderForm);
}

/*
    <p>Welcome! Would you like a latte?<br />Can I get a name for the order?</p>
    <form>
        <input type="text" id="orderName" rows="1" size="15" placeholder="Latte Lover..." required></input>
        <input type="button" id="orderButton" onclick="orderLatte()" value="Pay $100"></input>
    </form>
*/