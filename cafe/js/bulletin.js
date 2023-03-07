// To do:
// randomize offset in placement and rotation
// look into flex rotation issue?
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

var longString = "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.";

var photoArray = [
    new photograph("img/gallery/hina/HAT00194.jpg", "instaxmini", 0,  0, longString),
    new photograph("img/gallery/hina/HAT00194.jpg", "instaxsquare", 0,  0, longString),
    new photograph("img/gallery/hina/HAT00194.jpg", "instaxwide", 0,  0, longString),

    new photograph("img/bulletin/IMG_9561.jpg", "instaxmini", 0,  0, "Cursed Hybrid<br />11/17/2022"),
    new photograph("img/bulletin/IMG_9561.jpg", "instaxmini", 0, 1, "Cursed Hybrid<br />11/17/2022"),
    new photograph("img/bulletin/IMG_9717.jpg", "instaxmini", 1, 0, "cool text"),
    new photograph("img/bulletin/IMG_9717.jpg", "instaxmini", 1, 1, "hi")
]


function loadPhotos() {
    var i, photo;
    for (i = 0; i < photoArray.length; i++) {

        photo = document.createElement("div");
        photo.className = photoArray[i].format;

        if (photoArray[i].physical == 1) {
            photo.style["backgroundImage"] = "url(" + photoArray[i].imgLink + ")";
            photo.style["backgroundSize"] = "cover";
            
        } else {
            img = document.createElement("img");
            img.src = photoArray[i].imgLink;

            photo.appendChild(img);
        }

        if (photoArray[i].text.length > 0) {
            writing = document.createElement("p");
            writing.innerHTML = photoArray[i].text;
            if (photoArray[i].physical == 1) {
                writing.className = "overlayTape";
            }
            photo.appendChild(writing);
        }

        if (photoArray[i].rotate == 1) {
            photo.style["rotate"] = "-91deg";
            photo.style["filter"] = "drop-shadow(-5px 5px 5px rgb(0,0,0,.4))";
        }

        document.getElementById("board").appendChild(photo);
    }

}