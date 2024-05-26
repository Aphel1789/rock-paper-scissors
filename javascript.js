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

function getHumanChoice() {
  let choice = prompt("Enter your choice\n 1- rock\n 2- paper\n 3- scissors");

  switch (choice) {
    case "1":
      return "you chose rock";

      break;
    case "2":
      return "you chose paper";
      break;

    case "3":
      return "you chose scissors";
      break;

    default:
      return "please enter a choice between 1 and 3";
      break;
  }
}



// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();
// }