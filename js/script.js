//VARIABLES
const gameStartButton = document.createElement("button")
const startGameScreen = document.querySelector("#startGameScreen")
const inGameScreen = document.querySelector(".human-choices")
const humanChoiceButton = document.querySelectorAll(".human-choices-button");
const gameOverScreen = document.querySelector("#gameOverScreen")
const overallWinner = document.querySelector("#whoWon")

let humanScore = 0
let computerScore = 0
let clickCount = 0
let humanChoice;
let computerChoice;
let winner;


//===FUNCTIONS===//

function loadGameStartState() {
    gameStartButton.setAttribute("style",
        "color: white; background-color: black; width: 200px; height: 100px; border-radius: 20px");
    gameStartButton.textContent = "Play"
    startGameScreen.appendChild(gameStartButton)
}

function playRound(event) {
    getHumanChoice(event);
    getComputerChoice()
    decideWinner(humanChoice, computerChoice)
    console.log({computerScore, humanScore});

    clickCount++

    if (clickCount === 5){
        gameOver()
    }
}

function startGame(){
    startGameScreen.setAttribute("style", "display: none")
    gameOverScreen.setAttribute("style", "display: none")
    inGameScreen.setAttribute("style", "display: flex")
}

function getHumanChoice(event) {
    humanChoice = event.currentTarget.id.charAt(0).toUpperCase() + event.currentTarget.id.slice(1);
    console.log("You chose " + humanChoice);
    return humanChoice
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        computerChoice = "Rock";
    } else if (randomNumber === 1){
        computerChoice = "Paper";
    } else if (randomNumber === 2) {
        computerChoice = "Scissors";
    }
    console.log("Computer chose " + computerChoice)
    return computerChoice
}

function decideWinner(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a draw.");
        winner = null
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") 
        || (humanChoice === "Scissors" && computerChoice === "Paper")
        || (humanChoice === "Paper" && computerChoice === "Rock")){
        winner = "human";
        console.log("You win!");
        humanScore++
    } else {
        winner = "computer";
        console.log("Computer wins!")
        computerScore++
    }
    return {winner, humanScore, computerScore}
}

function gameOver(){
    startGameScreen.setAttribute("style", "display: none")
    inGameScreen.setAttribute("style", "display: none")
    gameOverScreen.setAttribute("style", "display:flex")

    function findOverallWinner() {
        if(humanScore === computerScore) {
            overallWinner.textContent = "It's a draw"
        } else if (humanScore > computerScore) {
            overallWinner.textContent = "You win!"
        } else if (computerScore > humanScore) {
            overallWinner.textContent = "Loser!"
        } else {
            overallWinner.textContent = "Something went wrong."
        }
    }

    findOverallWinner()

    humanScore = 0;
    computerScore = 0;
    clickCount = 0
}


//===DOM MANIPULATION===//

document.addEventListener("DOMContentLoaded", loadGameStartState)
gameStartButton.addEventListener("click", startGame)

humanChoiceButton.forEach(button => {
    button.addEventListener("click", playRound);
})