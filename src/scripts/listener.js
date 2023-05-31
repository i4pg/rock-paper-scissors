function pauseChoiceListener() {
  choicesElementArray.forEach(choice => {
    choice.removeEventListener('click', controller)
    choice.style.cursor = "default"
  })
}

function activeDOMListener() {
  choicesElementArray.forEach((choice, index) => {
    choice.style.opacity = 1;
    choice.addEventListener('click', controller)
    choice.style.cursor = "pointer"
    choice.src = imagesPath[index]
  })
}

function continueLestining() {
  gameCard.addEventListener('click', newRound, { once: true })
  helperMsgHTML.textContent = 'click anywhere to continue'
}
