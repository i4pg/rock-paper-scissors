const RPS = ['rock', 'paper', 'scissors']

function getComputerChoise() {
  return Math.floor(Math.random() * 3) // random number between 1~3
}

function getPlayerChoise(choise) {
  return RPS.indexOf(choise.toLowerCase())
}

function round(computerSelection, playerSelection) {
  getWinner(computerSelection, playerSelection)
}

function getWinner(computerSelection, playerSelection) {
  const SRP = ['scissors', 'rock', 'paper']   // RPS[0] beats SRP[0]

  let computerSelectionInString = RPS[computerSelection]
  let computerSelectionSRP = SRP.indexOf(computerSelectionInString)

  switch (playerSelection) {
    case computerSelection:
      console.log('tie')
      break;
    case computerSelectionSRP:
      console.log('win')
      break;

    default:
      console.log('lose')
      break;
  }
  console.log(RPS[playerSelection], RPS[computerSelection])
}

round(getComputerChoise(), getPlayerChoise('rock'))
