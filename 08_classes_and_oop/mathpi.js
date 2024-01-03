const descriptor = Object.getOwnPropertyDescriptor(Math, ["PI"]);

console.log(Math.PI);

console.log(descriptor);

const phone = {
  name: "vivo",
  price: 21000,
  isInStock: true,
};
console.log(phone);
console.log(Object.getOwnPropertyDescriptor(phone, "price"));

Object.defineProperty(phone, "name", {
  writable: false, // name will not be changable
  enumerable: false, // name will not be itrable
  configurable: false,
});
phone.name = "Samsung";
phone.price = 10;
console.log(phone);
console.log(Object.getOwnPropertyDescriptor(phone, "name"));

for (let [key, value] of Object.entries(phone)) {
  console.log(key, value);
}
