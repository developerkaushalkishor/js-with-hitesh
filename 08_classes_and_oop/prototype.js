const arr = [1, 2, 3];

const obj = {
  name: "kaushal",
  location: "india",

  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

Object.prototype.kaushal = function () {
  console.log(`kaushal is in object proto`);
};

Array.prototype.arrKaushal = function () {
  console.log(`kaushal form arr proto`);
};

obj.kaushal();
arr.arrKaushal();
// obj.arrKaushal();

const username = "kaushal    ";

String.prototype.isTrueLength = function () {
  console.log(this);
  console.log(`I'm form this: ${this}`);
  console.log(`The true length is: ${this.trim().length}`);
};

username.isTrueLength();

"Ram  ".isTrueLength();
"Rahul kumar    ".isTrueLength();
"Rmesh".isTrueLength();
