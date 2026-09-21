
let balance = 0;

const balanceDisplay = document.querySelector("#balance");
const emptyText = document.querySelector("#empty-text");

const depositInput = document.querySelector("#deposit-input");
const depositBtn = document.querySelector("#deposit-btn");

const withdrawInput = document.querySelector("#withdraw-input");
const withdrawBtn = document.querySelector("#withdraw-btn");

const historyList = document.querySelector("#history-list");


depositBtn.addEventListener("click", function () {

  let amount = Number(depositInput.value);

  if (amount > 0) {
    balance += amount;
    
if (emptyText) {
  emptyText.remove();
}
    balanceDisplay.textContent = `₦${balance.toFixed(2)}`;

    historyList.innerHTML += `<p>Deposited ₦${amount.toFixed(2)}</p>`;

    depositInput.value = "";
  }
});



withdrawBtn.addEventListener("click", function () {

  let amount = Number(withdrawInput.value);

  if (amount > 0 && amount <= balance) {
    balance -= amount;

    balanceDisplay.textContent = `₦${balance.toFixed(2)}`;

    historyList.innerHTML += `<p>Withdrew ₦${amount.toFixed(2)}</p>`;

    withdrawInput.value = "";
  }
});

const logoutBtn = document.querySelector("#logout-btn");

logoutBtn.addEventListener("click", function () {
    window.location.href = "bank.html";
});