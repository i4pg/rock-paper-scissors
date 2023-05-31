const RPS = ["rock", "paper", "scissors"];
let round = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  index = randomNumber(3)
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

function resetGame() {
  round = 0
  playerScore = 0
  computerScore = 0
}

function singleRound(computerSelection, playerSelection) {
  let computerIndex = computerSelection[0];
  let computerString = computerSelection[1];
  let oppositeSide = getOpposite(computerString);
  let playerIndex = playerSelection[0];

  round++;

  switch (playerIndex) {
    case computerIndex:
      msg = "TIE";
      console.log(msg);
      return msg
    case oppositeSide:
      playerScore++;
      msg = `You Win! ${playerSelection[1]} beats ${computerSelection[1]}`
      console.log(msg);
      return msg
    default:
      computerScore++;
      msg = `You Lose! ${computerSelection[1]} beats ${playerSelection[1]}`;
      console.log(msg);
      return msg
  }
}
