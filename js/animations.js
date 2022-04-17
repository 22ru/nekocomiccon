var x = 0;
var y = 0;
var i = 0;
var j = 0;

var bg;
var ti;
var sub;

var subs = [["Onii-chan daisuki!!"],
            ["Doordashers will be shot on sight."],
            ["My Melody did nothing wrong."],
            ["Woomy if you want to woomy."],
            ["I can't find my phone."],
            ["free meal for every hummybird"],
            ["Dump my body in the well and bury my soul in Azalea Town."],
            ["i dropped my phone in the toilet ;_;;;;;"],
            ["I'm going to marry my doll "],
            ["Results are in!! Fran hat wins!!!"],
            ['checkin email "helo this is ur bank u have no moni and youre a faget lmao" delete email account forever'],
            ["New day same Fran hat"],
            ["i want to hug a bunny"],
            ["Teezan hi"],
            ["even though halloween is over, fran hat is still accepting candy!"],
            ["Every day I don't have to do an integral is a blessing"],
            ["f*ck the open source patriarchy"],
            ["nekomimimodo"],
            ["Tfw u can't go to the bar with ur marimofriends"],
            ["Have you ever wanted to marry a vegetable mouse?"],
            ["USB doesn't exist. It's a construct of your mind."],
            ["Santa is NEVER COMING HOME"],
            ["Happy franniversary"],
            ["i installed windows 19 on my ipad"],
            ["the big bang theorem"],
            ["gimme dat"],
            ["sakuracon is only 5 days away!"],
            ["nap time goonai!"],
            ["i love dolls..."],
            ["HOW DID I LOSE ALL MY FLASH DRIVES"],
            ["i sneezsed"],
            ["the true power of meme..."],
            ["help i broke my computer"],
            ["hmu if u a doll"],
            ["meme was a mistake"],
            ["i cant go on... the bathroom is too far away,,,,"],
            ["send me cookies"],
            ["who is READY FOR LOVE LIVE CON!!!!"],
            ["meet me at starbucks in downtown seattle!"],
            ["tactical espionage hat"],
            ["I WANT TO BE A FURBY"],
            ["proud owner of $1"],
            ["I ate2015"],
            ["if i won the internet i would die"],
            ["Irc bullying ends life's End irc cyber bullying"],
            ["Fat n happy "],
            ["i want a naked man in a giant bear costume to knock on my door"],
            ["who is gonna karaoke burn my dread with me"],
            ["1 like = 1 prayer for Reagan"],
            ["Cute girl hours be cute if u up"],
            ["*1 hour before touhou panel* DOES ANYONE HAVE A LAPTOP????"],
            ["how long have i been 17"],
            ["ppoi ppoi ppoi ppoi ppoi ppoi ppoi ppoi ppoi"],
            ["LORD HUG A DUCK"],
            ["STOP IT"],
            ["come to my k-on panel at sakuracon please!!!"],
            ["im at eccc! where is everynyan?"],
            ["It's 4 am ask me anything"],
            ["i love dota!!!!!"],
            ["Who is going to karaoke before my body is dry with me at sakuracon??"],
            ["god bless iowa"],
            ["I voted for bieber"],
            ["0 retweets 1 like"],
            ["Sudden tamagotchi death syndrome"],
            ["flicky is the best game of 2015"],
            ["wish i was at church!"],
            ["franch toast"],
            ["i lost my keyboard???"],
            ["wheres my mommy..."],
            ["a yamane in the hand is worth 2 in the bush"],
            ["irashaimasen"]];


function startAnimations() {
    document.getElementById("animationButton").setAttribute("onClick","endAnimations()");
    document.getElementById("subtitles").style.display = "block";

    bg = setInterval(moveBackground, 40);
    ti = setInterval(vibrate, 100);
    sub = setInterval(changeSubs, 3000);
    
}
function endAnimations() {
    document.getElementById("animationButton").setAttribute("onClick","startAnimations()");
    document.getElementById("subtitles").style.display = "none";

    clearInterval(bg);
    clearInterval(ti);
    clearInterval(sub);
}

//rgb(223, 168, 200);
//rgb(228, 135, 181);
function moveBackground() {
    // if i was smart, i would have commented this disaster
    i = (i + 1) % 120;
    mult = 15; // higher number for larger loops, can never be 0
    x = Math.cos(i/30 * Math.PI) * mult;
    y = Math.sin(i/30 * Math.PI) * mult;

    document.getElementById("main").style.backgroundPositionX = x + "px";
    document.getElementById("main").style.backgroundPositionY = y + "px";

    //rgb(209, 0, 105) at x==mult
    // someday i will clean up this awful math i promise
    document.getElementById("main").style.backgroundColor = "rgb(" + String(Math.floor(255-x/mult*(255-228))) + ", " + String(Math.floor(255-x/mult*(255-135))) + ", " + String(Math.floor(255-x/mult*(255-181))) + ")";
}

function changeSubs() {
    if (j > subs.length - 1) j = 0;
    document.getElementById("subtitles").textContent = subs[j];
    j++;
}

function vibrate() {
    var t = document.getElementsByTagName("h1")[0];
    var rand = Math.floor(Math.random()*17);
    if (rand == 0) {
        t.innerText = "ハットのnekoコミコン";
    } else if (rand == 1) {
        t.style.fontFamily = "Arial";
    } else if (rand == 2) {
        t.innerText = "HAT の nekocomicコン";        
    } else if (rand == 3) {
        t.style.color = "#3F00D1";
    } else if (rand == 4) {
        t.innerText = "hat's nekoコミコン";
    } else if (rand == 5) {
        t.style.color = "#AA00D1";
    } else if (rand == 6) {
        t.innerText = "ハット's 猫コミコン";
    } else if (rand == 7) {
        t.innerText = "hat's 猫comiccon";
    } else if (rand == 8) {
        t.style.color = "#D100B0";
    } else if (rand == 9) {
        t.style.color = "#D10300";
    } else if (rand == 10) {
        t.style.fontFamily = "Monaco";
    } else if (rand == 11) {
        t.style.color = "#D16F00";
    } else if (rand == 12) {
        t.style.fontFamily = "Times New Roman";
    } else if (rand == 13) {
        t.style.fontFamily = "Copperplate";
    } else if (rand == 14) {
        t.style.fontFamily = "Courier New";
    } else if (rand == 15) {
        t.style.color = "#FFFFFF";
    } else if (rand == 16) {
        t.style.color = "#D10069";
    }
    t.style.marginTop = 21 + rand/2 + "px";
    t.style.marginLeft = rand*2 + "px";
}

