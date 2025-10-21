// Pseudo Code

// 1. User is given instructions on how to play the game. 
// 2. User inputs one of the following options: Rock, Paper, or Scissors
// 3. The computer randomly generates one of the following options: Rock, Paper, or Scissors.
// 4. Rock > Scissors > Paper > Rock
// 5. Announce the winner.


//Prompt the user to enter their Choice
function getHumanChoice() {
    let randomLetter = prompt("Enter 'r' for rock, 'p' for paper, or 's' for scissors. Go!");
    let humChoice;

    if (randomLetter.toLowerCase() == "r") {
        humChoice = "Rock"
    } else if (randomLetter.toLowerCase() == "p") {
        humChoice = "Paper"
    } else if (randomLetter.toLowerCase() == "s") {
        humChoice = "Scissors";
    } else humChoice = "Hmm, I don't recognise that choice";

    return humChoice;
}


console.log(getHumanChoice())

// Get a random number between 1 and 3.
// Convert the number into rock, paper, or scissors.
function getComputerChoice(){
    function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
    }

    let randomNumber = getRandomNumber(0, 3);
    let compChoice;

    if (randomNumber < 1) {
        compChoice = "Rock";
    } else if (randomNumber >= 1 && randomNumber < 2) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissors";
    }
    
    return compChoice; 
}

console.log(getComputerChoice())

