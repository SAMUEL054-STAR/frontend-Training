const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein", category: "Wisdom" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "Life" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Dreams" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle", category: "Wisdom" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", category: "Leadership" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", category: "Motivation" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford", category: "Mindset" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", category: "Wisdom" },
  { text: "An unexamined life is not worth living.", author: "Socrates", category: "Philosophy" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa", category: "Life" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt", category: "Resilience" },
  { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead", category: "Humor" },
  { text: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa", category: "Leadership" },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein", category: "Growth" }
];

const categoryColors = {
  Motivation: "#3ecfa0",
  Wisdom: "#4f8ef7",
  Life: "#f5a623",
  Dreams: "#cba6f7",
  Leadership: "#f26b6b",
  Mindset: "#3ecfa0",
  Philosophy: "#4f8ef7",
  Resilience: "#f5a623",
  Humor: "#cba6f7",
  Growth: "#3ecfa0"
};

const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const quoteCategory = document.querySelector("#quote-category");

const newQuoteBtn = document.querySelector("#new-quote-btn");
const favouriteBtn = document.querySelector("#favourite-btn");
const favsList = document.querySelector("#favs-list");
const favCount = document.querySelector("#fav-count");
const clearFavs = document.querySelector("#clear-favs");
const quoteBox = document.querySelector("#quote-box");
const statusMsg = document.querySelector("#status-msg");

let currentQuote;
let favourites = [];

function newQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  currentQuote = quotes[randomIndex];

  quoteText.textContent = currentQuote.text;
  quoteAuthor.textContent = "— " + currentQuote.author;
  quoteCategory.textContent = currentQuote.category;

  quoteBox.style.borderColor = categoryColors[currentQuote.category];

  statusMsg.textContent = "";
  statusMsg.classList.add("hidden");
}

newQuoteBtn.addEventListener("click", newQuote);

favouriteBtn.addEventListener("click", function() {
  if (currentQuote) {

    if (!favourites.includes(currentQuote)) {

      favourites.push(currentQuote);

      favCount.textContent = favourites.length;

      let item = document.createElement("div");
      item.className = "fav-item";
      item.style.color = "white"

      item.innerHTML = currentQuote.text + "<br>— " + currentQuote.author;

      favsList.appendChild(item);

    } else {

      statusMsg.textContent = "Saved already!";
      statusMsg.classList.remove("hidden");

    }
  }
});

clearFavs.addEventListener("click", function() {
  favourites = [];

  favCount.textContent = 0;

  favsList.innerHTML = "Save quotes you like...";

  statusMsg.textContent = "";
  statusMsg.classList.add("hidden");
});