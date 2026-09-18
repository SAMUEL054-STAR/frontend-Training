const numbers = [10, 20, 30, 40, 50];

const cart = [
  { name: "shoes", price: 50, quantity: 2 },
  { name: "bag", price: 30, quantity: 1 },
  { name: "hat", price: 20, quantity: 3 },
  { name: "shirt", price: 40, quantity: 2 },
];

const words = ["hello", "world", "i", "love", "javascript"];

const votes = ["yes", "no", "yes", "yes", "no", "yes", "no"];

const students = [
  { name: "Kofi", score: 80 },
  { name: "Ama", score: 65 },
  { name: "Kwame", score: 90 },
  { name: "Abena", score: 72 },
];

const sum = numbers.reduce((total, number) => total + number, 0);

const totalCart = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

const sentence = words.reduce((text, word) => text + " " + word);

const voteCount = votes.reduce(
  (count, vote) => {
    count[vote]++;
    return count;
  },
  { yes: 0, no: 0 },
);

const topStudent = students.reduce((highest, student) => {
  return student.score > highest.score ? student : highest;
});

console.log("1.", sum);
console.log("2.", totalCart);
console.log("3.", sentence);
console.log("4.", voteCount);
console.log("5.", topStudent);
