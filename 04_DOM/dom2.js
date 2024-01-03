let parentElement = document.getElementsByClassName("parent");
let parent = document.querySelector(".parent");

// console.log(parentElement); //.children not workign in ClassName
// console.log(parent.children);
// console.log(parent.children[0].innerHTML);

// parent.children.forEach((e) => {
//   console.log(e.innerHTML);
// });

// for (let i = 0; i < parent.children.length; i++) {
//   const element = parent.children[i].innerHTML;
//   console.log(element);
// }

parent.children[0].style.color = "orange";

// console.log(parent.firstElementChild);
parent.firstElementChild.style.background = "red";
parent.lastElementChild.style.background = "#000032";

let dayOne = document.querySelector(".day");

console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);
dayOne.nextElementSibling.style.border = "2px solid yellow";

// console.log(`NODE: ${parent.childNodes}`); // This will not return any node list :WTF 😂

console.log("NODE ", parent.childNodes); // only ''  will return the node list

newLinks.forEach((link) => {
  link.style.color = "red";
  const p = document.createElement("p");
  p.innerText = `${link.innerText} TEXT from link for append`;
  link.appendChild(p);
});

// newLinks.forEach((newLinks) => {
//     newLinks.style.color = "red";
//     const p = document.createElement("p");
//     p.innerText = `${newLinks.innerText} TEXT from link for append`;
//   newLinks.prepend(p);
//   });
