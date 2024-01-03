const arr = ["Kaushal", "Rahul", "Ram", "Sita"];

// arr.forEach((e) => {
//   console.log(e);
// });

function printme(item) {
  console.log(item);
}
// arr.forEach(printme);

// arr.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

const fileData = [
  { name: "kaushal", age: 21, location: "india" },
  { name: "rahul", age: 22, location: "us" },
  { name: "sahcin", age: 18, location: "nepal" },
];

fileData.forEach((value) => {
  console.log(value.age);
});

// console.log(fileData[0].name);
