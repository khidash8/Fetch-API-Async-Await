const getUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/user1s");
  try {
    if (!response.ok) {
      throw new Error("U Fucked Up!!");
    }
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUser();
