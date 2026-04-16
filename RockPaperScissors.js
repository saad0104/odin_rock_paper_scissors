function roundNo() {
  let roundNo = parseInt(prompt("How many round do you want to play? "));
  return roundNo;
}
const totalRound = roundNo(); // round no call

// random no selection between 1, 2, 3
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Human choice input
function getHumanChoice() {
  let humanChoice = prompt("Enter your Choice : (rock, paper, scissors) ");
  console.log("You - " + humanChoice.toUpperCase());

  return humanChoice.toLowerCase();
}

// computer choice selection using random function
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

let humanScore = 0,
  compScore = 0;

//   game logic
function playRound() {
  const humanC = getHumanChoice();
  const compC = getComputerChoice();

  if (humanC === compC) {
    console.log("Draw");
  } else if (humanC === "paper" && compC === "scissors") {
    compScore++;
    console.log("Computer won.");
  } else if (humanC === "paper" && compC === "rock") {
    humanScore++;
    console.log("You Won.");
  } else if (humanC === "scissors" && compC === "rock") {
    compScore++;
    console.log("Computer Won.");
  } else if (humanC === "scissors" && compC === "paper") {
    humanScore++;
    console.log("You Won.");
  } else if (humanC === "rock" && compC === "scissors") {
    humanScore++;
    console.log("You Won.");
  } else if (humanC === "rock" && compC === "paper") {
    compScore++;
    console.log("Computer Won.");
  } else {
    console.log("Invalid entry.");
  }
  console.log("Your Score - " + humanScore + ", Computer Score - " + compScore);
}

for (let i = 0; i < totalRound; i++) {
  console.log("Round " + parseInt(i + 1));

  playRound();
}
