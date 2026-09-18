const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ages = [12, 18, 15, 21, 17, 25, 13, 30];

const products = [
  { name: "shoes", price: 50, inStock: true },
  { name: "bag", price: 30, inStock: false },
  { name: "hat", price: 20, inStock: true },
  { name: "shirt", price: 120, inStock: true },
  { name: "watch", price: 200, inStock: false },
];

const students = [
  { name: "Kofi", score: 80, passed: true },
  { name: "Ama", score: 45, passed: false },
  { name: "Kwame", score: 90, passed: true },
  { name: "Abena", score: 30, passed: false },
  { name: "Yaw", score: 72, passed: true },
];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

const adults = ages.filter((age) => age >= 18);

const inStockProducts = products.filter((product) => product.inStock);

const cheapProducts = products.filter(
  (product) => product.inStock && product.price < 100,
);

const passedStudents = students
  .filter((student) => student.passed)
  .map((student) => student.name);

console.log("1.", evenNumbers);
console.log("2.", adults);
console.log("3.", inStockProducts);
console.log("4.", cheapProducts);
console.log("5.", passedStudents);
