const imagesPath = ['src/images/rps/rock.png', 'src/images/rps/paper.png', 'src/images/rps/scissors.png']
const choicesElement = document.getElementById('choices')
const helperMsgHTML = document.getElementById('helper-message')
const roundResultHTML = document.getElementById('round-result')
const computerPointHTML = document.getElementById('computer-result').firstElementChild
const playerPointHTML = document.getElementById('player-result').firstElementChild
const intro = document.getElementById('intro')
const winnerElement = document.getElementById('winner-name')
const choicesElementArray = [...choicesElement.children]
const rockElement = choicesElementArray[0]
const paperElement = choicesElementArray[1]
const scissorsElement = choicesElementArray[2]

function postShuffling() {
  showResult()
  updateScore()
  continueLestining()
}

function shuffleController() {
  stopShuffle(startShuffleInterval())
}

function controller(e) {
  let = computerSelection = getComputerChoice()
  let = playerSelection = getPlayerChoice(e.target.alt)

  pauseChoiceListener()
  shuffleController()
  setTimeout(postShuffling, 3000) // wait 3 seconds for the choice's shuffling
}
