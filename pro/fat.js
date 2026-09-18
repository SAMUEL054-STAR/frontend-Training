const numbers = [5, 12, 8, 130, 44, 3, 99];

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
  { id: 4, name: "Diana", active: false },
  { id: 5, name: "Edward", active: true },
];

const products = [
  { id: 101, name: "shoes", price: 50 },
  { id: 102, name: "bag", price: 30 },
  { id: 103, name: "hat", price: 20 },
  { id: 104, name: "shirt", price: 40 },
];

const cart = ["shoes", "bag", "hat", "shirt", "watch"];

const product = products.find(product => product.id === 102);
const user99 = users.find(user => user.id === 99);

console.log("1.", numbers.find(number => number > 10));

console.log("2.", numbers.findIndex(number => number === 130));

console.log("3.", users.find(user => user.id === 3));

console.log("4.", users.findIndex(user => user.active === false));

console.log("5.", product.name, product.price);

console.log("6.", cart.findIndex(item => item === "hat"));

console.log("7.", user99 ? user99 : "User not found");