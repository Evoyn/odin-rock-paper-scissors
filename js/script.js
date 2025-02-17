function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanInput = prompt("Pls choose rock,paper or scissors");
  let resultHumanInput = humanInput.toLowerCase();
  return resultHumanInput;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("DRAAW!");
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You WIN!");
        humanScore += 1;
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You WIN!");
        humanScore += 1;
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You WIN!");
        humanScore += 1;
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You LOSE!");
        computerScore += 1;
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You LOSE!");
        computerScore += 1;
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You LOSE!");
        computerScore += 1;
      } else {
        console.log("Pls choose rock,paper,scissors not something else :(");
      }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(humanSelection);
    console.log(computerSelection);
    console.log("human score : ", humanScore);
    console.log("computer score : ", computerScore);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  }
}

playGame();
