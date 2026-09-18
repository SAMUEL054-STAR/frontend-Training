const password = document.getElementById("password");
const eyeBtn = document.getElementById("toggle-password");
const bars = document.querySelectorAll(".bars span");
const strengthText = document.getElementById("strength-text");
const scoreText = document.getElementById("score-text");
const fill = document.querySelector(".fill");
const rules = document.querySelectorAll(".rule span");

const slider = document.querySelector(".generate-controls input");
const sliderText = document.querySelector(".generate-controls span");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const generatedText = document.getElementById("generated-text");

const checks = document.querySelectorAll(".options input");


eyeBtn.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    eyeBtn.textContent = "hide";
  } else {
    password.type = "password";
    eyeBtn.textContent = "show";
  }
});


password.addEventListener("input", checkPassword);

function checkPassword() {
  let pass = password.value;
  let score = 0;

  let tests = [
    pass.length >= 8,
    /[A-Z]/.test(pass),
    /[a-z]/.test(pass),
    /[0-9]/.test(pass),
    /[^A-Za-z0-9]/.test(pass),
    pass.length >= 12
  ];

  tests.forEach(function (ok, i) {
    if (ok) {
      score++;
      rules[i].textContent = "✓";
      rules[i].style.color = "green";
    } else {
      rules[i].textContent = "○";
      rules[i].style.color = "blue";
    }
  });

  bars.forEach(function (bar, i) {
    if (i < score && i < 5) {
      bar.style.background = "green";
    } else {
      bar.style.background = "purple";
    }
  });

  fill.style.width = (score / 6) * 100 + "%";
  scoreText.textContent = score + " / 6";

  if (score <= 2) {
    strengthText.textContent = "Weak";
  } else if (score <= 4) {
    strengthText.textContent = "Good";
  } else {
    strengthText.textContent = "Excellent!";
  }
}


slider.addEventListener("input", function () {
  sliderText.textContent = slider.value + " chars";
});


generateBtn.addEventListener("click", function () {
  let chars = "";

  if (checks[0].checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (checks[1].checked) chars += "abcdefghijklmnopqrstuvwxyz";
  if (checks[2].checked) chars += "0123456789";
  if (checks[3].checked) chars += "!@#$%^&*()_+";

  if (chars === "") {
    generatedText.textContent = "Select at least one option.";
    return;
  }

  let result = "";

  for (let i = 0; i < slider.value; i++) {
    let random = Math.floor(Math.random() * chars.length);
    result += chars[random];
  }

  generatedText.textContent = result;
});


copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(generatedText.textContent);
  copyBtn.textContent = "Copied!";

  setTimeout(function () {
    copyBtn.textContent = "Copy";
  }, 1500);
});