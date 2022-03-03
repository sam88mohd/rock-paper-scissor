// function to generate random selection from array
function computerPlay() {
  const array = ["rock", "paper", "scissor"];
  return array[Math.floor(Math.random() * 3)];
}

// function to play single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return console.log("User Loose!");
  }
  if (playerSelection === "paper" && computerSelection === "paper") {
    return console.log("Draw!");
  }
  if (playerSelection === "scissor" && computerSelection === "paper") {
    return console.log("User Win!");
  }
  if (playerSelection === "rock" && computerSelection === "rock") {
    return console.log("Draw!");
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return console.log("User Win!");
  }
  if (playerSelection === "scissor" && computerSelection === "rock") {
    return console.log("User Loose!");
  }
  if (playerSelection === "rock" && computerSelection === "scissor") {
    return console.log("User Win!");
  }
  if (playerSelection === "paper" && computerSelection === "scissor") {
    return console.log("User Loose!");
  }
  if (playerSelection === "scissor" && computerSelection === "scissor") {
    return console.log("Draw!");
  }
}

function game() {}
