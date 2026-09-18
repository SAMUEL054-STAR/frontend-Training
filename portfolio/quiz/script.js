const num = document.querySelector("#q-num");
const score = document.querySelector("#q-score");
const progbar = document.querySelector("#prog-bar");
const questiontext = document.querySelector("#question-text");
const optionsgrid = document.querySelector("#options-grid");
const startbtn = document.querySelector("#start-btn");
const nextbtn = document.querySelector("#next-btn");

const resultsscore = document.querySelector("#results-score");
const resultsmsg = document.querySelector("#results-msg");
const resultsbreakdown = document.querySelector("#results-breakdown");
const retrybtn = document.querySelector("#retry-btn");

const feedback = document.querySelector("#q-feedback");
const progressarea = document.querySelector("#progress-area");
const resultsscreen = document.querySelector("#results-screen");

const questions = [
  {
    question: "What does Math.floor(4.9) return?",
    options: ["5", "4", "4.9", "0"],
    answer: "4",
  },

  {
    question: "What does isNaN() help you determine?",
    options: [
      "whether value is negative",
      "whether a value is not a valid number",
      "whether it is even number",
      "whether a string is empty",
    ],
    answer: "whether a value is not a valid number",
  },

  {
    question:
      "Which keyword declares a variable that cannot be reassigned in JavaScript?",
    options: ["var", "let", "const", "set"],
    answer: "const",
  },

  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },

  {
    question: "Which language is used to style a webpage?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },

  {
    question: "Which event fires when a user clicks a button?",
    options: ["hover", "press", "click", "select"],
    answer: "click",
  },

  {
    question: "What is the correct way to write a comment in JavaScript?",
    options: ["<!-- comment -->", "# comment", "// comment", "** comment"],
    answer: "// comment",
  },

  {
    question: "Which language is used to make a webpage interactive?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: "JavaScript",
  },

  {
    question: "Which symbol is used for an ID in CSS?",
    options: [".", "#", "*", "@"],
    answer: "#",
  },

  {
    question: "Which method selects an element in JavaScript?",
    options: [
      "querySelector()",
      "getElement()",
      "selectElement()",
      "findElement()",
    ],
    answer: "querySelector()",
  },

  {
    question: "Which CSS property changes the background color of an element?",
    options: [
      "background-color()",
      "big-color()",
      "background()",
      "color-background()",
    ],
    answer: "background-color()",
  },

  {
    question: "What does CSS stand for?",
    options: [
      "computer style sheet()",
      "cascading style sheet()",
      "creative style syntax()",
      "colorful style system()",
    ],
    answer: "cascading style sheet()",
  },
];

let currentIndex = 0;
let userScore = 0;
let userAnswers = [];

startbtn.addEventListener("click", startQuiz);

function startQuiz() {
  currentIndex = 0;
  userScore = 0;
  userAnswers = [];

  progressarea.classList.remove("hidden");
  startbtn.classList.add("hidden");
  resultsscreen.classList.add("hidden");

  showQuestion();
}

function showQuestion() {
  const question = questions[currentIndex];

  num.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  score.textContent = `Score: ${userScore}`;
  questiontext.textContent = question.question;

  optionsgrid.innerHTML = "";
  feedback.textContent = "";
  feedback.classList.remove("correct", "wrong");
  nextbtn.classList.add("hidden");

  progbar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

  question.options.forEach(function (option) {
    const button = document.createElement("button");

    button.textContent = option;
    button.classList.add("option-btn");

    button.addEventListener("click", function () {
      checkAnswer(button, option);
    });

    optionsgrid.appendChild(button);
  });
}

function checkAnswer(button, selectedAnswer) {
  const question = questions[currentIndex];
  const buttons = optionsgrid.querySelectorAll(".option-btn");

  buttons.forEach(function (btn) {
    btn.disabled = true;
  });

  userAnswers.push(selectedAnswer);

  if (selectedAnswer === question.answer) {
    userScore++;

    score.textContent = `Score: ${userScore}`;

    button.classList.add("correct");

    feedback.textContent = "Correct! 🎉";
    feedback.classList.add("correct");
  } else {
    button.classList.add("wrong");

    feedback.textContent = "Wrong answer!";
    feedback.classList.add("wrong");

    buttons.forEach(function (btn) {
      if (btn.textContent === question.answer) {
        btn.classList.add("correct");
      }
    });
  }

  nextbtn.classList.remove("hidden");
}


nextbtn.addEventListener("click", function () {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  progressarea.classList.add("hidden");

  questiontext.textContent = "";
  optionsgrid.innerHTML = "";
  feedback.textContent = "";
  nextbtn.classList.add("hidden");

  resultsscreen.classList.remove("hidden");

  const percentage = (userScore / questions.length) * 100;

  resultsscore.textContent = `${userScore} / ${questions.length}`;

  if (percentage >= 80) {
    resultsmsg.textContent = "Excellent work! 🎉";
  } else if (percentage >= 50) {
    resultsmsg.textContent = "Good job! Keep practicing.";
  } else {
    resultsmsg.textContent = "Keep learning and try again.";
  }

  resultsbreakdown.innerHTML = "";

  questions.forEach(function (question, index) {
    const item = document.createElement("div");
    const icon = document.createElement("span");
    const text = document.createElement("span");

    item.classList.add("breakdown-item");
    icon.classList.add("breakdown-icon");
    text.classList.add("breakdown-text");

    const isCorrect = userAnswers[index] === question.answer;

    if (isCorrect) {
      item.classList.add("correct-ans");
      icon.textContent = "✓";
    } else {
      item.classList.add("wrong-ans");
      icon.textContent = "✗";
    }

    text.textContent = `Q${index + 1}: ${question.question} — Your answer: ${userAnswers[index]}`;

    item.appendChild(icon);
    item.appendChild(text);

    resultsbreakdown.appendChild(item);
  });
}

retrybtn.addEventListener("click", function () {
  currentIndex = 0;
  userScore = 0;
  userAnswers = [];

  resultsscreen.classList.add("hidden");
  progressarea.classList.remove("hidden");

  showQuestion();
});
