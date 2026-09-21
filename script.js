alert("JavaScript Connected!");
let playerScore = 0;
let computerScore = 0;

let round = 1;


// Game choices
const choices = {

    1: {
        name: "PAPER",
        emoji: "📄"
    },

    2: {
        name: "STONE",
        emoji: "🪨"
    },

    3: {
        name: "SCISSOR",
        emoji: "✂️"
    }

};


// Get HTML elements
const choiceButtons = document.querySelectorAll(".choice-btn");

const playerChoice =
    document.getElementById("playerChoice");

const computerChoice =
    document.getElementById("computerChoice");

const result =
    document.getElementById("result");

const playerScoreDisplay =
    document.getElementById("playerScore");

const computerScoreDisplay =
    document.getElementById("computerScore");

const roundDisplay =
    document.getElementById("round");

const gameScreen =
    document.getElementById("gameScreen");

const gameOver =
    document.getElementById("gameOver");

const finalResult =
    document.getElementById("finalResult");

const finalPlayerScore =
    document.getElementById("finalPlayerScore");

const finalComputerScore =
    document.getElementById("finalComputerScore");

const restartBtn =
    document.getElementById("restartBtn");


// Add click event to buttons
choiceButtons.forEach(button => {

    button.addEventListener("click", function () {

        const player =
            Number(this.dataset.choice);

        playGame(player);

    });

});


// Main game function
function playGame(player) {

    if (round > 5) {
        return;
    }


    // Computer chooses 1, 2 or 3
    const computer =
        Math.floor(Math.random() * 3) + 1;


    // Display choices
    playerChoice.textContent =
        choices[player].emoji;

    computerChoice.textContent =
        choices[computer].emoji;


    // Draw
    if (player === computer) {

        playerScore += 10;
        computerScore += 10;

        result.textContent =
            "🤝 DRAW! +10 +10";

    }


    // Player wins
    else if (

        (player === 1 && computer === 2) ||

        (player === 2 && computer === 3) ||

        (player === 3 && computer === 1)

    ) {

        playerScore += 10;

        result.textContent =
            "🎉 PLAYER WON! +10";

    }


    // Computer wins
    else {

        computerScore += 10;

        result.textContent =
            "🤖 COMPUTER WON! +10";

    }


    // Update score
    playerScoreDisplay.textContent =
        playerScore;

    computerScoreDisplay.textContent =
        computerScore;


    // Move to next round
    round++;


    if (round <= 5) {

        roundDisplay.textContent =
            round;

    }


    // End after 5 rounds
    if (round > 5) {

        setTimeout(endGame, 700);

    }

}


// End game
function endGame() {

    gameScreen.style.display =
        "none";

    gameOver.style.display =
        "block";


    finalPlayerScore.textContent =
        playerScore;

    finalComputerScore.textContent =
        computerScore;


    if (playerScore === computerScore) {

        finalResult.textContent =
            "🤝 DRAW!";

    }

    else if (playerScore > computerScore) {

        finalResult.textContent =
            "🏆 PLAYER WON!";

    }

    else {

        finalResult.textContent =
            "🤖 COMPUTER WON!";

    }

}


// Restart game
restartBtn.addEventListener("click", function () {

    playerScore = 0;
    computerScore = 0;
    round = 1;


    playerScoreDisplay.textContent =
        "0";

    computerScoreDisplay.textContent =
        "0";

    roundDisplay.textContent =
        "1";


    playerChoice.textContent =
        "❓";

    computerChoice.textContent =
        "❓";

    result.textContent =
        "Choose your move!";


    gameOver.style.display =
        "none";

    gameScreen.style.display =
        "block";

});

