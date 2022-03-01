// function to generate random selection from array
function computerPlay(arr) {
  return arr[Math.floor(Math.random() * 3)];
}

// function to play single round if rock, paper, scissor
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "User Loose!";
  }
  if (playerSelection === "paper" && computerSelection === "paper") {
    return "Draw!";
  }
  if (playerSelection === "scissor" && computerSelection === "paper") {
    return "User Win!";
  }
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "Draw!";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "User Win!";
  }
  if (playerSelection === "scissor" && computerSelection === "rock") {
    return "User Loose!";
  }
  if (playerSelection === "rock" && computerSelection === "scissor") {
    return "User Win!";
  }
  if (playerSelection === "paper" && computerSelection === "scissor") {
    return "User Loose!";
  }
  if (playerSelection === "scissor" && computerSelection === "scissor") {
    return "Draw!";
  }
}
