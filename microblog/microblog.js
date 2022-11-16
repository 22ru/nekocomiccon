// Config
var DisplaySubscribe = 1;
var DisplayLatestPosts = 0;
var RSSLink = "microblog.xml";
var DisplayLikes = 1;

// stolen shamelessly from w3schools
function retrieveXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      buildPage(this);
    }
  };
  xhttp.open("GET", RSSLink, true);
  xhttp.send();
}

function buildPage(xml) {
  var items, i, j, authorName, username, iconLink, header, user, bio;
  var icon, content, author, dateLink, text, image, post, imageLink;
  var postsDisplayed;
  var xmlDoc;
    
  xmlDoc = xml.responseXML;

  authorName = xmlDoc.getElementsByTagName("webMaster")[0].innerHTML;
  username = xmlDoc.getElementsByTagName("generator")[0].innerHTML;
  iconLink = xmlDoc.getElementsByTagName("image")[0].getElementsByTagName("url")[0].innerHTML;
  rootLink = xmlDoc.getElementsByTagName("link")[0].innerHTML;
  bioText = xmlDoc.getElementsByTagName("description")[0].innerHTML;
  
  container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);
    
  loadHeader(xmlDoc, authorName, username, iconLink, rootLink, bioText);
    
  if (DisplaySubscribe) loadSubscribe(RSSLink);
    
  items = xmlDoc.getElementsByTagName("item");

  // Check anchor
  var anchor = window.location.hash.replace("#", '');

  // no anchor or invalid anchor, build feed
  if (anchor == "" || isNaN(anchor)) {
    if (DisplayLatestPosts > 0) { 
      postsDisplayed = DisplayLatestPosts;
    } else {
      postsDisplayed = items.length;
    }
    for (i = 0; i < postsDisplayed; i++) {
      loadSingle(items[i], authorName, username, iconLink, rootLink);
    }
  // load single post
  } else {
    for (i = 0; i < items.length; i++) {
      if (anchor == items[i].getElementsByTagName("guid")[0].innerHTML) {
        loadSingle(items[i], authorName, username, iconLink, rootLink);
        return;
      }
    }
  }
}

function loadHeader(xmlDoc, authorName, username, iconLink, rootLink, bioText) {
  header = document.createElement("div");
  header.id = "header";
  authorLink = document.createElement("a");
  authorLink.href = rootLink;
  icon = document.createElement("img");
  icon.className = "profilePic";
  icon.src = iconLink;
  authorLink.appendChild(icon);
  author = document.createElement("h1");
  author.id = "name";
  author.innerHTML = authorName;
  user = document.createElement("p");
  user.id = "username";
  user.innerHTML = username;
  bio = document.createElement("p");
  bio.id = "bio";
  bio.innerHTML = bioText;
    
  header.appendChild(authorLink);
  header.appendChild(author);
  header.appendChild(user);
  header.appendChild(bio);
    
  document.getElementById("container").appendChild(header);
}

function loadSubscribe(RSSLink) {
  var subLink = document.createElement("a");
  subLink.href = RSSLink;
  var subButton = document.createElement("button");
  subLink.innerHTML = "Subscribe";
  subLink.className = "subscribeButton";
  subButton.appendChild(subLink);
  document.getElementById("container").appendChild(subLink);
}

function loadSingle(rssItem, authorName, username, iconLink, rootLink) {
  post = document.createElement("div");
  post.className = "post";
  post.id = rssItem.getElementsByTagName("guid")[0].innerHTML;
  
  authorLink = document.createElement("a");
  authorLink.href = rootLink;
  icon = document.createElement("img");
  icon.className = "profilePic";
  icon.src = iconLink;
  authorLink.appendChild(icon);
  post.appendChild(authorLink);
  
  content = document.createElement("div");
  content.className = "postContent";
  
  authorDate = document.createElement("div");
  authorDate.className = "authorDate";
  
  author = document.createElement("div");
  author.className = "author";
  author.innerHTML = "<span class='authorName'>" + authorName + "</span>";
  // Only add a space if there is something in front of it
  if (authorName.length > 0) author.innerHTML += " ";
  author.innerHTML += "<span class='username'>" + username + "</span>";
  
  dateLink = document.createElement("a");
  dateLink.href = "#" + rssItem.getElementsByTagName("guid")[0].innerHTML;
  dateLink.className = "postDate";
  dateLink.innerHTML = rssItem.getElementsByTagName("pubDate")[0].innerHTML;
  dateLink.setAttribute("onclick","document.body.innerHTML = ''; retrieveXML();");
  
  authorDate.appendChild(author);
  authorDate.appendChild(dateLink);
  content.appendChild(authorDate);

  text = document.createElement("div");
  text.className = "postText";
  text.innerHTML = rssItem.getElementsByTagName("title")[0].innerHTML;
  
  imageLink = rssItem.getElementsByTagName("description")[0].innerHTML;
  // Store the number of images that may exist before the post images are appended
  // so that we don't add the postImage class to them
  imagesPreCount = content.getElementsByTagName("img").length;
  content.appendChild(text);
  if (imageLink.length > 0) {
    content.innerHTML += imageLink;
    var images = content.getElementsByTagName("img");
    for (j = imagesPreCount; j < images.length; j++) {
      images[j].className = "postImage";
    }
  }
  
  post.appendChild(content);
  document.getElementById("container").appendChild(post);
}