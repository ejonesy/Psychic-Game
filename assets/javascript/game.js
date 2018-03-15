var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 0;
var remainingGuesses = 10;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    var userGuess = event.key;
    console.log(userGuess);
    console.log(remainingGuesses);

    //document.write("User guess: " + userGuess);
    //document.write("Computer: " + computerGuess);

    if (userGuess === computerGuess) {
        remainingGuesses--;
        document.getElementById("myGuess").innerHTML = "My Guess: " + userGuess;
        document.getElementById("answer").innerHTML = "Answer: " + computerGuess;
        document.getElementById("guesses remaining").innerHTML = "Remaining guesses: " + remainingGuesses;
        document.getElementById("guesses").innerHTML = "Guesses: " + guesses++;
        document.getElementById("wins").innerHTML = "Wins: " + wins++;
        
        //console.log("userGuess === computerGuess");
        
    }
    else if (userGuess !== computerGuess) {
        remainingGuesses--;
        document.getElementById("myGuess").innerHTML = "My Guess: " + userGuess;
        document.getElementById("answer").innerHTML = "Answer: " + computerGuess;
        document.getElementById("guesses remaining").innerHTML = "Remaining guesses: " + remainingGuesses;
        document.getElementById("guesses").innerHTML = "Guesses: " + guesses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses++;
        
        //console.log("userGuess !== computerGuess");

    };
    
    if (remainingGuesses === 0) {
        document.getElementById("guesses remaining").innerHTML = "Game over, refresh page";

        //console.log("remainingGuesses === 0");
    }
   
}
   

    //document.write ("Wins: ", wins++);
    //document.write ("Losses: ", losses--);
    //document.write ("Guesses: ", guesses++);
    //document.write ("Remaining guesses: ", remainingGuesses--);

    //var winsElement = document.getElementById("wins").innerHTML
    //var lossesElement = document.getElementById("losses");
    //var guessesSoFar = document.getElementById("guesses");
    //var guessesRemaining = document.getElementById("guesses remaining")

