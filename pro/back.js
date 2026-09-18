
const names = ["alice", "bob", "charlie", "diana", "edward"];

const numbers = [1, 2, 3, 4, 5];

const products = [
  { name: "shoes", price: 50 },
  { name: "bag", price: 30 },
  { name: "hat", price: 20 },
  { name: "shirt", price: 40 },
];

const students = [
  { name: "Kofi", score: 80 },
  { name: "Ama", score: 65 },
  { name: "Kwame", score: 90 },
  { name: "Abena", score: 72 },
];

const upperNames = names.map((name) => name.toUpperCase());

const doubleNumbers = numbers.map((number) => number * 2);

const productNames = products.map((product) => product.name);

const discountedProducts = products.map((product) => ({
  ...product,
  discountedPrice: product.price * 0.9,
}));

const studentScores = students.map(
  (student) => `${student.name} scored ${student.score} points`,
);

console.log("1.", upperNames);
console.log("2.", doubleNumbers);
console.log("3.", productNames);
console.log("4.", discountedProducts);
console.log("5.", studentScores);
