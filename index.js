function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const choice = options[Math.floor((Math.random() * options.length))]
    return choice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice: ");
    if (playerChoice.toLowerCase() != "rock" && playerChoice.toLowerCase() != "paper" && playerChoice.toLowerCase() != "scissors") {
        alert("Choices: rock, paper, or scissors")
        getPlayerChoice();
    } else {
        return playerChoice;
    }
}

function playRound(playerSelection, computerSelection) {
    p = playerSelection.toLowerCase()
    c = computerSelection.toLowerCase()
    if (p == c) {
        alert("It's a tie!");
        return "tie";
    }
    if (p == "rock") {
        switch (c) {
            case "paper":
                alert(`Computer: ${computerSelection}. You lose! Paper beats Rock.`);
                return "lose!";
            case "scissors":
                alert(`Computer: ${computerSelection}. You win! Rock beats Scissors.`);
                return "win!";
        }
    } else if (p == "paper") {
        switch (c) {
            case "rock":
                alert(`Computer: ${computerSelection}. You win! Paper beats Rock.`);
                return "win!";
            case "scissors":
                alert(`Computer: ${computerSelection}. You lose! Scissors beats Paper.`);
                return "lose!";
        }
    } else if (p == "scissors") {
        switch (c) {
            case "paper":
                alert(`Computer: ${computerSelection}. You win! Scissors beats Paper.`);
                return "win!";
            case "rock":
                alert(`Computer: ${computerSelection}. You lose! Rock beats Scissors.`);
                return "lose!";
        }
    }
}

function playGame() {
    let pscore = 0;
    let cscore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        if (result.includes("win!")) {
            pscore += 1;
        } else if (result.includes("lose!")) {
            cscore += 1;
        } else {
            // do nothing
        }
    }
    if (pscore > cscore) {
        alert("You win!");
    } else {
        alert("You lose!");
    }
}


playGame();