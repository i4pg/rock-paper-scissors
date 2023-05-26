const RPS = ['rock', 'paper', 'scissors']

function getComputerChoise() {
  let choise = Math.floor(Math.random() * 3) // random number between 1~3
  return RPS[choise]
}

function getPlayerChoise(choise) {
  return choise.toLowerCase()
}

function round(computerSelection, playerSelection) {
  winningCombination(computerSelection, playerSelection)
}

function winningCombination(computerSelection, playerSelection) {
  const SPR = RPS.toReversed()

  // using indeces for comparing
  let p = RPS.indexOf(playerSelection)
  let c = RPS.indexOf(computerSelection)

  switch (p) {
    case c:
      console.log('tie')
      break;
    case SPR.indexOf(RPS[c]):
      console.log('win')
      break;

    default:
      console.log('lose')
      break;
  }
  console.log(playerSelection, computerSelection)
}

round(getComputerChoise(), getPlayerChoise('ROCk'))
