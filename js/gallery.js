// I wrote this in a way such that RMS would still be able to look at my photos and text. I hope he would like that.

const memoryArray = document.getElementsByClassName("memory");
var current;

// change photo and text
function showPhoto(memIndex) {
    //console.log("Photo " + memIndex + " clicked.");
    imgViewer = document.getElementById("imageViewer");

    //change image
    imgViewer.getElementsByTagName("img")[0].setAttribute("src", memoryArray[memIndex].getElementsByTagName("img")[0].src);

    //remove old text
    while (imgViewer.getElementsByTagName("p").length != 0) {
        //console.log("removing: " + imgViewer.getElementsByTagName("p")[0].innerText);
        imgViewer.getElementsByTagName("p")[0].remove();
    }

    //insert new text
    //console.log("adding "+ memoryArray[memIndex].getElementsByTagName("p").length + " paragraph elements");
    for (var i = 0; i < memoryArray[memIndex].getElementsByTagName("p").length; i++) {
        var newParagraph = document.createElement("p");
        newParagraph.innerText = memoryArray[memIndex].getElementsByTagName("p")[i].innerText;
        imgViewer.appendChild(newParagraph);
        //console.log("added: " + newParagraph.innerText);
    }
}

// Keyboard navigation
function checkKey(e) {
    var key = e.key;
    console.log(e.key + " key pressed.");

    if (key === 'ArrowLeft' || key === 'ArrowUp' && current > 0) {
        current--;
        showPhoto(current);
    } else if (key === 'ArrowRight' || key === 'ArrowDown' && current < memoryArray.length - 1) {
        current++;
        showPhoto(current);
    }
}

// Initialization
function startGallery() {
    current = 0;

    var sidebar = document.getElementById("sidebar");
    sidebar.style.setProperty("display", "block");
    sidebar.style.setProperty("width", "115px");
    sidebar.style.setProperty("height", "96%");
    sidebar.style.setProperty("position", "fixed");
    sidebar.style.setProperty("overflow-y", "auto");
    sidebar.style.setProperty("overflow-x", "hidden");
    

    var imgViewer = document.createElement("div");
    imgViewer.id = "imageViewer";
    imgViewer.style.setProperty("display", "block");
    imgViewer.style.setProperty("margin-left", "120px");
    document.body.appendChild(imgViewer);

    var title = document.createElement("h2");
    title.innerText = document.getElementsByTagName("h2")[0].innerText;
    document.getElementsByTagName("h2")[0].style.setProperty("display", "none");
    imgViewer.appendChild(title);

    var date = document.createElement("h4");
    date.innerText = document.getElementsByTagName("h4")[0].innerText;
    document.getElementsByTagName("h4")[0].style.setProperty("display", "none");
    date.className = "date";
    imgViewer.appendChild(date);

    var photo = document.createElement("img");
    imgViewer.appendChild(photo);

    document.addEventListener("keydown", function(e) {
        checkKey(e);
    });

    for (var i = 0; i < memoryArray.length; i++) {
        var currMemory = memoryArray[i];
        // create thumbnail
        currMemory.getElementsByTagName("img")[0].setAttribute("width", "100px");
        currMemory.setAttribute("alt", i);

        // add onclick listener
        currMemory.addEventListener("click", function() {
            current = this.getAttribute("alt");
            showPhoto(current)
        });
        
        // hide comments
        for (var j = 0; j < currMemory.getElementsByTagName("p").length; j++ ) {
            currMemory.getElementsByTagName("p")[j].style.setProperty("display", "none");
        }
    }

    //initialize to the first photo
    showPhoto(current);
}