function getComputerChoice() {

    const choices = ["rock", "paper", "scissor"];

    const random = Math.floor(Math.random() * choices.length);
    console.log(choices[random]);
    return(choices[random]);
}

let games = 0
let wins = 0;
let losses = 0;
let ties = 0;

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
  
    if (playerSelection === computerSelection) {
      round.textContent = "it's a tie round!";
      ties++;
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        round.textContent = "you lost this round!";
        losses++;
      } else {
        round.textContent = "you won this round!";
        wins++;
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissor") {
        round.textContent = "you lost this round!";
        losses++;
      } else {
        round.textContent = "you won this round!";
        wins++;
      }
    } else if (playerSelection === "scissor") {
      if (computerSelection === "rock") {
        round.textContent = "you lost this round!";
        losses++;
      } else {
        round.textContent = "you won this round!";
        wins++;
      }
    }
    games++;
    score.textContent = `Human: ${wins}, Machine: ${losses}, Ties: ${ties}`;
    game();
  }

function game() {
    if (games >= 5) {
        if (wins > losses) {
            gameResult.textContent = "You won the game!";
          } else if (losses > wins) {
            gameResult.textContent = "You lost the game!";
          } else {
            gameResult.textContent = "It's a tie game!";
          }
        wins = 0;
        losses = 0;
        ties = 0;
        games = 0;


    }

  }

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const round = document.querySelector('#result');
const score = document.querySelector('#score');
const gameResult = document.querySelector('#gameResult');
const btn = document.querySelector('button');


rock.addEventListener('click' , function() {playRound('rock');});
paper.addEventListener('click' , function() {playRound('paper');});
scissor.addEventListener('click' , function() {playRound('scissor');});
button.addEventListener('click' , game);
