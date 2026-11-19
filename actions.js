
// Gets the kick button from the HTML
var kickButton = document.getElementById("kickButton");

// Gets the ride button from the HTML
var rideButton = document.getElementById("rideButton");

// Gets the kick audio element from the HTML
var kickSound = document.getElementById("kickSound");

// Gets the ride audio element from the HTML
var rideSound = document.getElementById("rideSound");

// Runs when the kick button is clicked
kickButton.addEventListener("click", function() {

    // Resets the kick sound to the beginning
    kickSound.currentTime = 0;

    // Plays the kick drum sound
    kickSound.play();

});

// Runs when the ride button is clicked
rideButton.addEventListener("click", function() {

    // Resets the ride sound to the beginning
    rideSound.currentTime = 0;

    // Plays the ride cymbal sound
    rideSound.play();

});
