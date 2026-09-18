const fruits = ["mango", "banana", "orange"];
const veggies = ["carrot", "spinach", "tomato"];

const person1 = { name: "Ama", age: 22 };
const person2 = { country: "Ghana", job: "Designer" };

const allFoods = [...fruits, ...veggies];
console.log(allFoods);

const newFruits = [...fruits, "pineapple"];
console.log(newFruits);

const newPerson = { ...person1, ...person2 };
console.log(newPerson);

const updatedPerson = { ...person1, age: 30 };
console.log(updatedPerson);
console.log(person1);

function sumAll(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  console.log(total);
}

sumAll(1, 2, 3, 4, 5);
