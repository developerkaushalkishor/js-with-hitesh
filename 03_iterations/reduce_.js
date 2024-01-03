// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 21, 35, 541, 111];
const arr = [1, 2, 3, 1, 1, 1];

const total = arr.reduce((accu, currval) => accu + currval, 0);

// const total = arr.reduce(
//   (accu, currval) => (console.log(`${accu} and ${currval}`), accu + currval),
//   0
// );

// console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const shoppingCartTotal = shoppingCart.reduce(
  (accumlater, perItemPrice) => accumlater + perItemPrice.price,
  0
);

console.log(shoppingCartTotal);
