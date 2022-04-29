var x = 0;
var y = 0;
var i = 0;
var j = 0;

var bg;
var ti;
var sub;


// boy i wish i knew how to put this in another file
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
            ["Bought a ps4 today! I'm so excited to find out what msgv is all about with you guys!! Chicken hat!!!! XD"],
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
            ["uh oh was i the only one???"],
            ["They're after me!!"],
            ["V has come to"],
            ["It's made out of babies!!!"],
            ["making eggfriends!!!"],
            ["i loooooooooooooove reshiram!"],
            ["I want to be that cool guy in a leather jacket"],
            ["panic! at the dollhaus"],
            ["I failed Spanish please help"],
            ["Cute girl hours be cute if u up"],
            ["bye nerds~"],
            ["I DIDNT GO TO ROBOT SCHOOL FOR NOTHING!!!"],
            ["Who is going to karaoke kimi no kioku with me at sakuracon??"],
            ["where did i put my pencil..."],
            ["ISO part time work at a CRT store"],
            ["mama mia..."],
            ["It's 3 pm and I have already joined a fraternity"],
            ["dr fran hat professor of reagan studies"],
            ["Ask my Mom anything!!"],
            ["Fran hat is 89 years old"],
            ["thank you!!!!!"],
            ["SHOULD I COSPLAY HIGH NOON??"],
            ["I will not rest until dolls have equal representation in our media"],
            ["Just found out about candy and honestly I'm impressed"],
            ["I regret to announce that I have been banned from Grocery Outlet"],
            ["I want to go I want to go to the zooooo"],
            ['When the bus driver said "welcome aboard", I really felt that.'],
            ["dm me if you know about texas"],
            ["Hello!! I'm about to start my stream in a few minutes!! You can watch by sitting on my couch and watching me play!!!"],
            ["Anyone want to buy a copy of tron bonne? $5 can meet at eccc"],
            ["I want to overdose on heroin at the chaz"],
            ["Can't wait to cosplay sophie hatter in 5 years when I turn 83"],
            ["I will solve the opioid crisis"],
            ["Awaken... pneumonia !!!"],
            ["I too want to meltdown in shibuya"],
            ["Why do tide pods look and smell so delicious It's not fair"],
            ["My furby graduated with honors"],
            ["I wish I was a cowboy"],
            ["I want to lose my wallet in Yokohama"],
            ["Fran hat did nothing wrong"],
            ["I did not lie in April"],
            ["I fear the day we run out of Texas Pete"],
            ["Cabbages #ThingsRichPeopleBuy"],
            ["It's 2:47 AM! My time to shine!"],
            ["Thinkin bout that spicy water"],
            ["NO I can't spare a square!!"],
            ["Just wait until live pd pulls me over and finds my doll collection"],
            ["I'm fresh out of smochi"],
            ["Thinkin bout dolls again..!!!"],
            ["I just patented eggs and I don't know how you fooligans are going to deal with it"],
            ["Ok gamer"],
            ["Here's a thread of all the anime characters I want to room with at sakuracon: (1/??)"],
            ["Meet me at the combination kfc Pizza Hut Taco Bell"],
            ["i am so meow right now"],
            ["What if we kissed... at gay conversion therapy?"],
            ["If anyone comes to my house and says a bad thing about my dolls, they will receive the doll curse"],
            ["where can i buy a doll sized beryllium hemisphere?"],
            ["I just want to look at anime boys with gay earrings is that too much to ask"],
            ["I BOUGHT THE NEW JUSTIN BIEBER CD"],
            ["We need more blankets!!!!"],
            ["Is it Christmas yet"],
            ["irashaimasen"]];
//[""],

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
//rgb(209, 0, 105)
function moveBackground() {
    // if i was smart, i would have commented this disaster
    i = (i + 1) % 120;

    amp = 20; // higher number for larger loops, please dont set to 0
    x = Math.cos(i/30 * Math.PI);
    y = Math.sin(i/30 * Math.PI);

    document.getElementById("main").style.backgroundPositionX = x * amp + "px";
    document.getElementById("main").style.backgroundPositionY = y * amp + "px";

    //rgb(228, 135, 181) at x==amp
    // someday i will clean up this awful math i promise
    document.getElementById("main").style.backgroundColor = "rgb(" + String(Math.floor(255-x*(255-228))) + ", " + String(Math.floor(255-x*(255-135))) + ", " + String(Math.floor(255-x*(255-181))) + ")";
}

function changeSubs() {
    //if (j > subs.length - 1) j = 0;
    //document.getElementById("subtitles").textContent = subs[j];
    //j++;

    var rand = Math.floor(Math.random()*subs.length);
    document.getElementById("subtitles").textContent = subs[rand];
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

