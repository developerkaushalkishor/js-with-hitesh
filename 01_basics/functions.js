let a = 1;
let b = 10;

function addTwoNum() {
  console.log(a + b);
}

// addTwoNum();

//this function cannot store anye value in variable result
function addIt(num1, num2) {
  console.log(num1 + num2);
}
// const result = addIt(9, 2);

// console.log("Result", result);

//this function can store anye value in variable result2
function addIt2(num1, num2) {
  return num1 + num2;
}
const result2 = addIt2(9, 2);

// console.log("Result2", result2);

// loging message to user

function userLoginMessage(username = "User") {
  if (!username) {
    return "Please enter username";
  }
  return `${username} Just loged in.`;
}

// console.log(userLoginMessage("Kaushal"));

function calculateCartPrice(val1, val2, ...product) {
  return product;
}

// console.log(calculateCartPrice(200, 456, 8846, 564));

const user = {
  username: "kaushal",
  price: 432,
};

function handleUser(anyObject) {
  console.log(
    `Hello ${anyObject.username} your product price is ${anyObject.price}`
  );

  return;
}
// console.log(handleUser(user));

const priceArray = [200, 456, 8846, 564];

// Using the reduce method to add up the values in the array
const sum = priceArray.reduce((a, c) => a + c, 0);

console.log(sum); // This will output the sum of the values in the array

function returnSecondValueOfArray(getArray) {
  return getArray[1];
}
console.log(returnSecondValueOfArray(priceArray));
