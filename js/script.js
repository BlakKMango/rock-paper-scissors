// Prompt the user to enter a choice
// return the user and computer's choice
// Assign a winner
// Track the score


//VARIABLES
const gameStartButton = document.createElement("button")
const startGameScreen = document.querySelector("#startGameScreen")
const inGameScreen = document.querySelector(".human-choices")

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
function getHumanChoice(event) {
    const humanChoice = event.currentTarget.id.charAt(0).toUpperCase() + event.currentTarget.id.slice(1);
    console.log("You chose " + humanChoice);
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
    startGame()
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

function loadGameStartState() {
    gameStartButton.setAttribute("style",
        "color: white; background-color: black; width: 200px; height: 100px; border-radius: 20px");
    gameStartButton.textContent = "Play"
    startGameScreen.appendChild(gameStartButton)
}

function startGame(){
    startGameScreen.setAttribute("style", "display: none")
    inGameScreen.setAttribute("style", "display: flex")
}






const humanSelection = document.querySelectorAll(".human-choices-button");
humanSelection.forEach(button => {
    button.addEventListener("click", getHumanChoice);
})



//===START===//

//On page load
document.addEventListener("DOMContentLoaded", loadGameStartState)
gameStartButton.addEventListener("click", playRound)
