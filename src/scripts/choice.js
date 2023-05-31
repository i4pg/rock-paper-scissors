const choices = Array.from(document.getElementById('choices').children)
const choicesImagePath = ['src/images/rps/rock.png', 'src/images/rps/paper.png', 'src/images/rps/scissors.png']

function randomImage() {
  choices[0].src = choicesImagePath[randomNumber(3)]
  choices[2].src = choicesImagePath[randomNumber(3)]
}

function getResult() {
  singleRound(computerSelection, playerSelection)
  choices[0].src = choicesImagePath[computerSelection[0]]
  choices[2].src = choicesImagePath[playerSelection[0]]
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
  setTimeout(clearInterval, 3500, imageShuffle, 500)
  setTimeout(getResult, 3500)
}

choices.forEach(choice => {
  choice.addEventListener('click', play)
});

