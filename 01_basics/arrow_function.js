const user = {
  username: "kaushal",
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website!`);
    console.log("this from inner ", this);
  },
};

// user.welcomeMessage();
// user.username = "ram";
// user.welcomeMessage();
// console.log("this form outer ", this);

function checkThis() {
  console.log("this form chechThis function ", this);
}
// checkThis();

const checkingThis = function () {
  let name = "kaushal";
  console.log(this);
};

// checkingThis();

const checkingThis1 = () => {
  let name = "kaushal";
  console.log(this.name);
  console.log(this);
};

// checkingThis1();

// const addTwoNumbers = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwoNumbers(2, 4));

// const addTwoNumbers = (num1, num2) => num1 + num2;

const addTwoNumbers = () => ({ nameofstudent: "Kishor" }); //if we use () then we don't need to write return this is the other way to create function

// console.log(addTwoNumbers());

let obj = { nameOfUser: "Rahul", location: "India", age: 22 };
const helloUser = () =>
  console.log(`Hello i'm ${obj.nameOfUser} form, ${obj.location}`);

helloUser();
