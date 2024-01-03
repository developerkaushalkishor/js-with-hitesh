let getClass = document.getElementsByClassName("head");

function changeColor() {
  for (let i = 0; i < getClass.length; i++) {
    getClass[i].style.backgroundColor = "red";
  }
  getClass[0].style.backgroundColor = "yellow";
}

let userName = document.getElementById("name");
let para = document.getElementById("para");

function uservalue() {
  if (userName.value === "Kaushal") {
    console.log("You are Kaushal");
    // para.innerText = "You are Kaushal";
    let elem = document.createElement("p");

    elem.innerText = "You are Kaushal";
    document.body.append(elem);
    // document.body.prepend(elem);
  } else if (userName.value == "") {
    alert("Please enter name");
  } else {
    console.log();
    // para.innerText = "You are not Kaushal";
    let elem = document.createElement("p");

    elem.innerText = "You are not Kaushal";
    document.body.append(elem);
    // document.body.prepend(elem);
  }
}
