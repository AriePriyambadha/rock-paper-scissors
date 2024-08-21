let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) return "rock";
  if (choice === 1) return "paper";

  return "scissors";
}

function getHumanChoice() {
  let choice = prompt("Your choice ? rock, paper, or scissors?");

  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  /*
   flag -1 = computer win
   flag 0 = tie
   flag 1 = human win
  */
  let flag;

  if (humanChoice === computerChoice) flag = 0;
  else if (humanChoice === "rock") {
    if (computerChoice === "paper") flag = -1;
    else flag = 1;
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") flag = 1;
    else flag = -1;
  } else {
    if (computerChoice === "rock") flag = -1;
    else flag = 1;
  }

  if (flag === 0) {
    console.log(`You tie! ${humanChoice} meets ${computerChoice}`);
  } else if (flag === -1) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore === computerScore) {
    console.log(
      `You tie !! Human Score ${humanScore} vs Computer Score ${computerScore}`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `You WON !! Human Score ${humanScore} vs Computer Score ${computerScore}`
    );
  } else {
    console.log(
      `You lose !! Human Score ${humanScore} vs Computer Score ${computerScore}`
    );
  }
}

playGame();
