const gameButtons = document.getElementById('game-buttons')
const quitBtn = document.getElementById('quit')
const newGameBtn = document.getElementById('new-game')

quitBtn.addEventListener('click', () => {
  window.close();
})

newGameBtn.addEventListener('click', () => {
  gameButtons.style.display = 'none'
  gameButtons.previousElementSibling.style.display = 'none'
})
