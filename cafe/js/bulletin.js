// To do:
// textures for washi tape and photo backing
// inner photo measurements don't look correct. find a better source for measurements.
//corkboard could tile a lot better

class photograph {
    constructor(imgLink, format, physical, rotate, text) {
        this.imgLink = imgLink;
        this.format = format;
        this.physical = physical;
        this.rotate = rotate;
        this.text = text;
    }
}

function loadPhotos() {
    var i, photo, img, pin, offset;
    for (i = 0; i < photoArray.length; i++) {

        photo = document.createElement("div");
        photo.className = photoArray[i].format;

        offset = Math.random()*200 - 100;

        if (photoArray[i].physical == 1) {
            photo.style["backgroundImage"] = "url(" + photoArray[i].imgLink + ")";
            photo.style["backgroundSize"] = "cover";
        } else {
            img = document.createElement("img");
            img.src = photoArray[i].imgLink;
            img.className = "photo";
            photo.appendChild(img);
        }

        pin = document.createElement("img");
        pin.className = "pin";
        pin.src = "img/assets/violet.gif";
        photo.appendChild(pin);

        if (photoArray[i].text.length > 0) {
            writing = document.createElement("p");
            writing.innerHTML = photoArray[i].text;
            if (photoArray[i].physical == 1) {
                writing.className = "overlayTape";
            }
            writing.style["rotate"] = offset / 40 + "deg";
            photo.appendChild(writing);
        }

        document.getElementById("board").appendChild(photo);

        if (photoArray[i].rotate == 1) {
            pin.style["rotate"] = 90 + offset % 10 + "deg";
            photo.style["rotate"] = -90 + offset % 10 + "deg";
            photo.style["filter"] = "drop-shadow(-5px 5px 5px rgb(0,0,0,.4))";
            pin.style["top"] = "50%";
            pin.style["left"] = "revert";
            pin.style["right"] = "2mm";
            if (photoArray[i].format == "instaxwide") {
                margin = (parseInt(getComputedStyle(photo).getPropertyValue("width"), 10) - parseInt(getComputedStyle(photo).getPropertyValue("height"), 10)) / 2;
                photo.style["marginTop"] = margin + "px";
                photo.style["marginBottom"] = margin + "px";
            } else {
                margin = (parseInt(getComputedStyle(photo).getPropertyValue("height"), 10) - parseInt(getComputedStyle(photo).getPropertyValue("width"), 10)) / 2;
                photo.style["marginLeft"] = margin + "px";
                photo.style["marginRight"] = margin + "px";
            }
        } else {
            photo.style["rotate"] = offset % 10 + "deg";
            photo.style["marginTop"] = offset % 10 + "mm";
            photo.style["marginLeft"] = offset / 10 + "mm";
            pin.style["rotate"] = offset % 10 + "deg";
        }
    }
}