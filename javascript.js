let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

// function for computer choice

function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);

  if (result === 0) {
    return "rock";
  } else if (result === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function for human choice

function getHumanChoice() {
  let choice = prompt("Enter your choice\n 1- rock\n 2- paper\n 3- scissors");

  switch (choice) {
    case "rock":
      return "rock";

      break;
    case "paper":
      return "paper";
      break;

    case "scissors":
      return "scissors";
      break;

    default:
      return "please enter a choice between 1 and 3";
      break;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      return console.log("you lose because paper < scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return console.log("you win because paper > rock");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      return console.log("you lose because rock < paper");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      return console.log("you win because rock > scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return console.log("you win because scissors > paper");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      return console.log("you lose because scissors < rock");
    } else {
      return console.log("a draw");
    }
  }

  playRound(humanChoice, computerChoice);
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  console.log(humanScore);
  console.log(computerScore);
}

playGame();
