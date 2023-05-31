while (round < 5) {
  singleRound(getComputerChoice(), getPlayerChoice());
  console.log(`Player: ${playerScore}`);
  console.log(`computer: ${computerScore}`);
}

if (playerScore === computerScore) {
  console.log("It's TIE game")
} else if (playerScore > computerScore) {
  console.log(`Congratulation!`)
} else {
  console.log(`Sorry, you've lost!`);
}
