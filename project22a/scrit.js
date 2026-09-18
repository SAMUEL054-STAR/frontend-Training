const input = document.querySelector(".input");
const result = document.querySelector(".result");
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const trim = document.querySelector(".trim");
const split = document.querySelector(".split");
const characters = document.querySelector(".Characters");
const words = document.querySelector(".words");

function updateStats() {
  const text = input.value;
  characters.textContent = text.length;

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  words.textContent = wordCount;
}

input.addEventListener("input", updateStats);

uppercase.addEventListener("click", function () {
  result.textContent = input.value.toUpperCase();
});

lowercase.addEventListener("click", function () {
  result.textContent = input.value.toLowerCase();
});

trim.addEventListener("click", function () {
  result.textContent = input.value.trim();
});

split.addEventListener("click", function () {
  result.textContent = input.value.split(" ").join(" | ");
});

updateStats();