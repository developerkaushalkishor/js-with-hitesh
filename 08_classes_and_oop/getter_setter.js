class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(emailValue) {
    this._email = emailValue;
  }
  get password() {
    return `${this._password}fdsakl`;
  }
  set password(passwordValue) {
    this._password = passwordValue;
    console.log(passwordValue);
  }
}

const user = new User("k@kishor.com", "123abc");
console.log(user.password);
console.log(user.email);
