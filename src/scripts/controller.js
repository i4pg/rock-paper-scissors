const choicesElement = document.getElementById('choices')
const choices = [...choicesElement.children]
const choicesImagePath = ['src/images/rps/rock.png', 'src/images/rps/paper.png', 'src/images/rps/scissors.png']
const helperMsg = document.getElementById('helper-message')
const roundResult = document.getElementById('round-result')

const computerPointHTML = document.getElementById('computer-result')
const playerPointHTML = document.getElementById('player-result')

function randomImage() {
  choices[0].src = choicesImagePath[randomNumber(3)]
  choices[2].src = choicesImagePath[randomNumber(3)]
}

function getResult() {
  let resultMsg = singleRound(computerSelection, playerSelection)
  choices[0].src = choicesImagePath[computerSelection[0]]
  choices[2].src = choicesImagePath[playerSelection[0]]
  choicesElement.addEventListener('click', newRound, { once: true })
  helperMsg.textContent = 'click on any choice to continue'
  roundResult.textContent = resultMsg
}

function updateScore() {
  computerPointHTML.firstElementChild.textContent = computerScore
  playerPointHTML.firstElementChild.textContent = playerScore
}

function resetGame() {
  score = 0
  playerScore = 0
  computerScore = 0
  updateScore()
  newRound()
}

function newRound() {
  roundResult.textContent = ''
  helperMsg.textContent = ''

  choices.forEach((choice, index) => {
    choice.style.opacity = 1;
    choice.addEventListener('click', play)
    choice.style.cursor = "pointer"
    choice.src = choicesImagePath[index]
  })
}

function play(e) {
  computerSelection = getComputerChoice()
  playerSelection = getPlayerChoice(e.target.alt)


  choices.forEach(choice => {
    choice.removeEventListener('click', play)
    choice.style.cursor = "default"
  })

  let imageShuffle = setInterval(randomImage, 500)
  choices[1].style.opacity = 0;
  setTimeout(clearInterval, 3000, imageShuffle, 500)
  setTimeout(getResult, 3000)
}

choices.forEach(choice => {
  choice.addEventListener('click', play)
});
