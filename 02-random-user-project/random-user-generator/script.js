const genBtn = document.querySelector("#generate");
const userDiv = document.querySelector("#user");

//? Events
genBtn.addEventListener("click", generateUser);

//? Functions
function generateUser(e) {
  showSpinner();
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      hideSpinner();
      data.results.forEach((element) => {
        showUser(element);
      });
    });
}

function showUser(user) {
  console.log(user);
  if (user.gender === "female") {
    document.querySelector("body").style.backgroundColor = "pink";
  } else {
    document.querySelector("body").style.backgroundColor = "orangeRed";
  }

  userDiv.innerHTML = `
  <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.cell}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>
      </div>
  `;
}

function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}

function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}
