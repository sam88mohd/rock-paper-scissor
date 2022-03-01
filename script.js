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

// function to play 5 round
function game() {
  const arr = ["rock", "paper", "scissor"];

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay(arr);
    let playerSelection = prompt(
      `(Game ${i + 1}) Enter your selection: `
    ).toLowerCase();
    if (arr.includes(playerSelection)) {
      let result = playRound(playerSelection, computerSelection);
      alert(result);
      if (result === "User Win!") {
        playerScore += 1;
      }
      if (result === "User Loose!") {
        computerScore += 1;
      } else {
        playerScore += 0;
      }
    } else {
      alert("Wrong Selection...");
      i -= 1;
    }
  }

  if (playerScore > computerScore) {
    return alert("Yay, You Win!");
  }
  if (playerScore === computerScore) {
    return alert("Boring Draw..zzzz");
  } else {
    return alert("Oh shoot, You Loose!");
  }
}

game();
