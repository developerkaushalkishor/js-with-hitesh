const obj = { name: "kaushal", age: 21, location: "india" };
const arr = ["Kaushal", "Rahul", "Ram", "Sita"];

// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(key, element);
//   }
// }

// for (const valuesInArray of arr) {
//   console.log(valuesInArray);
// }

// let greeting = "namste india";
// for (const i of greeting) {
//   console.log(i);
// }

// Map()

const map = new Map();

map.set("name", "kaushal");
map.set("locaion", "india");
map.set("age", 21);
map.set("age", 21);

// console.log(map);

for (const [key, value] of map) {
  console.log(value);
}
