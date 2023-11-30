//? post request
// function createPost(post) {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: post.title,
//       body: post.body,
//     }),
//     headers: {
//       "content-type": "application/json",
//       token: "abc123",
//     },
//   })
//     .then((Response) => Response.json())
//     .then((data) => console.log(data));
// }

// createPost({ title: "My post", body: "this is the requested body of mine" });

//? attempt 2:
const createPost = ({ title, body }) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "content-type": "application/json",
      token: "loki123",
    },
  });
};

createPost({ title: "my post 2", body: "this a deadbody!!" })
  .then((res) => res.json())
  .then((data) => console.log(data));
