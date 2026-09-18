const principal = document.querySelector(".principal");
const rate = document.querySelector(".rate");
const time = document.querySelector(".time");
const calculate = document.querySelector(".calculate");

const simpleBtn = document.querySelector(".simple");
const compoundBtn = document.querySelector(".Compound");

const principalResult = document.querySelector(".principalResult");
const interestResult = document.querySelector(".interestResult");
const totalResult = document.querySelector(".totalResult");
const year1 = document.querySelector(".year1");
const year2 = document.querySelector(".year2");

let simpleInterest = 0;
let simpleTotal = 0;
let compoundInterest = 0;
let compoundTotal = 0;

calculate.addEventListener("click", function () {

  const p = Number(principal.value);
  const r = Number(rate.value);
  const t = Number(time.value);

  if (p <= 0 || r <= 0 || t <= 0) {
    alert("Enter valid numbers.");
    return;
  }

  simpleInterest = (p * r * t) / 100;
  simpleTotal = p + simpleInterest;

  compoundTotal = p * Math.pow(1 + r / 100, t);
  compoundInterest = compoundTotal - p;

  principalResult.textContent = "₦" + p.toFixed(2);
  interestResult.textContent = "₦" + simpleInterest.toFixed(2);
  totalResult.textContent = "₦" + simpleTotal.toFixed(2);

  year1.textContent = "₦" + (p * Math.pow(1 + r / 100, 1)).toFixed(2);
  year2.textContent = "₦" + (p * Math.pow(1 + r / 100, 2)).toFixed(2);
  const allYears = [year1, year2, year3, year4, year5, year6, year7, year8, year9, year10];
const advancedYears = allYears.map(y => y + 5);

// Destructure them back to variables if absolutely necessary
const [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10] = advancedYears;

});

simpleBtn.addEventListener("click", function () {
  const p = Number(principal.value);

  principalResult.textContent = "₦" + p.toFixed(2);
  interestResult.textContent = "₦" + simpleInterest.toFixed(2);
  totalResult.textContent = "₦" + simpleTotal.toFixed(2);

  simpleBtn.style.color = "yellow";
  simpleBtn.style.borderBottom = "3px solid yellow";

  compoundBtn.style.color = "#777894";
  compoundBtn.style.borderBottom = "none";
});

compoundBtn.addEventListener("click", function () {
  const p = Number(principal.value);

  principalResult.textContent = "₦" + p.toFixed(2);
  interestResult.textContent = "₦" + compoundInterest.toFixed(2);
  totalResult.textContent = "₦" + compoundTotal.toFixed(2);

  compoundBtn.style.color = "green";
  compoundBtn.style.borderBottom = "3px solid green";

  simpleBtn.style.color = "blue";
  simpleBtn.style.borderBottom = "blue";
});