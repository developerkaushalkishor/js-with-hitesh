// lear array herea: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

let arr = [1, 2, 3, 4, 5];

// console.log(arr.indexOf("kaushal"));
// console.log(arr.includes("dfsafa"));

// console.log(Array.isArray(arr));

let createArray = new Array(8, 10, 20, 20, undefined);
// console.log(createArray);
// console.log(Array.isArray(createArray));

// console.log(...arr, ...createArray);

// console.log(arr.join());
// console.log(arr.join(""));
// console.log(arr.join("-"));
// console.log(arr.join("/"));
// console.log(createArray.join(" and "));
// console.log(Array.prototype.join.call(arr));
// console.log(Array.prototype.join.call(arr, "."));

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
// console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
// console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4

let getKeys = createArray.keys();

// for (const key of getKeys) {
//   console.log(key);

// }
// console.log(createArray);

// createArray.push("9", 0);
// console.log(createArray);

// createArray.pop();
// createArray.pop();
// createArray.splice(0, 1);

// console.log(createArray);

// console.log("A", arr);

// const myarr1 = arr.slice(1, 3);

// console.log("B", myarr1);

// console.log("C", arr);

// const myarr2 = arr.splice(0, 3);

// console.log(myarr2);

// console.log("D", arr);

// console.log(arr);

// arr.shift();
// arr.shift();
// arr.shift();

// console.log(arr);

// console.log(arr);

// arr.unshift(...createArray, 108);
// arr.unshift(11, 108);

// console.log(arr);

// arr.push(createArray);

// console.log(arr);

let mynewarr = [...arr, ...createArray];
arr.push(...createArray);
// output will be same
// console.log(mynewarr);
// console.log(arr);

let myTextArr = [2, 3, 4, 5, [10, 20, 20, [1, 3, 4, 5, 8, [10, 20, 20]]]];

let finalArr = myTextArr.flat(Infinity);
// console.log(finalArr);

// console.log(Array.isArray("kaushal"));
// console.log(Array.from("kaushal"));

let score = 100;
let score1 = "100";
let score2 = true;

console.log(Array.of(score, score1, score2));
