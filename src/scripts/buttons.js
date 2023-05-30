const gameButtons = document.getElementById('game-buttons')
const newGameBtn = document.getElementById('new-game')
const gameCard = document.getElementById('game-card')

newGameBtn.addEventListener('click', () => {
  gameButtons.style.display = 'none'
  gameButtons.previousElementSibling.style.display = 'none'
  gameCard.style.display = 'flex'
})
