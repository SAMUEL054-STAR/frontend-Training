const bill = document.querySelector(".bill");
const tip5 = document.querySelector(".tip:nth-child(1)");
const tip10 = document.querySelector(".tip:nth-child(2)");
const tip15 = document.querySelector(".tip:nth-child(3)");
const tip20 = document.querySelector(".tip:nth-child(4)");
const tip25 = document.querySelector(".tip:nth-child(5)");

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const number = document.querySelector(".number");
const calculate = document.querySelector(".calculate");

const billResult = document.querySelector(".bill-result");
const tipResult = document.querySelector(".tip-result");
const totalResult = document.querySelector(".total-result");
const personResult = document.querySelector(".person-result");

let tip = 10;
let people = 1;

tip5.addEventListener("click", function() {
    tip = 5;
});

tip10.addEventListener("click", function() {
    tip = 10;
});

tip15.addEventListener("click", function() {
    tip = 15;
});

tip20.addEventListener("click", function() {
    tip = 20;
});

tip25.addEventListener("click", function() {
    tip = 25;
});

plus.addEventListener("click", function() {
    people = people + 1;
    number.textContent = people;
});

minus.addEventListener("click", function() {
    if (people > 1) {
        people = people - 1;
        number.textContent = people;
    }
});

calculate.addEventListener("click", function() {

    let amount = Number(bill.value);

    let tipAmount = amount * tip / 100;

    let total = amount + tipAmount;

    let eachPerson = total / people;

    billResult.textContent = "₦" + amount.toFixed(2);
    tipResult.textContent = "₦" + tipAmount.toFixed(2);
    totalResult.textContent = "₦" + total.toFixed(2);
    personResult.textContent = "₦" + eachPerson.toFixed(2);

});