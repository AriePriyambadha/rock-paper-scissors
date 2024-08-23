const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) return "rock";
  if (choice === 1) return "paper";

  return "scissors";
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
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

  const result = document.querySelector("#result");
  const player = document.querySelector("#player");
  const computer = document.querySelector("#computer");
  const resultFinal = document.querySelector("#result-final");

  if (flag === 0) {
    result.textContent = `You tie! ${humanChoice} meets ${computerChoice}`;
  } else if (flag === -1) {
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else {
    result.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  }

  player.textContent = `Player score: ${humanScore}`;
  computer.textContent = `Computer score: ${computerScore}`;

  if (humanScore === 5) {
    resultFinal.textContent = `Congratulation you WON 🎉`;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  } else if (computerScore === 5) {
    resultFinal.textContent = `You Lose unfortunate 😭`;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

rock.addEventListener("click", () => {
  humanChoice = "rock";
  playRound(humanChoice);
});

paper.addEventListener("click", () => {
  humanChoice = "paper";
  playRound(humanChoice);
});

scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  playRound(humanChoice);
});
