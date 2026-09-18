const person = {
  name: "Alice",
  age: 25,
  country: "Ghana",
  job: "Developer"
};

const colors = ["red", "green", "blue", "yellow"];

const student = {
  fullName: "Kwame Mensah",
  scores: [80, 90, 75],
  school: {
    name: "Accra Academy",
    location: "Accra"
  }
};


const { name, country } = person;
console.log(name, country);

const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);


const {
  fullName,
  school: { name: schoolName }
} = student;
console.log(fullName, schoolName);


const [, , blue] = colors;
console.log(blue);


const { age, job = "Unknown" } = person;
console.log(age, job);