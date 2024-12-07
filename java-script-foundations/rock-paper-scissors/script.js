
// random generator for compute to set variable to 1 2 or 3 for choice

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

// Initalize scores

let userScore = 0;
let computerScore = 0;
let gameCounter = 0;


// Evaluates who won, and updates user scores. 
function playGame(userChoice, computerChoice) {
    let evaluatedComputerChoice = computerChoice;
    if (userChoice === "scissor" && evaluatedComputerChoice === "paper") {
        userScore++;
        return "User Wins!"
    } else if (userChoice === "paper" && evaluatedComputerChoice === "scissor") {
        computerScore++;
       return "Computer Wins!";
    } else if (userChoice === "scissor" && evaluatedComputerChoice === "rock") {
        computerScore++;
       return "Computer Wins!";
    } else if (userChoice === "rock" && evaluatedComputerChoice === "scissor") {
        userScore++;
        return "User Wins!"
    } else if (userChoice === "rock" && evaluatedComputerChoice === "paper") {
        computerScore++;
        return "Computer Wins!";
    } else if (userChoice === "paper" && evaluatedComputerChoice === "rock") {
        userScore++;
        return "User Wins!"
    } else if (userChoice === evaluatedComputerChoice) {
        return "Tie!"
    } else {
        return "error"
    }
}




// selecting dynamic elements to be displayed when playing game. 

userScoreCount = document.querySelector("#user-score");
computerScoreCount = document.querySelector("#computer-score");
displayObject = document.querySelector("#display");

// displays inital values of scores 0
userScoreCount.textContent = userScore;
computerScoreCount.textContent = computerScore;

// initalize result to null to satisfy if statement in button. 
// this will ensure that element is replaced with new result during game execution. 
let result = null

function handleEvent(e) {
    if (result) {
    displayObject.removeChild(result)
    }
    input = e.target.innerText.toLowerCase()
    switch (input) {
        case "rock":
            userChoice = input;
            console.log(userChoice);
            break;
        case "paper":
            userChoice = input;
            console.log(userChoice);
            break;
        case "scissor":
            userChoice = input;
            console.log(userChoice);
            break;
    }
    let computerChoice = calculateComputerChoice()
    result = document.createElement('div')
    result.textContent = playGame(userChoice, computerChoice);
    displayObject.appendChild(result);
    userScoreCount.textContent = userScore;
    computerScoreCount.textContent = computerScore;

}

// Add listener on all buttons
buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", handleEvent)
})


            

            
            
            
            