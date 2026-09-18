const greet = (name) => {
  return "Hello " + name;
};

const add = (a, b) => {
  return a + b;
};

const square = (n) => {
  return n * n;
};

const isEven = (n) => {
  return n % 2 === 0;
};

const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};


console.log(greet("John"));
console.log(add(5, 3));
console.log(square(4));
console.log(isEven(6));
console.log(getFullName("John", "Doe"));