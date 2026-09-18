const birthYear = document.querySelector("input");
const button = document.querySelector(".calculate");
const age = document.querySelector(".age")
const months = document.querySelector(".months")
const days = document.querySelector(".days")
const years = document.querySelector(".years")

button.addEventListener("click", function() {

    let year = birthYear.value
    let currentYear = new Date().getFullYear();

    let myAge = currentYear - year;

   age.textContent = myAge
   months.textContent = myAge* 12
   days.textContent = myAge* 365
   years.textContent = 100 - myAge
        
    
    
})