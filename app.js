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

function cleanChoice(userChoice) {
  setTimeout(() => {
    const choice = document.querySelector(`.${userChoice.toLowerCase()}`);
    choice.style.borderColor = "";
    choice.style.boxShadow = "";
  }, 300);
}

function addWinGlow(userChoice) {
  const choice = document.querySelector(`.${userChoice.toLowerCase()}`);
  choice.style.borderColor = "#10bc40";
  choice.style.boxShadow = "0 0 10px #10bc40";
  cleanChoice(userChoice);
}

function addLoseGlow(userChoice) {
  const choice = document.querySelector(`.${userChoice.toLowerCase()}`);
  choice.style.borderColor = "#830900";
  choice.style.boxShadow = "0 0 10px #830900";
  cleanChoice(userChoice);
}

function addDrawGlow(userChoice) {
  const choice = document.querySelector(`.${userChoice.toLowerCase()}`);
  choice.style.borderColor = "#1f4daa";
  choice.style.boxShadow = "0 0 10px #1f4daa";
  cleanChoice(userChoice);
}

function win(userChoice, computerChoice) {
  userScore++;
  $userScore.textContent = userScore;
  $resultText.textContent = `${userChoice} beats ${computerChoice}. You WIN!`;
  addWinGlow(userChoice);
}

function lose(userChoice, computerChoice) {
  compScore++;
  $compScore.textContent = compScore;
  $resultText.textContent = `${computerChoice} beats ${userChoice}. You LOSE!`;
  addLoseGlow(userChoice);
}

function draw(userChoice, computerChoice) {
  $resultText.textContent = `${userChoice} vs ${computerChoice}. It is a DRAW!`;
  addDrawGlow(userChoice);
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

$rock.addEventListener("click", () => game("ROCK"));

$paper.addEventListener("click", () => game("PAPER"));

$scissors.addEventListener("click", () => game("SCISSORS"));
