const RPS = ['rock', 'paper', 'scissors']

function getComputerChoise() {
  let choise = Math.floor(Math.random() * 3) // random number between 1~3
  return RPS[choise]
}

function getPlayerChoise(choise) {
  return choise.toLowerCase()
}

function round(computerSelection, playerSelection) {
  console.log(computerSelection, playerSelection)
}

round(getComputerChoise(), getPlayerChoise('ROCk'))
