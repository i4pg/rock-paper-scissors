const RPS = ['rock', 'paper', 'scissors']

function getComputerChoise() {
  return Math.floor(Math.random() * 3) // random number between 0~2
}

function getPlayerChoise(choise) {
  return RPS.indexOf(choise.toLowerCase())
}

function round(computerSelection, playerSelection) {
  getWinner(computerSelection, playerSelection)
}

function getWinner(computerSelection, playerSelection) {
  const SRP = ['scissors', 'rock', 'paper'] // RPS[0] beats SRP[0]

  let computerSelectionInString = RPS[computerSelection]
  let computerIndexInSRP = SRP.indexOf(computerSelectionInString)

  switch (playerSelection) {
    case computerSelection: // both are equal (TIE)
      return -1
    case computerIndexInSRP: // Player beats Computer
      return 1
    default: // Computer beats Player
      return 0
  }
}

round(getComputerChoise(), getPlayerChoise('rock'))
