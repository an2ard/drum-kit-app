
// Gets the kick button from the HTML
var kickButton = document.getElementById("kickButton");

// Gets the ride button from the HTML
var rideButton = document.getElementById("rideButton");

// Gets the kick audio element from the HTML
var kickSound = document.getElementById("kickSound");

// Gets the ride audio element from the HTML
var rideSound = document.getElementById("rideSound");

// Function to play the kick sound
function playKick() {

    // Resets the kick sound to the beginning
    kickSound.currentTime = 0;

    // Plays the kick drum sound
    kickSound.play();
}

// Function to play the ride sound
function playRide() {

    // Resets the ride sound to the beginning
    rideSound.currentTime = 0;

    // Plays the ride cymbal sound
    rideSound.play();
}

// Runs when the kick button is clicked
kickButton.addEventListener("click", function() {
    playKick();
});

// Runs when the ride button is clicked
rideButton.addEventListener("click", function() {
    playRide();
});

// Detects when a keyboard key is pressed
document.addEventListener("keydown", function(event) {

    // Plays the kick sound when the A key is pressed
    if (event.key.toLowerCase() === "a") {
        playKick();
    }

    // Plays the ride sound when the S key is pressed
    if (event.key.toLowerCase() === "s") {
        playRide();
    }

});
