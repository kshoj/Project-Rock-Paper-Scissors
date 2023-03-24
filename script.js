function getComputerChoice() {

    const choices = ["Rock", "Paper", "Scissor"];

    const random = Math.floor(Math.random() * choices.length);
    computerSelection = choices[random];
    console.log(computerSelection);
}

let playerSelection = prompt('What is your weapon of choice?');
let computerSelection = getComputerChoice();

