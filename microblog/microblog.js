//I really shouldn't leave this a global but it makes testing faster.
var xmlDoc;

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
    var items, i, authorName, iconLink;
    var icon, content, author, dateLink, text, image, post;
    
    xmlDoc = xml.responseXML;
    //document.getElementById("demo").innerHTML = "retrieved xml file";

    authorName = xmlDoc.getElementsByTagName("author")[0].innerHTML;
    iconLink = xmlDoc.getElementsByTagName("image")[0].getElementsByTagName("url")[0].innerHTML;

    items = xmlDoc.getElementsByTagName("item");
    for (i = 0; i < items.length; i++) {
        icon = document.createElement("img");
        icon.className = "profilePic";
        icon.src = iconLink;
        
        content = document.createElement("div");
        content.className = "postContent";
      
        authorDate = document.createElement("div");
        authorDate.className = "authorDate";
        
        author = document.createElement("div");
        author.className = "author";
        author.innerHTML = authorName;
        
        dateLink = document.createElement("a");
        dateLink.href = "#" + (items.length -i -1).toString();
        dateLink.className = "postDate";
        dateLink.innerHTML = items[i].getElementsByTagName("pubDate")[0].innerHTML;
        
        authorDate.appendChild(author);
        authorDate.appendChild(dateLink);

        text = document.createElement("div");
        text.className = "postText";
        text.innerHTML = items[i].getElementsByTagName("title")[0].innerHTML;
        
        image = document.createElement("img");
        imageLink = items[i].getElementsByTagName("description")[0].innerHTML;
        if (imageLink.length > 0) {
          image.src = imageLink;
          image.className = "postImage";
        }

        post = document.createElement("div");
        post.className = "post";
        post.id = items.length -i -1;
        
        
        post.appendChild(icon);
        content.appendChild(authorDate);
        content.appendChild(text);
        if (imageLink.length > 0) {
          content.appendChild(image);
        }
        post.appendChild(content);
        document.body.appendChild(post);
    }
}