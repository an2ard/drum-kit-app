
// Gets all drum buttons from the HTML
var kickButton = document.getElementById("kickButton");
var rideButton = document.getElementById("rideButton");
var snareButton = document.getElementById("snareButton");
var tomButton = document.getElementById("tomButton");
var hihatButton = document.getElementById("hihatButton");

// Gets all audio elements from the HTML
var kickSound = document.getElementById("kickSound");
var rideSound = document.getElementById("rideSound");
var snareSound = document.getElementById("snareSound");
var tomSound = document.getElementById("tomSound");
var hihatSound = document.getElementById("hihatSound");

// Function to play the kick sound
function playKick() {
    kickSound.currentTime = 0;
    kickSound.play();
}

// Function to play the ride sound
function playRide() {
    rideSound.currentTime = 0;
    rideSound.play();
}

// Function to play the snare sound
function playSnare() {
    snareSound.currentTime = 0;
    snareSound.play();
}

// Function to play the tom sound
function playTom() {
    tomSound.currentTime = 0;
    tomSound.play();
}

// Function to play the hi-hat sound
function playHihat() {
    hihatSound.currentTime = 0;
    hihatSound.play();
}

// Plays the kick sound when its button is clicked
kickButton.addEventListener("click", playKick);

// Plays the ride sound when its button is clicked
rideButton.addEventListener("click", playRide);

// Plays the snare sound when its button is clicked
snareButton.addEventListener("click", playSnare);

// Plays the tom sound when its button is clicked
tomButton.addEventListener("click", playTom);

// Plays the hi-hat sound when its button is clicked
hihatButton.addEventListener("click", playHihat);

// Detects when a keyboard key is pressed
document.addEventListener("keydown", function(event) {

    // Gets the pressed key in lowercase
    var key = event.key.toLowerCase();

    // Plays the corresponding drum sound
    if (key === "a") {
        playKick();
    }

    else if (key === "s") {
        playRide();
    }

    else if (key === "d") {
        playSnare();
    }

    else if (key === "f") {
        playTom();
    }

    else if (key === "g") {
        playHihat();
    }

});
