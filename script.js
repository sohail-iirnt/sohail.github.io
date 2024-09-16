var audio = new Audio('https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/sentmessage.mp3?v=1682019735854');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919112050119'> <div class='socialItem' id='call'><img class='socialItemI' src='https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/phone.svg?v=1682020057470'/><label class='number'>9112050119</label></div> </a> <a href='mailto:sohailkachhi88@gmail.com'> <div class='socialItem'><img class='socialItemI' src='https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/gmail.svg?v=1682020025233' alt=''></div> </a> <a target='_blank' href='https://github.com/sohail-iirnt'> <div class='socialItem'><img class='socialItemI' src='https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/github.svg?v=1682020021780' alt=''></div> </a> <a target='_blank' href='https://wa.me/919112050119'> <div class='socialItem'><img class='socialItemI' src='https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/whatsapp.svg?v=1682020077115' alt=''></div> </a> <a target='_blank' href='https://t.me/919112050119'> <div class='socialItem'><img class='socialItemI' src='https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/telegram.svg?v=1682020072429' alt=''></div> </a> <a target='_blank' href='https://instagram.com/sohail_memon_120'> <div class='socialItem'><img class='socialItemI' src='https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/instagram.svg?v=1682020043439' alt=''> </div> </a> <a href='https://www.linkedin.com/in/sohailkachhi/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/linkedin.svg?v=1682020047751' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/pdf.png?v=1682020053103'><label>Sohail Resume.pdf</label></div><a href='https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/RESUME%20SOHAIL%20UPDATED.pdf?v=1682019722111' download='RESUME SOHAIL UPDATED.pdf'><img class='download' src='https://cdn.glitch.global/4a26abf5-85f6-4411-8823-84d97ebe6455/downloadIcon.svg?v=1682019919088'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d352.8563114292571!2d75.911269001112!3d21.0166033444009!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAxJzAwLjEiTiA3NcKwNTQnNDEuMyJF!5e0!3m2!1sen!2sin!4v1682327055718!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>Sohail Kachhi, 'NG4'<br>Main ROad Near Nagarpalika<br>Varangaon, Maharashtra, INDIA - PIN-425305</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Sohail Hamid Kachhi</a>.</span><br><br>I am a Computer Science Engineer <span class='bold'>B.TECH 2022 Graduated 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I have completed my B.Tech degree in Electrical Engineering.<br><br>As IT Enthusiastic I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>Kotlin<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Arch Linux</span> as daily driver on my HP Pavilion 15-ec0xxx<br>OS:Arch Linux<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am Currently pusuing B.Tech degree in Computer Science Engineering from TKIET Kolhapur<br>Passing Year : 2023<br><br>I have completed my Diploma from Government Polytechnic Karad<br>Passing Year:2020<br>Result:86.06%<br><br>I have completed my Secondary school from local school known as SWV<br>Passing Year:2016");
            break;
			
        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/sohail_memon_120/'><span class='bold'>Er. Sohail Kachhi</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
