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

    //checking of the user choice is valid
    while (choice !=="rock" && choice !=="paper" && choice !== "scissors") {
        choice = prompt("Your choice is invalid!")
    }
    return choice;
}

//new function named humanScore
function humanScore() {}
//new function named computerScore
function computerScore() {}
//initialize humanScore and computerScore with 0

//new function named playRound
function playRound() {}
//define humanChoice and computerChoice for playRound

//Use the 2 parameters as arguments

//make humanCHoice case sensitive

//console.log e.g “You lose! Paper beats Rock” for playRound

//increment humanScore of computerScore based on the round winner
