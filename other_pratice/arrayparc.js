const name = "kaushal kishor";
const arr = [];

for (const [index] of name) {
  arr.push(index);
}
console.log(arr);

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

arr.pop(); // removes last value of created array
console.log(arr);
arr.unshift("kaushal"); // add value in starting
console.log(arr);
// const newarr = arr.entries();
// console.log(newarr.next().value); // gives first index or arr and value in one new array

arr.shift("kishor"); // remove value form first index of array
console.log(arr.includes(" "));
console.log(arr.indexOf("k"));

const newarr2 = arr.join("-"); //kuchh bhi add kr sakte ho join se array ke har element ke bich me fir ye array ke elements ko  string me badal dega

console.log(newarr2, typeof newarr2);

console.log(arr.slice(0, 7)); // slice does not chhange original array it create new array and store the start, end values
console.log(arr);

console.log(arr.splice(0, 2)); // splice return a new array with the start, end values and change the original array
console.log(arr);
