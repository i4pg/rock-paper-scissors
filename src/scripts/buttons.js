const gameCard = document.getElementById('game-card')
const gameButtons = document.getElementById('game-buttons')
const newGameBtn = document.getElementById('new-game')
const resetBtn = document.getElementById('reset')

newGameBtn.addEventListener('click', () => {
  gameButtons.style.display = 'none'
  gameButtons.previousElementSibling.style.display = 'none'
  gameCard.style.display = 'flex'
})

resetBtn.addEventListener('click', resetGame)

function resetGame() {
  score = 0
  playerScore = 0
  computerScore = 0
  updateScore()
  newRound()
}
