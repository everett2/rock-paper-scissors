let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    /* Assign each value a number
    Generate a random number
    Determine what the value will be based on the randomly generated number */
    const randomValue = Math.floor(Math.random() * 3);
    
    if (randomValue === 0) {
        return "rock";
    } else if (randomValue === 1) {
        return "paper";
    } else {
        return "scissors"
    };
};

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    if (choice.toLowerCase() === "rock") {
        alert("rock");
        return "rock";
    } else if (choice.toLowerCase() === "paper") {
        alert("paper");
        return "paper";
    } else if (choice.toLowerCase() === "scissors") {
        alert("scissors");
        return "scissors";
    } else {
        alert('Please enter either "rock", "paper", or "scissors"');
        return "null";
    };
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`it's a tie. Player: ${humanScore} CPU: ${computerScore}`);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`player won! Player: ${humanScore} CPU: ${computerScore}`);
    } else if (((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper"))) {
        computerScore++;
        console.log(`cpu won! Player: ${humanScore} CPU: ${computerScore}`);
    } else {
        console.log("null")
    };
};
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

