const inputIitem = document.querySelector("#item");
const button = document.querySelector("button");
const todoItem = document.querySelector(".todo-items");

let arr = [];
button.addEventListener("click", (e) => {
  arr.push(inputIitem.value);
  // console.log(arr);

  let update = () => {
    arr.forEach((e) => {
      const p = document.createElement("p");
      // console.log(e);
      p.textContent = e;
      p.style.margin = "5px";
      p.style.padding = "5px";
      p.style.backgroundColor = "black";
      p.style.color = "white";
      p.style.borderRadius = "0.5rem";
      todoItem.appendChild(p);
    });
    arr = [];
  };
  update();
  inputIitem.value = "";
  // console.log(arr);
});

todoItem.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "P") {
      e.target.remove();
    }
  },
  false
);
