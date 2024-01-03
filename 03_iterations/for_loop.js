const arr = ["Kaushal", "Rahul", "Ram", "Sita"];

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] === "Ram") {
//     // checking condition during foor loop
//     console.log("Ram is best in the world.");

//     // calling loop under the loop
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//   }
//   // array index, values
//   console.log(index, arr[index]);
// }

//Printing tables

// for (let i = 1; i <= 40; i++) {
//   console.log(`Printing table of ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} X ${j} = ${i * j}`);
//   }
// }

const obj = {
  name: "kaushal",
  class: "bsc",
  location: "india",
  age: 21,
  islogedIn: false,
};

// const length = Object.keys(obj).length;

// for (let i = 0; i < length; i++) {
//   console.log(length.valueOf);
// }

//we can iterate object values using for in loop

// for (const property in obj) {
//   console.log(obj[property]);
// }

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(`Value of i is ${i}`);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of i is ${i}`);
}

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
