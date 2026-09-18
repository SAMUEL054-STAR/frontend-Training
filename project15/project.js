const inputs = document.querySelectorAll("input");
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".results input");
const message = document.querySelector(".message");

calculate.addEventListener("click", function() {

  const weight = inputs[0].value;
  const height = inputs[1].value;

  const heightInMeter = height / 100;

  const bmi = weight / (heightInMeter * heightInMeter);

  result.value = bmi.toFixed(1) + " BMI";

  if (bmi < 18.5) {
    message.textContent = "Consider speaking to a healthcare provider about healthy weight gain.";
  } 
  else if (bmi < 25) {
    message.textContent = "Your BMI is in the normal range.";
  } 
  else if (bmi < 30) {
    message.textContent = "Your BMI is in the overweight range.";
  } 
  else {
    message.textContent = "Your BMI is in the obese range.";
  }

});