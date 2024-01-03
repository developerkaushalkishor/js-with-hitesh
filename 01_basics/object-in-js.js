let jsUser = {
  "full name": "kaushal",
  age: 21,
  location: "india",
  email: "e@gmail.com",
  isLogedIn: false,
};
// console.log(jsUser["full name"]);
// console.log(jsUser.age);

// Object.freeze(jsUser);
jsUser.age = 18;
// console.log(jsUser.age);

jsUser.greeting = function () {
  console.log(`Hello ${this["full name"]} how are you doing?`);
};
// console.log(jsUser.greeting());

// singleton objects or object by constructor

let tinderUser = new Object();
tinderUser.id = "dfaslkj";
tinderUser.name = "kaushal";
tinderUser.age = 21;
tinderUser.isLogedIn = false;
tinderUser.location = "india";

// console.log(tinderUser);

let instaUser = {
  id2: "dfaslkj",
  userFullName: {
    firstName: "kaushal",
    lastName: "kishor",
  },
  age: 23,
  isLogedIn: false,
  location: "india",
};

// console.log(instaUser.userFullName.firstName);

let finalObj = Object.assign({}, tinderUser, instaUser);

// console.log(finalObj);

let keysOfTinderUser = Object.keys(tinderUser);
let valueOfTinderUser = Object.values(tinderUser);

// keysOfTinderUser.forEach((e, i) => {
//   console.log(e, i);
// });

// valueOfTinderUser.forEach((e, i) => {
//   console.log(e, i);
// });

// console.log(keysOfTinderUser);
// console.log(valueOfTinderUser);
