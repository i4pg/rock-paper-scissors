const RPS = ['rock', 'paper', 'scissors']

function getComputerChoise() {
  let choise = Math.floor(Math.random() * 3) // random number between 1~3
  return RPS[choise]
}

// test
for (let index = 0; index < 5; index++) {
  console.log(getComputerChoise())
}
