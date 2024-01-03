// learn fetch in 30 second

const url = "https://api.github.com/users/developerkaushalkishor";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.name);
  })
  .catch((err) => {
    console.log(err);
  });
