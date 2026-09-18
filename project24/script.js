const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const resetBtn = document.querySelector("#reset-btn");

const feedbackBox = document.querySelector("#feedback-box");
const feedbackIcon = document.querySelector("#feedback-icon");
const feedbackMsg = document.querySelector("#feedback-msg");

const attemptCount = document.querySelector("#attempt-count");
const attemptBar = document.querySelector("#attempt-bar");

const guessesList = document.querySelector("#guesses-list");
const noGuesses = document.querySelector("#no-guesses");

const sGames = document.querySelector("#s-games");
const sWins = document.querySelector("#s-wins");
const sBest = document.querySelector("#s-best");
const sStreak = document.querySelector("#s-streak");

let secretNumber;
let attempts;
let maxAttempts;
let gameOver;
let guesses;

let totalGames = 0;
let totalWins = 0;
let bestScore = Infinity;
let winStreak = 0;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;

  console.log("Secret number:", secretNumber);

  attempts = 0;
  maxAttempts = 10;
  gameOver = false;
  guesses = [];

  feedbackIcon.textContent = "🎯";

  feedbackMsg.textContent = "Make your first guess!";

  feedbackBox.className = "feedback-box";

  attemptCount.textContent = "0";

  attemptBar.style.width = "0%";

  attemptBar.style.backgroundColor = "purple";

  guessesList.innerHTML = '<p id="no-guesses" class="no-guesses">None yet</p>';

  guessInput.value = "";

  guessInput.disabled = false;
  guessBtn.disabled = false;

  guessInput.focus();
}

function makeGuess() {
  if (gameOver) return;

  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedbackMsg.textContent = "Please enter a number between 1 and 100.";

    guessInput.classList.add("shake");

    setTimeout(function () {
      guessInput.classList.remove("shake");
    }, 400);

    return;
  }

  console.log("Player guess:", guess);
  console.log("Guess type:", typeof guess);

  if (guesses.includes(guess)) {
    feedbackMsg.textContent = `You already guessed ${guess}! Try a different number.`;

    return;
  }

  attempts++;

  guesses.push(guess);

  console.log("Attempts:", attempts);
  console.log("Guesses:", guesses);

  attemptCount.textContent = attempts;

  let pct = (attempts / maxAttempts) * 100;

  console.log("Progress:", pct + "%");

  
  attemptBar.style.width = pct + "%";

  if (pct >= 80) {
    attemptBar.style.backgroundColor = "pink";
  } else if (pct >= 60) {
    attemptBar.style.backgroundColor = "yellow";
  }

  addGuessChip(guess);

  if (guess === secretNumber) {
    gameOver = true;

    feedbackBox.className = "feedback-box won";

    feedbackIcon.textContent = "🎉";

    feedbackMsg.textContent = `Correct! The number was ${secretNumber}. You got it in ${attempts} ${attempts === 1 ? "attempt" : "attempts"}!`;

    guessInput.disabled = true;
    guessBtn.disabled = true;

    totalGames++;
    totalWins++;
    winStreak++;

    if (attempts < bestScore) {
      bestScore = attempts;
    }

    updateStats();

    console.log(
      `WIN — secret was ${secretNumber}, guessed in ${attempts} attempts`,
    );
  } else if (attempts >= maxAttempts) {
    gameOver = true;

    feedbackBox.className = "feedback-box lost";

    feedbackIcon.textContent = "😢";

    feedbackMsg.textContent = `Game over! The number was ${secretNumber}.`;

    guessInput.disabled = true;
    guessBtn.disabled = true;

    totalGames++;
    winStreak = 0;

    updateStats();

    console.log(`LOSE — secret was ${secretNumber}`);
  } else if (guess > secretNumber) {
    feedbackBox.className = "feedback-box too-high";

    feedbackIcon.textContent = "⬇️";

    feedbackMsg.textContent = "Too high! Try a smaller number.";
  } else {
    feedbackBox.className = "feedback-box too-low";

    feedbackIcon.textContent = "⬆️";

    feedbackMsg.textContent = "Too low! Try a bigger number.";
  }

  guessInput.value = "";
  guessInput.focus();
}

function addGuessChip(guess) {
  
  if (noGuesses) {
    noGuesses.remove();
  }

  const chip = document.createElement("span");

  chip.textContent = guess;

  if (guess > secretNumber) {
    chip.className = "guess-chip chip-high";
  } else {
    chip.className = "guess-chip chip-low";
  }

  guessesList.appendChild(chip);
}

function updateStats() {
  sGames.textContent = totalGames;

  sWins.textContent = totalWins;

  sStreak.textContent = winStreak;

  if (bestScore === Infinity) {
    sBest.textContent = "—";
  } else {
    sBest.textContent = bestScore;
  }
}

guessBtn.addEventListener("click", makeGuess);

resetBtn.addEventListener("click", startGame);

startGame();