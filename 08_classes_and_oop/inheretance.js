class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`The username is: ${this.username}`);
  }
}

class Admin extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  changeCase() {
    return `${this.username.toUpperCase()}`;
  }
  getLog() {
    console.log(`The post is published by: ${this.changeCase()}`);
  }
}

const user = new Admin("Kaushal", "kaushal@gmail.com", "123");

user.getLog();

user.logMe();

const writer = new User("Rahul");
writer.logMe();

console.log(user === writer); // false
console.log(user === Admin); // false
console.log(user instanceof User); // true
console.log(writer instanceof User); // true
console.log(writer instanceof Admin); // false
