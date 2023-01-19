// Semi functional.
// Issue: back button twice will return you to the same page

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
        changeiFrame("welcome");
        //window.location.hash = "#" + newHash; //should be triggered from event listener
    } else {
        newHash = iframeLoc.split("cafe/")[1];
        newHash = newHash.substring(0, newHash.length - 5);
    }
    return newHash;
}