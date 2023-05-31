function stopShuffle(interval) {
  // after 3 seconds of shuffling clearInterval will triggered
  // with two params (shuffle function-clear it-, shuffle seconds .5)
  setTimeout(clearInterval, 3000, interval, 500)
}

function startShuffleInterval() {
  resetBtn.style.display = "none"
  paperElement.style.opacity = 0;
  return setInterval(setRandomImages, 500)
}

