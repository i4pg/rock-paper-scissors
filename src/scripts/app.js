const RPS = ["rock", "paper", "scissors"];
let round = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  index = Math.floor(Math.random() * 3); // random number between 0~2
  choice = RPS[index]; // 1 => paper

  return [index, choice]; // [ 1, 'paper' ]
}

function getPlayerChoice(choice = null) {
  if (!choice) {
    // NOTE: when getting wrong input it retunrs -1
    choice = prompt("Rock or Paper or Scissors?");
    choice = choice.toLowerCase(); // 'rock'
  }

  index = RPS.indexOf(choice); // rock => 0

  return [index, choice]; // [ 0, 'rock' ]
}

function getOpposite(computerString) {
  const SRP = ["scissors", "rock", "paper"]; // RPS[0] beats SRP[0] and RPS[1] beats SRP[1]...

  // computerString => 'scissors'
  return SRP.indexOf(computerString); // '0'
}

function singleRound(computerSelection, playerSelection) {
  let computerIndex = computerSelection[0];
  let computerString = computerSelection[1];
  let oppositeSide = getOpposite(computerString);
  let playerIndex = playerSelection[0];

  round++;

  switch (playerIndex) {

    case computerIndex:
      console.log("TIE");
      return -1;

    case oppositeSide:
      playerScore++;
      console.log(
        `You Win! ${playerSelection[1]} beats ${computerSelection[1]}`
      );
      return 1;

    default:
      computerScore++;
      console.log(
        `You Lose! ${computerSelection[1]} beats ${playerSelection[1]}`
      );
      return 0;

  }
}

function gameConsole() {

  while (round < 5) {
    singleRound(getComputerChoice(), getPlayerChoice());
    console.log(`Player: ${playerScore}`);
    console.log(`computer: ${computerScore}`);
  }

  if (playerScore === computerScore) {
    console.log("It's TIE game")
  } else if (playerScore > computerScore) {
    console.log(`Congratulation!`)
  } else {
    console.log(`Sorry, you've lost!`);
  }
}

gameConsole()
