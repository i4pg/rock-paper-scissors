// Rock Paper Scissors

// -- run the game
game();

function game() {
    // 1. Declare the start points
    playerPoints = 0;
    computerPoints = 0;

    // 2. run the game 5 times
    for (i = 1; i <= 5; i++) {
        // 2.1. Auto generate computer choice
        function computerPlay() {
            let randomGen = Math.round(Math.random() * 2);
            return randomGen === 0
                ? "rock"
                : randomGen === 1
                    ? "paper"
                    : randomGen === 2
                        ? "scissors"
                        : "";
        }

        // 2.2. Ask user for his choice
        playerSelection = window.prompt(
            `round ${i} - What's Your Choise?`,
            "Rock Or Paper Or Scissors"
        );

        // 2.3. start processing the choices
        function playRound() {
            // 2.3.1. put in computer choice
            computerSelection = computerPlay();

            // 2.3.2. put in player choice and compare it with computer choice
            // and print out result messege

            // 2.3.2.1 if user choose rock ?
            return playerSelection.toLowerCase() === "rock"
                ? computerSelection === "rock"
                    ? `It's a Draw!
        Your score is: ${++playerPoints}.
        Computer score is: ${++computerPoints}.`
                    : computerSelection === "paper"
                        ? `You Lose! Paper beats Rock
        Computer score is: ${++computerPoints}`
                        : `You Win! Rock Beats Scissors
        Your score is: ${++playerPoints}`

                : // 2.3.2.2. if user choose paper ?
                playerSelection.toLowerCase() === "paper"
                    ? computerSelection === "rock"
                        ? `You Win! Paper Beats Rock
        Your score is: ${++playerPoints}`
                        : computerSelection === "paper"
                            ? `It's a Draw!
        Your score is: ${++playerPoints}.
        Computer score is: ${++computerPoints}.`
                            : `You Lose! Scissors Beats Paper
        Computer score is: ${++computerPoints}`

                    : // 2.3.2.3. if user choose scissors ?
                    playerSelection.toLowerCase() === "scissors"
                        ? computerSelection === "rock"
                            ? `You Lose! Rock Beats Scissors
        Computer score is: ${++computerPoints}`
                            : computerSelection === "paper"
                                ? `You Win! Scissors Beats Paper
        Your score is: ${++playerPoints}`
                                : `It's a Draw!
        Your score is: ${++playerPoints}.
        Computer score is: ${++computerPoints}.`
                        : "somthing went wrong";
        }
        // 2.3.3. print out the result each time the game run
        console.log(playRound());

        // 2.3.4. the game reach 5 times, Print out the total result
        i === 5
            ? playerPoints > computerPoints
                ? console.log(`You Are the Winner!
                Your Score is: ${playerPoints}
                computer Score is: ${computerPoints}`)
                : playerPoints < computerPoints
                    ? console.log(`Computer is the Winner!
                    Your Score is: ${playerPoints}
                    computer Score is: ${computerPoints}`)
                    : console.log(`It's a Draw! No Winner.
                    Your Score is: ${playerPoints}
                    computer Score is: ${computerPoints}`)
            : "";
    }
}
