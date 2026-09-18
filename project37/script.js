const title = document.querySelector("#movie-title");
const genre = document.querySelector("#movie-genre");
const year = document.querySelector("#movie-year");
const addBtn = document.querySelector("#add-btn");

const search = document.querySelector("#search-input");
const sort = document.querySelector("#sort-select");

const movieList = document.querySelector("#movie-list");
const movieCount = document.querySelector("#movie-count");
const avg = document.querySelector("#avg-rating");

const stars = document.querySelectorAll(".star");
const ratingText = document.querySelector("#rating-val");

let rating = 0;
let movies = [
  { title: "The emperor", genre: "action", rating: 4, year: 2022 },
  { title: "ghost doctor", genre: "horror", rating: 5, year: 2020 },
  { title: "Three before four", genre: "romance", rating: 4, year: 2025 },
  { title: "Ghost spider", genre: "comedy", rating: 5, year: 2021 },
  { title: "gangs of lagos", genre: "thriller", rating: 5, year: 2023 },
  { title: "The lost child", genre: "drama", rating: 3, year: 2024 },
];

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", function () {
    rating = i + 1;
    ratingText.textContent = rating + " / 5";

    for (let j = 0; j < stars.length; j++) {
      if (j < rating) {
        stars[j].classList.add("active");
      } else {
        stars[j].classList.remove("active");
      }
    }
  });
}

addBtn.addEventListener("click", function () {
  if (title.value == "" || rating == 0) {
    return;
  }

  movies.push({
    title: title.value,
    year: year.value,
    genre: genre.value,
    rating: rating,
  });

  title.value = "";
  year.value = "";
  rating = 0;
  ratingText.textContent = "0 / 5";

  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("active");
  }

  showMovies();
});


function showMovies() {
  movieList.innerHTML = "";

  let total = 0;
  let count = 0;

  for (let i = 0; i < movies.length; i++) {
    if (!movies[i].title.toLowerCase().includes(search.value.toLowerCase())) {
      continue;
    }

    total += movies[i].rating;
    count++;

    let star = "";

    for (let j = 1; j <= 5; j++) {
      if (j <= movies[i].rating) {
        star += "";
      } else {
        star += "";
      }
    }

    movieList.innerHTML += `
      <div class="movie-card">
        <div class="movie-rank">#${count}</div>

        <div class="movie-info">
          <div class="movie-title-text">${movies[i].title}</div>

          <div class="movie-meta">
            <span class="movie-year">${movies[i].year}</span>
            <span class="movie-genre">${movies[i].genre}</span>
            <span class="movie-stars">${star}</span>
          </div>
        </div>

        <button onclick="removeMovie(${i})" class="movie-delete">✕</button>
      </div>
    `;
  }

  movieCount.textContent = movies.length + " movies";

  if (count == 0) {
    avg.textContent = "Avg: —";
  } else {
    avg.textContent = "Avg: " + (total / count).toFixed(1) + " ★";
  }
}

function removeMovie(index) {
  movies.splice(index, 1);
  showMovies();
}

search.addEventListener("input", showMovies);

showMovies();
