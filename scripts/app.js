const RPS = ['rock', 'paper', 'scissors']

function getComputerChoise() {
  return Math.floor(Math.random() * 3) // random number between 1~3
}

function getPlayerChoise(choise) {
  return RPS.indexOf(choise.toLowerCase())
}

function round(computerSelection, playerSelection) {
  winningCombination(computerSelection, playerSelection)
}

function winningCombination(computerSelection, playerSelection) {
  const SPR = RPS.toReversed()

  switch (playerSelection) {
    case computerSelection:
      console.log('tie')
      break;
    case SPR.indexOf(RPS[computerSelection]):
      console.log('win')
      break;

    default:
      console.log('lose')
      break;
  }
  console.log(playerSelection, computerSelection)
}

round(getComputerChoise(), getPlayerChoise('ROCk'))
