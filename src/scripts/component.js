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

function gameOver() {
  gameCard.style.display = "none"
  gameButtons.style.display = "flex"
  gameButtons.firstElementChild.style.display = "none"
  intro.style.display = "block"
  intro.children[1].style.display = "none"
  winnerElement.textContent = getWinnerMsg()
}

function getWinnerMsg() {
  if (playerScore === computerScore) {
    return `It's a TIE game both got ${playerScore} ponits`
  } else if (playerScore > computerScore) {
    return `Congratulation!
your score is ${playerScore}
computer score is${computerScore}`
  } else {
    return `Sorry, you've lost!
your score is ${playerScore}
computer score is${computerScore}`
  }
}

function newRound() {
  if (round >= 5) {
    return gameOver()
  }
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
