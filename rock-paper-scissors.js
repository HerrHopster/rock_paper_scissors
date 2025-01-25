//new function named getComputerChoice that returns "rock", "paper" or "scissors"
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
//new function named getHumanChoice that returns one of the 3 choices from above
function getHumanChoice() {
    //Lets the user input one of 3 choices
    let choice = prompt("Please enter rock, paper or scissors:").toLowerCase();

    //checking if the user choice is valid
    while (choice !=="rock" && choice !=="paper" && choice !== "scissors") {
        choice = prompt("Your choice is invalid!")
    }
    return choice;
}

//new function named humanScore
function humanScoreKeeper() {
    let score = 0;

    return {
        //get current score
        getScore() {
            return score;
        },
        //increase score
        addPoint: function() {
            score++;
        },
        //reset score
        reset: function() {
            score = 0;
        }
    }
}
//new function named computerScore
function computerScoreKeeper() {
    let score = 0;

    return {
        //get current score
        getScore() {
            return score;
        },
        //increase score
        addPoint: function() {
            score++;
        },
        //reset score
        reset: function() {
            score = 0;
        }
    }
}

const humanScore = humanScoreKeeper();
const computerScore = computerScoreKeeper();

//new function named playRound
function playRound(humanChoice, computerChoice) {
    // First, normalize the human choice to lowercase to make it case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Check all possible winning scenarios
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        // Human wins scenarios
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore.addPoint(); // Increment human score
        return "human";
    } else {
        // Computer wins in all other cases
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore.addPoint(); // Increment computer score
        return "computer";
    }
}

//Function that executes the game
function playGame() {
    // Reset scores at the start of the game
    const humanScore = humanScoreKeeper();
    const computerScore = computerScoreKeeper();

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        // Log which round we're on
        console.log(`--- Round ${round} ---`);

        // Get choices for this round
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        // Play the round
        playRound(humanChoice, computerChoice);

        // Show current scores after each round
        console.log(`Current Scores - You: ${humanScore.getScore()} Computer: ${computerScore.getScore()}`);
    }

    // Determine and announce the final winner
    if (humanScore.getScore() > computerScore.getScore()) {
        console.log("🎉 Congratulations! You won the game! 🎉");
    } else if (humanScore.getScore() < computerScore.getScore()) {
        console.log("😢 Computer wins the game. Better luck next time! 😢");
    } else {
        console.log("🤝 It's a tie game! 🤝");
    }
}