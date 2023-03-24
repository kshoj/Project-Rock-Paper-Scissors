function getComputerChoice() {

    const choices = ["rock", "paper", "scissor"];

    const random = Math.floor(Math.random() * choices.length);
    console.log(choices[random]);
    return(choices[random]);
}

function playRound() {

    let playerSelection = prompt('What is your weapon of choice?');
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        console.log('it\'s a tie!');
    
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('you lost!');
        }else {
            console.log('you won!');
        }
    } else if (playerSelection =='paper')
    if (computerSelection == 'scissor') {
        console.log('you lost!');
    }else {
        console.log('you won!');
    } else if (playerSelection =='scissor')
    if (computerSelection == 'rock') {
        console.log('you lost!');
    }else {
        console.log('you won!');
    }
}
