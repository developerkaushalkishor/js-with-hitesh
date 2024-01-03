const user = {
  name: "kaushal",
  age: 21,
  isLogedIn: false,
  sayhello: function () {
    console.log(`Hello I'm ${user.name} from user.name`);
    console.log(`Hello I'm ${this.name} from this.user`);
    console.log(this);
  },
};

// user.sayhello();
// console.log(this);

function User(username, age, isLogedIn) {
  this.username = username;
  this.age = age;
  this.isLogedIn = isLogedIn;
  this.greeting = function () {
    console.log(`Welcome: ${this.username}`);
  };
  return this;
}

const userOne = new User("Kaushal", 22, false);
const userTwo = new User("rahul", 20, false);
const userThree = new User("ram", 20, true);
const userFive = new User("Sita", 20, true);

console.log(userOne.constructor);
console.log(userTwo);
// console.log(userThree);
// console.log(userFive);
