function getRandomImage() {
  return imagesPath[randomNumber(imagesPath.length)]
}

function setRandomImages() {
  rockElement.src = getRandomImage()
  scissorsElement.src = getRandomImage()
}

function updateScore() {
  computerPointHTML.textContent = computerScore
  playerPointHTML.textContent = playerScore
}

function newRound() {
  resetBtn.style.display = "block"
  roundResultHTML.textContent = ''
  helperMsgHTML.textContent = ''
  activeDOMListener()
}

function showResult() {
  let resultMsg = singleRound(computerSelection, playerSelection)
  roundResultHTML.textContent = resultMsg
  rockElement.src = imagesPath[computerSelection[0]]
  scissorsElement.src = imagesPath[playerSelection[0]]
}
