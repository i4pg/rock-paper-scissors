const gameButtons = document.getElementById('game-buttons')
const newGameBtn = document.getElementById('new-game')

newGameBtn.addEventListener('click', () => {
  gameButtons.style.display = 'none'
  gameButtons.previousElementSibling.style.display = 'none'
})
