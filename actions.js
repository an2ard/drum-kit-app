
// Gets the kick button from the HTML
var kickButton = document.getElementById("kickButton");

// Gets the kick audio element from the HTML
var kickSound = document.getElementById("kickSound");

// Runs when the kick button is clicked
kickButton.addEventListener("click", function() {

    // Resets the audio to the beginning
    kickSound.currentTime = 0;

    // Plays the kick drum sound
    kickSound.play();

});
