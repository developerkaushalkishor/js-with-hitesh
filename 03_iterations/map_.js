const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 21, 35, 541, 111];

// const newArr = arr.map((num) => num * 10);

const newArr = arr
  .map((num) => num * 10)
  .map((numa) => numa + 1)
  .filter((numaa) => numaa >= 50);
console.log(newArr);
