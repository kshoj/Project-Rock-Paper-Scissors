function getComputerChoice() {

    const choices = ["Rock", "Paper", "Scissor"];

    const random = Math.floor(Math.random() * choices.length);
    computerSelection = choices[random];
    console.log(computerSelection);
}
