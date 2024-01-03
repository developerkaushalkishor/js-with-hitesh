const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, crypto, netwroks

  //forme here we are doing a async task
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise completed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 completed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // getting data in .then
    resolve({ name: "kaushal", age: 21, email: "email@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true;
    if (!err) {
      console.log("task 4");
      resolve({ name: "kaushal", age: 21 });
    } else {
      reject("ERROR, someting went wrong!");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is eather resolved or rejected.");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true;
    if (!err) {
      console.log("task 5");
      resolve({ language: "javascript", teacher: "hitesh sir" });
    } else {
      reject("ERROR, someting went wrong with JS!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// get data from API using async

async function getAllUserData() {
  try {
    const response = await fetch(
      "https://api.github.com/users/developerkaushalkishor"
    );
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.log("E", error);
  }
}
// getAllUserData();

fetch("https://api.github.com/users/developerkaushalkishor")
  .then((response) => {
    const data = response.json();
    // console.log(data); // promise is in panding
    return data;
  })
  .then((userData) => {
    console.log(userData);
  })
  .catch((err) => console.log(err));


