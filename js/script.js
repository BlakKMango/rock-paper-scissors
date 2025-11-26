//VARIABLES
const startButton = document.querySelector("#start-button")
const humanChoiceButton = document.querySelectorAll(".human-choices-button");
const overallWinner = document.querySelector("#who-won")
const replayButton = document.querySelector("#replay-button");

const gamestate = {
    humanScore: 0,
    computerScore: 0,
    clickCount: 0,
    Leader: "Hard to say"
}

const screens = {
    start: document.querySelector("#start-game-screen"),
    choice: document.querySelector("#human-choices"),
    gameOver: document.querySelector("#game-over-screen"),
    results: document.querySelector("#result-screen")
};

//===FUNCTIONS===//

function showScreen(name) {
    Object.values(screens).forEach(screen => {
        screen.style.display = "none"
    })

    screens[name].style.display = "flex";
}

function loadGameStartState() {
    showScreen("start")
}

function startGame(){
    showScreen("choice")
}

function showResultsScreen() {

}

function playRound(event) {
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();
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

    showScreen("results")
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
    showScreen("gameOver")
    findOverallWinner()

    gamestate.humanScore = 0;
    gamestate.computerScore = 0;
    gamestate.clickCount = 0;
}

//===DOM MANIPULATION===//

document.addEventListener("DOMContentLoaded", loadGameStartState)

startButton.addEventListener("click", startGame);

humanChoiceButton.forEach(button => {
    button.addEventListener("click", playRound);
})

replayButton.addEventListener("click", loadGameStartState)