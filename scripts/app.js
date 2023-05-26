const RPS = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  return Math.floor(Math.random() * 3) // random number between 0~2
}

function getPlayerChoice() {
  return RPS.indexOf(getPlayerString())
}

function getPlayerString(choice) {
  return choice.toLowerCase()
}

function singleRound(computerSelection, playerSelection) {
  let winner = getWinner(computerSelection, playerSelection)

  switch (winner) {
    case value:

      break;

    default:
      break;
  }
}

function getWinner(computerSelection, playerSelection) {
  const SRP = ['scissors', 'rock', 'paper'] // RPS[0] beats SRP[0]

  let computerSelectionInString = RPS[computerSelection]
  let computerIndexInSRP = SRP.indexOf(computerSelectionInString)

  switch (playerSelection) {
    case computerSelection: // both are equal (TIE)
      console.log('TIE')
      return -1
    case computerIndexInSRP: // Player beats Computer
      console.log(`You Win!  beats Rock`)
      return 1
    default: // Computer beats Player
      return 0
  }
}

singleRound(getComputerChoice(), getPlayerString('rock'))
