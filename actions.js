// Gets all drum buttons
var kickButton = document.getElementById("kickButton");
var rideButton = document.getElementById("rideButton");
var snareButton = document.getElementById("snareButton");
var tomButton = document.getElementById("tomButton");
var hihatButton = document.getElementById("hihatButton");

// Gets all audio elements
var kickSound = document.getElementById("kickSound");
var rideSound = document.getElementById("rideSound");
var snareSound = document.getElementById("snareSound");
var tomSound = document.getElementById("tomSound");
var hihatSound = document.getElementById("hihatSound");

// Function that plays a sound
function playSound(sound) {

    // Restarts the sound so it can play again immediately
    sound.currentTime = 0;

    // Plays the sound and reports any playback error
    sound.play().catch(function(error) {
        console.error("The sound could not be played:", sound.src, error);
    });
}

// Plays sounds when buttons are clicked
kickButton.addEventListener("click", function() {
    playSound(kickSound);
});

rideButton.addEventListener("click", function() {
    playSound(rideSound);
});

snareButton.addEventListener("click", function() {
    playSound(snareSound);
});

tomButton.addEventListener("click", function() {
    playSound(tomSound);
});

hihatButton.addEventListener("click", function() {
    playSound(hihatSound);
});

// Detects keyboard presses
document.addEventListener("keydown", function(event) {

    // Gets the pressed key in lowercase
    var key = event.key.toLowerCase();

    // Plays the corresponding sound
    if (key === "a") {
        playSound(kickSound);
    }

    else if (key === "s") {
        playSound(rideSound);
    }

    else if (key === "d") {
        playSound(snareSound);
    }

    else if (key === "f") {
        playSound(tomSound);
    }

    else if (key === "g") {
        playSound(hihatSound);
    }

});

// Checks whether an audio file fails to load
var sounds = [kickSound, rideSound, snareSound, tomSound, hihatSound];

sounds.forEach(function(sound) {

    sound.addEventListener("error", function() {
        console.error("Audio file not found or could not load:", sound.src);
    });

});