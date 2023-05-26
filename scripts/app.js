const RPS = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  index = Math.floor(Math.random() * 3) // random number between 0~2
  choice = RPS[index] // 1 => paper 

  return [index, choice] // [ 1, 'paper' ]
}

function getPlayerChoice() {
  choice = prompt('Rock or Paper or Scissors?')
  choice = choice.toLowerCase() // 'rock'
  index = RPS.indexOf(choice) // rock => 0

  return [index, choice] // [ 0, 'rock' ]
}

function getOpposite(computerSelection) {
  const SRP = ['scissors', 'rock', 'paper'] // RPS[0] beats SRP[0] and RPS[1] beats SRP[1]...

  // computerSelection => [ 2, 'scissors' ]
  string = SRP[computerSelection[0]] // 'paper'
  index = SRP.indexOf(computerSelection[1]) // '0'

  return index
}


function singleRound(computerSelection, playerSelection) {
  let oppositeSide = getOpposite(computerSelection)

  switch (playerSelection[0]) {
    case computerSelection[0]: // both are equal 
      console.log('TIE')
      return 0
    case oppositeSide:
      console.log(`You Win! ${playerSelection[1]} beats ${computerSelection[1]}`)
      return 1
    default:
      console.log(`You Lose! ${computerSelection[1]} beats ${playerSelection[1]}`)
      return -1
  }
}

function game() {
  let round = 0
  let playerScore = 0
  let computerScore = 0


  while (round < 5) {
    let winner = singleRound(getComputerChoice(), getPlayerChoice())

    switch (winner) {
      case 1:
        playerScore++
        break;
      case 0:
        computerScore++
        break;
    }
    console.log(`Player: ${playerScore}`)
    console.log(`computer: ${computerScore}`)
    round++
  }

  console.log(`Game Over!`)

}

game()
