const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

let userScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerChoice) {
    let result = "";
    let computerSelection = getComputerChoice();
    let playerSelection = playerChoice;
    

    if (playerSelection == "rock" && computerSelection == "rock") {
        result = "Tie, try again";
    }else if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You lost!";
    }else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You won!";
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You won!";
    }else if (playerSelection == "paper" && computerSelection == "paper") {
        result = "Tie, try again!";
    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You lost!";
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You lost!";
    }else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You won!";
    }else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result = "Tie, try again!";
    }
    
    console.log("Player Selection: " + playerSelection);
    console.log("Computer Selection: " + computerSelection);
    game(result);
}

function game(result) {
    
    const resultclass = document.querySelector(".results");
    const scoreclass = document.querySelector(".score");
    

    resultclass.appendChild(document.createTextNode(result));
    resultclass.appendChild(document.createElement("br"));
    round++;
    if (result === "You won!") {
        userScore++;
    }else if (result === "You lost!") {
        computerScore++;
    }

    scoreclass.appendChild(document.createTextNode('Round ' + round + ': ' + 'Your Score: ' + userScore + '  Computer Score: ' + computerScore));
    scoreclass.appendChild(document.createElement("br"));
    console.log("Round: " +round);
    console.log("User Score: " + userScore);
    console.log("Computer Score: " + computerScore);
    if (round === 5) {
        endGame();
    }   
}

function endGame() {
    let finalResult;

    if (userScore > computerScore) {
        finalResult = "You win the game!";
    }else if (userScore < computerScore) {
        finalResult = "You lose the game!";
    }else {
        finalResult = "You tied the game!";
    }
    const winnerclass = document.querySelector(".winner");
    winnerclass.appendChild(document.createTextNode('Game Over! ' + finalResult));
    winnerclass.appendChild(document.createElement("br"));
    winnerclass.appendChild(document.createTextNode('Your score: ' + userScore));
    winnerclass.appendChild(document.createElement("br"));
    winnerclass.appendChild(document.createTextNode('Computer score: ' + computerScore));
}


