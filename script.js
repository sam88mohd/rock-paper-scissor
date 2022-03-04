// choice array
const array = ["rock", "paper", "scissor"];

// variables
let round = 1;
let playerScored = 0;
let computerScored = 0;
let drawScored = 0;

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
    return "Congratulations, You win!";
  } else if (playerScore < computerScore) {
    return "Oppsss, You loose!";
  } else {
    return "Bore Draw!";
  }
}

// query element
const btnContainer = document.querySelector(".button-div");
const resultContainer = document.querySelector("#result");
const playerScoreElement = document.querySelector("#player-score span");
const computerScoreElement = document.querySelector("#computer-score span");
const roundElement = document.querySelector("#round span");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal-text");
const playAgainBtn = modalText.nextElementSibling;

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
          playerScored++;
          break;
        case "Computer Win!":
          computerScored++;
          break;
        default:
          drawScored++;
      }
      round++;
      playerScoreElement.textContent = playerScored;
      computerScoreElement.textContent = computerScored;
      roundElement.textContent = round;
    } else {
      const winner = whoWin(playerScored, computerScored);
      modal.classList.add("active");
      modalText.textContent = winner;
    }
  }
});

// add event listener to modal button
playAgainBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  window.location.reload();
});
