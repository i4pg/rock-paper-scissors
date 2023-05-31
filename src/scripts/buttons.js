const gameCard = document.getElementById('game-card')
const gameButtons = document.getElementById('game-buttons')
const newGameBtn = document.getElementById('new-game')
const resetBtn = document.getElementById('reset')

function newGame() {
  gameButtons.style.display = 'none'
  gameButtons.previousElementSibling.style.display = 'none'
  gameCard.style.display = 'flex'
}

function resetDOMGame() {
  resetGame()
  updateScore()
  newRound()
}

newGameBtn.addEventListener('click', newGame)
resetBtn.addEventListener('click', resetDOMGame)
