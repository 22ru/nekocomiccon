function changeiFrame(pageName) {
	document.getElementById("content").src = pageName;
}

function updateHash() {
    window.location.hash = "#" + document.getElementById("content").src;
    console.log("hash updated");
}
