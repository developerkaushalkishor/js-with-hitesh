class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    return console.log(`Username is: ${this.username}`);
  }
  static createId() {
    return `${console.log("123")}`;
  }
}

const ram = new User("Ram");

ram.logMe();
// ram.createId();

class Product extends User {
  constructor(username, price) {
    super(username);
    this.price = price;
  }
}

const phone = new Product("Vivo", 20000);
phone.logMe();
phone.createId();
