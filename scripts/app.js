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

