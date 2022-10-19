// A simple blog script by Fran Hat
// Feel free to use this if you can figure it out

// All blog posts go under blog/
	// files must be named 1.html 2.html ... n.html
// All other pages go in main directory
	// Blog navigation bar is hidden while viewing any page outside of the blog

// The navigation bar items should all use onclick="changeiFrame('___')"

// To add blog post, you MUST change this value!
// Will give you a 404 if you enter 0
// (please someone tell me how to check the number of files 
// in a directory using vanilla JS)
var totalPages = 124;
var page = totalPages;

// Run on load of main body in document
// Reads the hash and navigates to the page
function startiFrame() {
	var pageName = window.location.hash.replace("#", '');

    if (pageName == "") { // no hash, go to latest blog post
		page = totalPages;
		changeBlogPage();
        return;
	} 

    if (isNaN(pageName)) { // non-blog hash, go to page
        page = totalPages;
        document.getElementById("blognav").style.display = "none";
        document.getElementById("content").src = pageName + ".html";
		if (pageName == "worms") displayWorms();
		else removeWorms();

	} else { // blog hash, go to blog page
		page = pageName;
        changeBlogPage();
    }
}

// Update the blog nav bar (disable/enable links)
// Doesn't actually stop the navigation functions but makes them look disabled
// Changes the page and makes the blog nav visible
function changeBlogPage() {
	if (page == totalPages) {
		document.getElementById("forward").setAttribute("class", "disabledLink");
	} else {
		document.getElementById("forward").setAttribute("class", "a:link");
	}
	if (page == 1) {
		document.getElementById("back").setAttribute("class", "disabledLink");
	} else {
		document.getElementById("back").setAttribute("class", "a:link");
	}

	document.getElementById("blognav").style.display = "block";
	document.getElementById("content").src = "blog/" + page + ".html";
}

// Called every time the user tries to navigate to a new page
// Updates the hash to match the page so you can return on refresh
// Stores last blog location (if not refreshed)
function changeiFrame(pageName) {
	if (pageName == 'blog') {
		removeWorms();
		if (page != totalPages) {
			window.location.hash = page;
		} else {
			window.location.hash = '';
		}
		changeBlogPage();
	} else {
		window.location.hash = "#" + pageName;
		document.getElementById("content").src = pageName + ".html";
		document.getElementById("blognav").style.display = "none";
		if (pageName == "worms") displayWorms();
		else removeWorms();
	}
}

function updateAddrBar() {
	var newAddr = document.getElementById("content").src;
	console.log("page change to " + newAddr);
}

// Blog navigation functions

function resetBlogPage() {
	page = totalPages;
	window.location.hash = "";
	changeBlogPage();
}
	
function forward() {
	if (page < totalPages) {
		page++;
		window.location.hash = "#" + page;
		changeBlogPage();
	}
}

function back() {
	if (page > 1) {
		page--;
		window.location.hash = "#" + page;
		changeBlogPage();
	}
}

// Worms
var normalAmountOfWorms = 5;
//surely I have better things to do than to hard code another global in here

function displayWorms() {
	var i, j;

	document.getElementById("decor").style.display = "none";
	if (document.getElementsByClassName("worm").length < normalAmountOfWorms) {
		for (i = 0; i < normalAmountOfWorms; i++) {
			j = document.createElement("img");
			j.src = "img/decor/worms/worm" + (i+1) + ".gif";
			j.id = "worm" + (i+1);
			j.className = "worm";
			document.getElementById("worms").appendChild(j);
		}
	}
}

function removeWorms() {
	var i, j, currentWorms;

	document.getElementById("decor").style.display = "block";
	currentWorms = document.getElementsByClassName("worm").length;

	for (i = 0; i < currentWorms; i++) {
		var j = document.getElementById("worm" + (i+1));
		document.getElementById("worms").removeChild(j);
	}

}