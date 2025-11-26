//VARIABLES
const gameStartButton = document.createElement("button")
const startGameScreen = document.querySelector("#start-game-screen")
const inGameScreen = document.querySelector("#human-choices")
const humanChoiceButton = document.querySelectorAll(".human-choices-button");
const gameOverScreen = document.querySelector("#game-over-screen")
const overallWinner = document.querySelector("#who-won")
const resultScreen = document.querySelector("#result-screen")
const replayButton = document.querySelector("#replay-button");

const gamestate = {
    humanScore: 0,
    computerScore: 0,
    clickCount: 0,
    Leader: "Hard to say"
}


//===FUNCTIONS===//

function loadGameStartState() {
    gameStartButton.setAttribute("style",
        "color: white; background-color: black; width: 200px; height: 100px; border-radius: 20px");
    gameStartButton.textContent = "Play"
    startGameScreen.appendChild(gameStartButton)
    startGameScreen.style.display = "flex";
    inGameScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    resultScreen.style.display = "none";
}

function startGame(){
    startGameScreen.setAttribute("style", "display: none")
    gameOverScreen.setAttribute("style", "display: none")
    inGameScreen.setAttribute("style", "display: flex")
}

function playRound(event) {
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice()
    decideWinner(humanChoice, computerChoice)
    console.log(gamestate.computerScore);
    console.log(gamestate.humanScore);

    gamestate.clickCount++

    if (gamestate.clickCount === 5){
        gameOver()
    }
}

function getHumanChoice(event) {
    let humanChoice;
    humanChoice = event.currentTarget.id.charAt(0).toUpperCase() + event.currentTarget.id.slice(1);
    console.log("You chose " + humanChoice);
    return humanChoice
}

function getComputerChoice(){
    let computerChoice;
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
    let winner;
    if (humanChoice === computerChoice){
        console.log("It's a draw.");
        winner = null
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") 
        || (humanChoice === "Scissors" && computerChoice === "Paper")
        || (humanChoice === "Paper" && computerChoice === "Rock")){
        winner = "human";
        console.log("You win!");
        gamestate.humanScore++
    } else {
        winner = "computer";
        console.log("Computer wins!")
        gamestate.computerScore++
    }
    return {winner, humanScore:gamestate.humanScore, computerScore:gamestate.computerScore}
}

function findOverallWinner() {
    if(gamestate.humanScore === gamestate.computerScore) {
        overallWinner.textContent = "It's a draw"
    } else if (gamestate.humanScore > gamestate.computerScore) {
        overallWinner.textContent = "You win!"
    } else if (gamestate.computerScore > gamestate.humanScore) {
        overallWinner.textContent = "Loser!"
    } else {
        overallWinner.textContent = "Something went wrong."
    }
}

function gameOver(){
    startGameScreen.setAttribute("style", "display: none")
    inGameScreen.setAttribute("style", "display: none")
    gameOverScreen.setAttribute("style", "display:flex")

    findOverallWinner()

    gamestate.humanScore = 0;
    gamestate.computerScore = 0;
    gamestate.clickCount = 0;
}

//===DOM MANIPULATION===//

document.addEventListener("DOMContentLoaded", loadGameStartState)

gameStartButton.addEventListener("click", startGame)

humanChoiceButton.forEach(button => {
    button.addEventListener("click", playRound);
})

replayButton.addEventListener("click", loadGameStartState)