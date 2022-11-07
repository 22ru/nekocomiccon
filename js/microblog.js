
//stolen shamelessly from w3
function retrieveXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            buildPage(this);
        }
    };
    xhttp.open("GET", "microblog.xml", true);
    xhttp.send();
}

function buildPage(xml) {
    var xmlDoc = xml.responseXML;
    document.getElementById("demo").innerHTML = "retrieved";
}