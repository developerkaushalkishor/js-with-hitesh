const course = {
  name: "js course",
  price: 999,
  teacher: "hitesh",
};

// console.log(course.teacher);

const { teacher: tr } = course;
const { price: p } = course;

// console.log(tr, p);

// Object
// const person = { name: "John", age: 30, city: "New York" };

// // Destructuring
// const { name, age, city } = person;

// // Variables now hold the corresponding values
// console.log(name); // 'John'
// console.log(age); // 30
// console.log(city); // 'New York'

// Default Values: and Aliasing:

const person = { name: "John", age: 30 };

// Providing default values
const { name: n, age, city = "Mainpuri", place: village = "sirsa" } = person;

console.log(n, age, city, village);

// Nested destructuring

const personNew = {
  name: "John",
  age1: 30,
  address: { city1: "New York", zip: "10001" },
};

// Nested destructuring
const {
  name,
  age1,
  address: { city1: pata, zip },
} = personNew;

// console.log(name); // 'John'
// console.log(age); // 30
console.log(pata); // 'New York'
// console.log(zip); // '10001'

// console.table([name, age, pata, zip]);


