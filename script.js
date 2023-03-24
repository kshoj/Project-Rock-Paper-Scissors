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

    if (playerSelection === computerSelection) {
        console.log('it\'s a tie round!');
    
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log('you lost this round!');
            return false;
        }else {
            console.log('you won this round!');
            return true;
        }
    } else if (playerSelection === 'paper')
        if (computerSelection === 'scissor') {
            console.log('you lost this round!');
            return false;
        }else {
            console.log('you won this round!');
            return true;
    } else if (playerSelection === 'scissor')
        if (computerSelection === 'rock') {
            console.log('you lost this round!');
            return false;
        }else {
            console.log('you won this round!');
            return true;
    }
}
function game() {
    wins = 0;
    losses = 0;
    for (i = 0; i < 5; i++) {
        const roundResult = playRound();
        if (roundResult === true) {
          wins++;
        } else if (roundResult === false) {
          losses++;
        }
      }
      

    if (wins > losses) {
        console.log ('you won the game!');
    } else if (losses > wins) {
        console.log ('you lost the game!');
    } else {
        console.log ('it\'s a tie game!');
    }
}