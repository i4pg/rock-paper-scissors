const RPS = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3) // random number between 0~2
  let choice = RPS[index] // 1 => paper 

  return index, choice // [ 1, 'paper' ]
}

function getPlayerChoice(choice) {
  let choice = choice.toLowerCase() // 'rock'
  let index = RPS.indexOf(choice) // rock => 0

  return index, choice // [ 0, 'rock' ]
}

function getOpposite(computerSelection) {
  const SRP = ['scissors', 'rock', 'paper'] // RPS[0] beats SRP[0] and RPS[1] beats SRP[1]...

  // computerSelection => [ 2, 'scissors' ]
  let string = SRP[computerSelection[0]] // 'paper'
  let index = SRP.indexOf(string) // '0'

  return index
}


function getWinner(computerSelection, playerSelection) {
  let oppositeSide = getOpposite(computerSelection)

  switch (playerSelection[0]) {
    case computerSelection[0]: // both are equal 
      console.log('TIE')
      return -1
    case oppositeSide:
      console.log(`You Win! ${playerSelection[1]} beats ${computerSelection[1]}`)
      return 1
    default:
      console.log(`You Lose! ${computerSelection[1]} beats ${playerSelection[1]}`)
      return 0
  }
}

function singleRound(computerSelection, playerSelection) {
  let winner = getWinner(computerSelection, playerSelection)
}

singleRound(getComputerChoice(), getPlayerChoice('rock'))
