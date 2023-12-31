const ul = document.querySelector("#verthe-ul");

//? fetch from a JSON
// fetch("./movies.json")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.forEach((element) => {
//       const li = document.createElement("li");
//       li.innerHTML = `${element.title} - ${element.release_year}`;
//       ul.appendChild(li);
//     });
//   });

// ? fetch from text
// fetch("./test.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

//? fetch from git-API
// fetch("https://api.github.com/users/khidash8/repos")
//   .then((user) => user.json())
//   .then((data) => {
//     data.forEach((element) => {
//       const li = document.createElement("li");
//       li.innerHTML = `${element.name}`;
//       li.style.fontSize = "1.3rem";
//       ul.appendChild(li);
//     });
//   });

// fetch("https://api.github.com/users/khidash8")
//   .then((res) => res.json())
//   .then((data) => {
//     document.querySelector("h1").textContent = data.login;
//   });

//? ajax promis
const xhr = new XMLHttpRequest();

function getUser(endpoint) {
  xhr.open("GET", endpoint);
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const data = JSON.parse(this.response);
          resolve(data);
        } else {
          reject("something went wrong!!");
        }
      }
    };
  });
}

setTimeout(() => {
  xhr.send();
}, 1000);

getUser("https://api.github.com/users/khidash8/repos")
  .then((data) => {
    data.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = `${element.name}`;
      li.style.fontSize = "1.3rem";
      ul.appendChild(li);
    });
  })
  .catch((error) => console.log(error));
