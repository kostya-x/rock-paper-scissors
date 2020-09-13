const $userScore = document.querySelector(".user-score");
const $compScore = document.querySelector(".computer-score");
const $resultText = document.querySelector(".result-text");
const $rock = document.querySelector(".rock");
const $paper = document.querySelector(".paper");
const $scissors = document.querySelector(".scissors");

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
}

function win(userChoice, computerChoice) {
  userScore++;
  $userScore.textContent = userScore;
  $resultText.textContent = `${userChoice} beats ${computerChoice}. You WIN!`;
}

function lose(userChoice, computerChoice) {
  compScore++;
  $compScore.textContent = compScore;
  $resultText.textContent = `${computerChoice} beats ${userChoice}. You LOSE!`;
}

function draw(userChoice, computerChoice) {
  $resultText.textContent = `${userChoice} vs ${computerChoice}. It is a DRAW!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + " - " + computerChoice) {
    case "ROCK - SCISSORS":
    case "PAPER - ROCK":
    case "SCISSORS - PAPER":
      win(userChoice, computerChoice);
      break;
    case "ROCK - PAPER":
    case "PAPER - SCISSORS":
    case "SCISSORS - ROCK":
      lose(userChoice, computerChoice);
      break;
    case "ROCK - ROCK":
    case "PAPER - PAPER":
    case "SCISSORS - SCISSORS":
      draw(userChoice, computerChoice);
      break;
  }
}

$rock.addEventListener("click", () => {
  game("ROCK");
});

$paper.addEventListener("click", () => {
  game("PAPER");
});

$scissors.addEventListener("click", () => {
  game("SCISSORS");
});
