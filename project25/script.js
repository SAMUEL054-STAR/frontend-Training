const coin = document.querySelector("#coin");
const coinResult = document.querySelector("#coin-result");
const flipBtn = document.querySelector("#flip-btn");
const historyDots = document.querySelector("#history-dots");
const streakDisplay = document.querySelector("#streak-display");

const sHeads = document.querySelector("#s-heads");
const sTails = document.querySelector("#s-tails");
const sTotal = document.querySelector("#s-total");
const sPct = document.querySelector("#s-pct")

let heads = 0;
let tails = 0;
let total = 0;

let currentStreak = 0;
let lastResult = null;

console.log(heads);
console.log(tails);
console.log(total);
console.log(currentStreak);
console.log(lastResult);


function flipCoin() {


    flipBtn.disabled = true;

    coin.classList.add("flipping");

    setTimeout(function() {


        let isHeads = Math.random() < 0.5;

        console.log("Is heads:", isHeads);
        total++;

        if (isHeads) {
            heads++;
        } else {
            tails++;
        }

        console.log("Heads:", heads);
        console.log("Tails:", tails);
        console.log("Total:", total);
        let currentResult;

        if (isHeads) {
            currentResult = "heads";
        } else {
            currentResult = "tails";
        }

        if (currentResult === lastResult) {
            currentStreak++;
        } else {
            currentStreak = 1;
        }

        lastResult = currentResult;

        console.log("Current streak:", currentStreak);
        console.log("Last result:", lastResult);


        if (isHeads) {
            coinResult.textContent = "HEADS! 🟡";
            coinResult.style.color = "orange";
        } else {
            coinResult.textContent = "TAILS! ⚪";
            coinResult.style.color = "silver";
        }

        let percentage = Math.round((heads / total) * 100);

        sHeads.textContent = heads;
        sTails.textContent = tails;
        sTotal.textContent = total;
        sPct.textContent = percentage + "%";


        let streakText = currentStreak + "x " + currentResult;

        if (currentStreak >= 5) {
            streakText = "🔥 " + streakText;
        }

        streakDisplay.textContent = streakText;


        let dot = document.createElement("div");

        dot.className = "h-dot";

        if (isHeads) {
            dot.classList.add("dot-h");
            dot.textContent = "H";
        } else {
            dot.classList.add("dot-t");
            dot.textContent = "T";
        }

        historyDots.appendChild(dot);


        if (historyDots.children.length > 30) {
            historyDots.removeChild(historyDots.firstElementChild);
        }


        coin.classList.remove("flipping");

        flipBtn.disabled = false;

    }, 650);
}




flipBtn.addEventListener("click", flipCoin);

coin.addEventListener("click", flipCoin);