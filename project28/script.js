const buttons = document.querySelectorAll(".move-btn");

const playerChoice = document.querySelector("#player-choice");
const cpuChoice = document.querySelector("#cpu-choice");

const resultText = document.querySelector("#result-text");

const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score");
const drawScore = document.querySelector("#draw-score");

let choices = ["rock", "paper", "scissors"];

let playerPoints = 0;
let cpuPoints = 0;
let draws = 0;

function playGame(player) {

    let computer = choices[Math.floor(Math.random() * 3)];

    playerChoice.textContent = player;
    cpuChoice.textContent = computer;

    if (player === computer) {
        draws++;
        drawScore.textContent = draws;
        resultText.textContent = "Draw!";
    }

    else if (player === "rock") {

        if (computer === "scissors") {
            playerPoints++;
            playerScore.textContent = playerPoints;
            resultText.textContent = "You Win!";
        } else {
            cpuPoints++;
            cpuScore.textContent = cpuPoints;
            resultText.textContent = "Computer Wins!";
        }

    }

    else if (player === "paper") {

        if (computer === "rock") {
            playerPoints++;
            playerScore.textContent = playerPoints;
            resultText.textContent = "You Win!";
        } else {
            cpuPoints++;
            cpuScore.textContent = cpuPoints;
            resultText.textContent = "Computer Wins!";
        }

    }

    else {

        if (computer === "paper") {
            playerPoints++;
            playerScore.textContent = playerPoints;
            resultText.textContent = "You Win!";
        } else {
            cpuPoints++;
            cpuScore.textContent = cpuPoints;
            resultText.textContent = "Computer Wins!";
        }
    }
}

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let player = button.dataset.move;

        playGame(player);

    });

});