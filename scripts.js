function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound() {
    let result = "";
    let computerSelection = getComputerChoice();
    let playerSelection = prompt();
    

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
    console.log(result);
    console.log(playerSelection, computerSelection);
    return result;
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound()
}


console.log(game());
