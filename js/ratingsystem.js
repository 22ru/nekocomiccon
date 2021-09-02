rating = Math.floor((Date.now()-1630476455735) / 90000000);

function refreshScore() {
    document.getElementById("currentRating").innerText = "Current rating: " + rating;
}

function upvote() {
    rating++;
    document.getElementById("response").innerText = "thank you!!!! XD";
    refreshScore();
}

function downvote() {
    rating--;
    document.getElementById("response").innerText = "thank you for your feedback.";
    refreshScore();
}

function changeRating() {
    if (Math.round(Math.random(1)) == 1) {
        rating++;
    } else {
        rating--;
    }
    refreshScore();
}

function startRating() {
    window.setInterval(changeRating, 4853);
    refreshScore();
}