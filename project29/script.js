const nameInput = document.querySelector("#name-input");
const addBtn = document.querySelector("#add-btn");
const namesList = document.querySelector("#names-list");
const nameCount = document.querySelector("#name-count");
const pickBtn = document.querySelector("#pick-btn");
const pickCount = document.querySelector("#pick-count");
const winnerBox = document.querySelector("#winner-box");
const winnerNames = document.querySelector("#winner-names");
const resetbtn = document.querySelector("#reset-btn")


let names = [];

function addName() {
  let name = nameInput.value.trim();
  if (name === "") return;

  names.push(name);
  nameInput.value = "";
  showNames();
}

function showNames() {
  namesList.innerHTML = "";
  nameCount.textContent = names.length;

  for (let i = 0; i < names.length; i++) {
    namesList.innerHTML += `<div class="name-chip">${names[i]}</div>`;
  }
}
function resetpicked(){
  winnerBox.classList.add("hidden");
  winnerNames.innerHTML="";
}

function pickNames() {
  let total = Number(pickCount.value);
  winnerNames.innerHTML = "";

  for (let i = 0; i < total; i++) {
    let random = Math.floor(Math.random() * names.length);
    winnerNames.innerHTML += `<div class="winner-name">${names[random]}</div>`;
  }

  winnerBox.classList.remove("hidden");
}

addBtn.addEventListener("click", addName);
pickBtn.addEventListener("click", pickNames);
resetbtn.addEventListener("click", resetpicked);