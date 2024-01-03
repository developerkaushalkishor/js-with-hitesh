class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encriptPassword() {
    return `${this.password}xxx`;
  }
  changeCase() {
    return `${this.username.toUpperCase()}`;
  }
}

const admin = new User("Kaushal", "email@gmail.com", "123");
console.log(admin.encriptPassword());
console.log(admin.changeCase());

// if not exsites class in js

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encriptPassword = function () {
//   return `${this.password}sita`;
// };
// User.prototype.changeCase = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const ram = new User("Ram", "email@gmail.com", "ram");

// console.log(ram.encriptPassword());
// console.log(ram.changeCase());
