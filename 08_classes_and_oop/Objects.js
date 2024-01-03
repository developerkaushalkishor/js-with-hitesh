const addIt = function add(a, b) {
  return a + b;
};

addIt.num = 20;

// console.log(addIt(1, 20));
// console.log(addIt.prototype);
// console.log(addIt.num);

function createUser(username, age) {
  this.username = username;
  this.age = age;
}
createUser.prototype.printMe = function () {
  console.log(`Hello i'm ${this.username}, i am ${this.age} yers old`);
};
const ram = new createUser("Ram", 22);
const kaushal = new createUser("Kaushal", 21);

console.log(ram);
console.log(ram.printMe());
console.log(kaushal.printMe());

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
