const minus = document.querySelector("#dice-minus");
const plus = document.querySelector("#dice-plus");
const count = document.querySelector("#dice-count");
const rollBtn = document.querySelector("#roll-btn");

const display = document.querySelector("#dice-display");
const summary = document.querySelector("#result-summary");

const total = document.querySelector("#r-sum");
const average = document.querySelector("#r-avg");
const lowest = document.querySelector("#r-min");
const highest = document.querySelector("#r-max");

const history = document.querySelector("#roll-history");
const clear = document.querySelector("#clear-hist");

let dice = 2;
let rollNumber = 1;

plus.addEventListener("click", function () {
  if (dice < 6) dice++;
  count.textContent = dice;
});

minus.addEventListener("click", function () {
  if (dice > 1) dice--;
  count.textContent = dice;
});

rollBtn.addEventListener("click", function () {
  display.innerHTML = "";

  let sum = 0;
  let low = 6;
  let high = 1;
  let numbers = [];

  for (let i = 0; i < dice; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    numbers.push(roll);
    sum += roll;

    if (roll < low) low = roll;
    if (roll > high) high = roll;

    let box = document.createElement("div");
    box.className = "die";
    box.textContent = roll;
    display.appendChild(box);
  }

  summary.classList.remove("hidden");
  total.textContent = sum;
  average.textContent = (sum / dice).toFixed(1);
  lowest.textContent = low;
  highest.textContent = high;

  history.innerHTML =
    "<p>Roll " + rollNumber + ": [" + numbers.join(", ") + "] = Total: " + sum + "</p>";

  rollNumber++;
});

clear.addEventListener("click", function () {
  history.innerHTML = "<p class='hist-empty'>No rolls yet...</p>";m
});