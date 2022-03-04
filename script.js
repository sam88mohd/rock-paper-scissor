// choice array
const array = ["rock", "paper", "scissor"];

// variables
let round = 1;
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// function to generate random selection from array
function computerPlay() {
  return Math.floor(Math.random() * 3);
}

// function to play single round
function playRound(playerSelection, computerSelection) {
  if (array.indexOf(playerSelection) === 0 && computerSelection === 2) {
    return "User Win!";
  } else if (array.indexOf(playerSelection) === 2 && computerSelection === 0) {
    return "Computer Win!";
  } else if (array.indexOf(playerSelection) > computerSelection) {
    return "User Win!";
  } else if (array.indexOf(playerSelection) === computerSelection) {
    return "Draw";
  } else {
    return "Computer Win!";
  }
}

// show who win
function whoWin(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return alert("You win");
  } else {
    return alert("You loose");
  }
}

// query element
const btnContainer = document.querySelector(".button-div");
const resultContainer = document.querySelector("#result");
const playerScoreElement = document.querySelector("#player-score span");
const computerScoreElement = document.querySelector("#computer-score span");
const roundElement = document.querySelector("#round span");

// attached event listener to button
btnContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    if (round < 5) {
      const playerSelection = e.target.dataset.value;
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      resultContainer.textContent = result;
      switch (result) {
        case "User Win!":
          playerScore++;
          break;
        case "Computer Win!":
          computerScore++;
          break;
        default:
          drawScore++;
      }
      round++;
      playerScoreElement.textContent = playerScore;
      computerScoreElement.textContent = computerScore;
      roundElement.textContent = round;
    } else {
      whoWin(playerScore, computerScore);
    }
  }
});
