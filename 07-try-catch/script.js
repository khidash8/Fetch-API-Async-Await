// try {
//   console.log(x);
// } catch (error) {
//   console.log("Error: " + error);
// }

// const doubleNum = (num) => {
//   if (isNaN(num)) {
//     console.log(num + " is not a number");
//   } else {
//     return num * 2;
//   }
// };

// try {
//   const y = doubleNum("hello");
//   console.log(y);
// } catch (error) {
//   console.log(error);
// }

const doubleNum = (num) => {
  if (isNaN(num)) {
    throw new Error(`${num} is not a number`);
  } else {
    return num * 2;
  }
};

try {
  doubleNum("hello");
} catch (error) {
  console.log(error);
}
