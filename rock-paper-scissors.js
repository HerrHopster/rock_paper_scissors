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