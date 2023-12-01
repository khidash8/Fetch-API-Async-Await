const apiURL = "https://jsonplaceholder.typicode.com/todos";
const form = document.querySelector("#todo-form");

//? get todos
const getTodos = () => {
  fetch(apiURL + "?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      data.forEach((todo) => {
        createElements(todo);
      });
    });
};

//? create DOMelemnts
function createElements(data) {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.setAttribute("data-id", data.id);
  div.append(document.createTextNode(data.title));

  //? set dark BG for completed tasks
  if (data.completed) {
    div.classList.add("done");
  }

  document.querySelector("#todo-list").appendChild(div);
}

//? update TO-DO
//* DOM
function createPost(e) {
  e.preventDefault();

  const textTodo = e.target.firstElementChild.value;

  fetch(apiURL, {
    method: "post",
    body: JSON.stringify({
      title: textTodo,
      completed: false,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      createElements(data);
    });
}

//*toggle completed
const toggleCompleted = (e) => {
  const target = e.target;
  if (target.classList.contains("todo")) {
    target.classList.toggle("done");

    // update on server as well
    updateOnServer(target.dataset.id, target.classList.contains("done"));
  }
};

//* Server
const updateOnServer = (id, completed) => {
  fetch(`${apiURL}/${id}`, {
    method: "put",
    body: JSON.stringify({ completed }),
    headers: {
      "content-type": "application/json",
    },
  });
};

//? Remove todo from DOM and Server
const removeTodoFromDomAndServer = (e) => {
  const target = e.target;
  const id = target.dataset.id;
  if (target.classList.contains("todo")) {
    fetch(`${apiURL}/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then(() => target.remove());
  }
};

//! Startups
const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  form.addEventListener("submit", createPost);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document
    .querySelector("#todo-list")
    .addEventListener("dblclick", removeTodoFromDomAndServer);
};

init();
