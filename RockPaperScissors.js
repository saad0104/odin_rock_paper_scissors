// function roundNo() {
//   let roundNo = parseInt(prompt("How many round do you want to play? "));
//   return roundNo;
// }
// const totalRound = roundNo(); // round no call

// // random no selection between 1, 2, 3
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// // Human choice input
// function getHumanChoice() {
//   let humanChoice = prompt("Enter your Choice : (rock, paper, scissors) ");
//   console.log("You - " + humanChoice.toUpperCase());

//   return humanChoice.toLowerCase();
// }

// // computer choice selection using random function
// function getComputerChoice() {
//   let compChoice = getRandomInt(3);
//   if (compChoice === 1) {
//     console.log("Comp - ROCK");
//     return "rock";
//   } else if (compChoice === 2) {
//     console.log("Comp - PAPER");
//     return "paper";
//   } else {
//     console.log("Comp - SCISSORS");
//     return "scissors";
//   }
// }

// let humanScore = 0,
//   compScore = 0;

// //   game logic
// function playRound() {
//   const humanC = getHumanChoice();
//   const compC = getComputerChoice();

//   if (humanC === compC) {
//     console.log("Draw");
//   } else if (humanC === "paper" && compC === "scissors") {
//     compScore++;
//     console.log("Computer won.");
//   } else if (humanC === "paper" && compC === "rock") {
//     humanScore++;
//     console.log("You Won.");
//   } else if (humanC === "scissors" && compC === "rock") {
//     compScore++;
//     console.log("Computer Won.");
//   } else if (humanC === "scissors" && compC === "paper") {
//     humanScore++;
//     console.log("You Won.");
//   } else if (humanC === "rock" && compC === "scissors") {
//     humanScore++;
//     console.log("You Won.");
//   } else if (humanC === "rock" && compC === "paper") {
//     compScore++;
//     console.log("Computer Won.");
//   } else {
//     console.log("Invalid entry.");
//   }
//   console.log("Your Score - " + humanScore + ", Computer Score - " + compScore);
// }

// for (let i = 0; i < totalRound; i++) {
//   console.log("Round " + parseInt(i + 1));

//   playRound();
// }

// #######  UI building starts here

// Computer Choice
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let compChoice = getRandomInt(3);
  if (compChoice === 1) {
    console.log("Comp - ROCK");
    return "rock";
  } else if (compChoice === 2) {
    console.log("Comp - PAPER");
    return "paper";
  } else {
    console.log("Comp - SCISSORS");
    return "scissors";
  }
}
// user choice
const choiceR = document.createElement("button");
choiceR.textContent = "Rock";
const choiceP = document.createElement("button");
choiceP.textContent = "Paper";
const choiceS = document.createElement("button");
choiceS.textContent = "Scissors";

choiceP.addEventListener("click", () => {
  playRound("paper");
});
choiceR.addEventListener("click", () => {
  playRound("rock");
});
choiceS.addEventListener("click", () => {
  playRound("scissors");
});

// logic
let humanScore = 0,
  compScore = 0;

function playRound(humanC) {
  const compC = getComputerChoice();
  let resultMsg = "";

  if (humanC === compC) {
    resultMsg = "Draw";
  } else if (humanC === "paper" && compC === "scissors") {
    compScore++;
    resultMsg = "Computer Won";
  } else if (humanC === "paper" && compC === "rock") {
    humanScore++;
    resultMsg = "You Won";
  } else if (humanC === "scissors" && compC === "rock") {
    compScore++;
    resultMsg = "Computer Won";
  } else if (humanC === "scissors" && compC === "paper") {
    humanScore++;
    resultMsg = "You Won";
  } else if (humanC === "rock" && compC === "scissors") {
    humanScore++;
    resultMsg = "You Won";
  } else if (humanC === "rock" && compC === "paper") {
    compScore++;
    resultMsg = "Computer Won";
  } else {
    resultMsg = "Invalid Entry";
  }
  roundResult.textContent = `Selection: You (${humanC}) vs Comp (${compC}) — ${resultMsg}`;
  runningResult.textContent = `Current Score: Human ${humanScore} | Computer ${compScore}`;
}

// result show /scorecard
const container = document.createElement("div");

container.appendChild(choiceR);
container.appendChild(choiceP);
container.appendChild(choiceS);

const scoreBoard = document.createElement("div");
scoreBoard.style.margin = "2px";
scoreBoard.style.padding = "10px";
scoreBoard.style.border = "2px solid black";

const roundResult = document.createElement("p");
const runningResult = document.createElement("p");

scoreBoard.appendChild(roundResult);
scoreBoard.appendChild(runningResult);

document.body.appendChild(container);
document.body.appendChild(scoreBoard);
