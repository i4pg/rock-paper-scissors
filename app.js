// Rock Paper Scissors

// -- Declare var
const container = document.querySelector(".container");
const startButtun = document.querySelector("[type='start']");
const buttun = document.querySelector(".buttons");
const playMsg = document.querySelector("h4");
const gameContent = document.querySelector(".content");
const choices = document.querySelectorAll(".choices div");
const section = document.querySelector(".section");
const music = document.querySelector(".music");

// start buttun
startButtun.addEventListener("click", newGame);

// active choices for playerSelection by clicking
choices.forEach((choice) => choice.addEventListener("click", select));

// send playerSelection to playRound
function select() {
  playerSelection = this.getAttribute("data-text");
  playRound();
}

// auto gen computer selcet
function computerPlay() {
  let randomGen = Math.round(Math.random() * 2);
  return randomGen === 0
    ? "Rock"
    : randomGen === 1
    ? "Paper"
    : randomGen === 2
    ? "Scissors"
    : "";
}

// set a new game
function newGame() {
  music.play();
  gameContent.style.opacity = "1";
  gameContent.style.height = "auto";
  // Declare the start points
  playerPoints = 0;
  computerPoints = 0;
  currentRound = 1;

  // change buttun content after starting the game
  startButtun.textContent = "reset";
  // if reset buttun pressed remove the score msg
  section.children[0].tagName != "DIV" ? section.prepend(gameContent) : "";
  section.children[1].tagName == "H3" ? section.children[1].remove() : "";
  // remove press start to paly
  section.removeChild(playMsg);
}

// Declare an elements to shows scores
scoresMsg = document.createElement("h3");
scoresMsg.classList.add("scores");

function playRound() {
  // run computerPlay to generate selection
  computerSelection = computerPlay();

  // Declare var
  ps = playerSelection;
  cs = computerSelection;

  // satuations
  if (
    (ps === "Rock" && cs === "Scissors") ||
    (ps === "Paper" && cs === "Rock") ||
    (ps === "Scissors" && cs === "Paper")
  ) {
    scoresMsg.innerHTML = `<span class="res">Round ${currentRound} ${ps} Beats ${cs}</span> <span class="ps">Your Score is: ${++playerPoints}</span> <span class="cs">Computer Score is: ${computerPoints}</span>`;
    buttun.before(scoresMsg);
  } else if (
    (ps === "Scissors" && cs === "Rock") ||
    (ps === "Rock" && cs === "Paper") ||
    (ps === "Paper" && cs === "Scissors")
  ) {
    scoresMsg.innerHTML = `<span class="res">Round ${currentRound} ${cs} Beats ${ps}</span> <span class="ps">Your Score is: ${playerPoints}</span> <span class="cs">Computer Score is: ${++computerPoints}</span>`;
    buttun.before(scoresMsg);
  } else {
    scoresMsg.innerHTML = `<span class="res">Round ${currentRound} ${ps} and ${cs}</span> <span class="tie">tie!</span>`;
    buttun.before(scoresMsg);
  }

  // one round played
  currentRound++;

  // fn to check 5 rounds or not
  game();
}

// when reaching 5 rounds print result and then reset the game
function game() {
  if (currentRound === 6) {
    if (playerPoints > computerPoints) {
      scoresMsg.innerHTML = `<span class="final-result">You Are The Winner!</span> <span class="ps">Your Score is: ${playerPoints}</span> <span class="cs">Computer Score is: ${computerPoints}</span>`;
      gameContent.remove();
      buttun.before(scoresMsg);
      startButtun.textContent = "New Game";
    } else if (playerPoints < computerPoints) {
      scoresMsg.innerHTML = `<span class="final-result">Computer Won!</span> <span class="ps">Your Score is: ${playerPoints}</span> <span class="cs">Computer Score is: ${computerPoints}</span>`;
      gameContent.remove();
      buttun.before(scoresMsg);
      startButtun.textContent = "New Game";
    } else {
      scoresMsg.innerHTML = `<span class="final-result">Tie!</span> <span class="ps">Your Score is: ${playerPoints}</span> <span class="cs">Computer Score is: ${computerPoints}</span>`;
      gameContent.remove();
      buttun.before(scoresMsg);
      startButtun.textContent = "New Game";
    }
  }
}
