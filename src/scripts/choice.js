const choices = document.getElementById('choices')

Array.from(choices.children).forEach(child => {
  child.addEventListener('click', play)
});

function play(e) {
  computerSelection = getComputerChoice()
  playerSelection = getPlayerChoice(e.target.alt)
  singleRound(computerSelection, playerSelection)
}
