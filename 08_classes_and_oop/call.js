function SetUsername(username) {
  // complex DB calls
  this.username = username;
}

function CreateUser(username, email, password) {
  // this.username = username;

  SetUsername.call(this, username); // importance of call and this in this line <--
  this.email = email;
  this.password = password;
}

const user = new CreateUser("Kaushal", "kaushal@k.com", "123");
const user1 = new CreateUser("ram", "ram@k.com", "847");
const user2 = new CreateUser("rahul", "rahul@k.com", "54");

console.log(user);
console.log(user1);
console.log(user2);
