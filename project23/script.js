const textArea = document.querySelector("#text-area");

const clearBtn = document.querySelector("#clear-btn");
const upperBtn = document.querySelector("#upper-btn");
const lowerBtn = document.querySelector("#lower-btn");
const sampleBtn = document.querySelector("#sample-btn");

function updateStats() {
  const text = textArea.value.trim();
  const words = text ? text.split(/\s+/) : [];

  document.querySelector("#s-words").textContent = words.length;
  document.querySelector("#s-chars").textContent = textArea.value.length;
  document.querySelector("#s-chars-ns").textContent =
    textArea.value.replace(/\s/g, "").length;

  document.querySelector("#s-sentences").textContent =
    text ? text.split(/[.!?]+/).filter(Boolean).length : 0;

  document.querySelector("#s-paragraphs").textContent =
    text ? text.split(/\n\s*\n/).filter(Boolean).length : 0;

  document.querySelector("#s-read").textContent =
    Math.ceil(words.length / 200 * 60) + "s";

  document.querySelector("#s-speak").textContent =
    Math.ceil(words.length / 130 * 60) + "s";

  document.querySelector("#s-avg-word").textContent =
    words.length
      ? (text.replace(/\s/g, "").length / words.length).toFixed(1)
      : 0;
}


textArea.addEventListener("input", updateStats);


clearBtn.addEventListener("click", () => {
  textArea.value = "";
  updateStats();
});


upperBtn.addEventListener("click", () => {
  textArea.value = textArea.value.toUpperCase();
  updateStats();
});


lowerBtn.addEventListener("click", () => {
  textArea.value = textArea.value.toLowerCase();
  updateStats();
});


sampleBtn.addEventListener("click", () => {
  textArea.value =
    "JavaScript is fun. JavaScript makes websites interactive. ";
  updateStats();
});

// Start at 0
updateStats();