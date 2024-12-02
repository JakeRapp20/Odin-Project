

// Get user input of rock paper scissors



function checkInput(choice) {


    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissor") {
        return "scissor";
    } else {
        return alert("Please select rock paper or scissors");
    }
}


// create random generator for compute to set variable to 1 2 or 3 for choice

function calculateComputerChoice() {
    let randomSelectedChoice = Math.floor(Math.random() * 3);
    console.log("Random: " + randomSelectedChoice)
    if (randomSelectedChoice === 0) {
        return "rock";
    } else if (randomSelectedChoice === 1) {
        return "paper";
    } else if (randomSelectedChoice === 2) {
        return "scissor";
    } else {
        return "Something went wrong";
    }
}



// create if statement to evaluate who one

function playGame(userChoice, computerChoice) {
    let evaluatedUserChoice = checkInput(userChoice);
    let evaluatedComputerChoice = computerChoice;
    if (evaluatedUserChoice === "scissor" && evaluatedComputerChoice === "paper") {
        console.log("User: " + evaluatedUserChoice);
        console.log("Computer: " + evaluatedComputerChoice);
        console.log("User wins round!");
        userScore++;
    } else if (evaluatedUserChoice === "paper" && evaluatedComputerChoice === "scissor") {
        console.log("User: " + evaluatedUserChoice);
        console.log("Computer: " + evaluatedComputerChoice);
       console.log("Computer wins round!");
        computerScore++;
    } else if (evaluatedUserChoice === "scissor" && evaluatedComputerChoice === "rock") {
        console.log("User: " + evaluatedUserChoice);
        console.log("Computer: " + evaluatedComputerChoice);
       console.log("Computer wins round!");
        computerScore++;
    } else if (evaluatedUserChoice === "rock" && evaluatedComputerChoice === "scissor") {
        console.log("User: " + evaluatedUserChoice);
        console.log("Computer: " + evaluatedComputerChoice);
        console.log("User wins round!");
        userScore++;
    } else if (evaluatedUserChoice === "rock" && evaluatedComputerChoice === "paper") {
        console.log("User: " + evaluatedUserChoice);
        console.log("Computer: " + evaluatedComputerChoice);
        console.log("Computer wins round!");
        computerScore++;
    } else if (evaluatedUserChoice === "paper" && evaluatedComputerChoice === "rock") {
        console.log("User: " + evaluatedUserChoice);
        console.log("Computer: " + evaluatedComputerChoice);
        console.log("User wins round!");
        userScore++;
    } else if (evaluatedUserChoice === evaluatedComputerChoice) {
        console.log("User: " + evaluatedUserChoice);
        console.log("Computer: " + evaluatedComputerChoice);
        console.log("Tie round!");
    } else {
        return "error"
    }
}
let userScore = 0;
let computerScore = 0;

let gameCounter = 0;

while (gameCounter <= 4) {
    let userChoice = prompt("Rock, Paper, or Scissor?").toLowerCase();
    let computerChoice = calculateComputerChoice()
    let gameErrorCheck = playGame(userChoice, computerChoice);
    if (gameErrorCheck != "error") {
        gameCounter++;
    } else {
        console.log("game error round not counted.")
    }
    console.log("User Score: " + userScore);
    console.log("Computer Score: " + computerScore);
}
if (userScore > computerScore) {
    console.log("User wins game!");
} else if (userScore < computerScore) {
    console.log("Computer wins game!")
} else {
    console.log("Game is a tie! ")
}

// define computer and user score counter

// depending on who won increase player score counter


