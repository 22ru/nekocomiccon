var xmlDoc;

// stolen shamelessly from w3schools
// https://www.w3schools.com/xml/xml_parser.asp
function retrieveXML(filename) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        initializeGallery(this);
      }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
} 

function initializeGallery(xml) {
    var xmlDoc, images, thumbnail;
    xmlDoc = xml.responseXML;

    images = xmlDoc.getElementsByTagName("image");
    
    for (i = 0; i < images.length; i++) {
        var thumbnail = document.createElement("img");
        thumbnail.src = images[i].getElementsByTagName("thumb")[0].innerText;
        thumbnail.alt = images[i].getElementsByTagName("description")[0].innerText;
        console.log("creating thumb " + thumbnail.src);
        document.getElementById("gallery").appendChild(thumbnail);
    }
}