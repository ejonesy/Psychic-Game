var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 0;
var remainingGuesses = 10;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var userGuess = event.key;

    return("User guess: " + userGuess);
    return("Computer: " + computerGuess);

    if (userGuess === computerGuess) {
        return("Remaining guesses: ", remainingGuesses--);
    }
    else if (userGuess !== computerGuess) {
        return("Remaining guesses: ", remainingGuesses--);

    } else if (remainingGuesses = 0) {
        return("Game over!");
    }
   
}
   

    return ("Wins: ", wins++);
    return ("Losses: ", losses--);
    return ("Guesses: ", guesses++);
    return ("Remaining guesses: ", remainingGuesses--);

    var winsElement = document.getElementById("wins");
    var lossesElement = document.getElementById("losses");
    var guessesSoFar = document.getElementById("guesses");
    var guessesRemaining = document.getElementById("guesses remaining")

