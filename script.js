// Prompt the user to enter a choice
// return the user and computer's choice
// Assign a winner
// Track the score


//VARIABLES
let humanScore = 0
let computerScore = 0
let humanChoice;
let computerChoice;
let winner;

//FUNCTIONS
//Randomly choose one: Rock, Paper, or Scissors and show choice
function getComputerChoice(){
    let randomNumber = Math.random() * (3 - 0) + 0;
    if (randomNumber < 1){
        computerChoice = "Rock";
    } else if (randomNumber >= 1 && randomNumber < 2){
        computerChoice = "Paper";
    } else if (randomNumber >= 2 && randomNumber < 3) {
        computerChoice = "Scissors";
    }
    console.log("Computer chose " + computerChoice)
    return computerChoice
}
// Prompt the user to randomly choose one: Rock, Paper, or Scissors and show choice
function getHumanChoice(){
    let randomLetter = prompt("Enter 'r' for rock, 'p' for paper, or 's' for scissors. Go!").toLowerCase()
    if (randomLetter == "r"){
        humanChoice = "Rock";
    } else if (randomLetter == "p"){
        humanChoice = "Paper";
    } else if (randomLetter == "s"){
        humanChoice = "Scissors";
    }
    console.log("You chose " + humanChoice)
    return humanChoice
}

//Show who the winner is in the console
function decideWinner(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a draw.");
        winner = null
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") 
        || (humanChoice === "Scissors" && computerChoice === "Paper")
        || (humanChoice === "Paper" && computerChoice === "Rock")){
        winner = "human";
        console.log("You win!");
    } else {
        winner = "computer";
        console.log("Computer wins!")
    }
    return winner;
}

//Play a single round
function playRound(){
    getHumanChoice()
    getComputerChoice()
    decideWinner(humanChoice, computerChoice)
    //Add a point to the winner's score
    if (winner === "computer"){
        computerScore++
    } else if (winner === "human"){
        humanScore++
    }

    console.log("Score: You = " + humanScore + ". Computer =" + computerScore)
    return computerScore, humanScore
}

function playBestOfFive(){
    while ((computerScore + humanScore) < 5){
        playRound();
    }
    if (humanScore > computerScore){
        console.log("Well done. Another victory for humanity.");
    } else {
        console.log("Better luck next time human.")
    }
}


//Play the game!
playBestOfFive()
