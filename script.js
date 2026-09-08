// Dark Mode
function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

// Light Mode
function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

// Change Background to Yellow
function yellowBackground() {
    document.body.style.backgroundColor = "yellow";
}

// Change Background to Light Blue
function blueBackground() {
    document.body.style.backgroundColor = "lightblue";
}

// Change Background to White
function whiteBackground() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

// Change heading to Red
function makeRed() {
    document.querySelector("h1").style.color = "red";
}

// Change heading to Blue
function makeBlue() {
    document.querySelector("h1").style.color = "blue";
}

// Change heading to Green
function makeGreen() {
    document.querySelector("h1").style.color = "green";
}

// Change heading colour randomly
function changeColor() {
    let colors = ["red", "blue", "green", "purple", "orange"];
    
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector("h1").style.color = randomColor;
}

// Change the message
function changeMessage() {
    document.getElementById("message").innerHTML =
        "Thank you for visiting our car rental platform!";
}








function changeColor() 
{ document.getElementById("home").style.color = "red"; 
} 


function makeRed() { document.getElementById("home").style.color = "red"; } function makeBlue() { document.getElementById("home").style.color = "blue"; } function makeGreen() { document.getElementById("home").style.color = "green"; } 



function yellowBackground() { document.body.style.backgroundColor = "yellow"; } function blueBackground() { document.body.style.backgroundColor = "lightblue"; } function whiteBackground() { document.body.style.backgroundColor = "white"; } 




function darkMode() { document.body.style.backgroundColor = "black"; document.body.style.color = "white"; } 

function lightMode() { document.body.style.backgroundColor = "white"; document.body.style.color = "black"; } 


function changeMessage() { document.getElementById("message").innerHTML = "Thank you for visiting our website!"; } 
