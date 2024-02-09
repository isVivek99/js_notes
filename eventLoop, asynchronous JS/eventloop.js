// console.log("start");

// document.getElementById("btn").addEventListener("click", function cb() {
//   window.console.log("callback");
// });

// window.console.log("end");

// function x() {
//   window.console.log("inside x");
// }
// x();

async function fun() {
  console.log("C");

  return new Promise((resolve, reject) => resolve(2));

  setTimeout(() => {
    console.log("D");
  }, 1000);

  console.log("E");
}

console.log("E");
console.log("A");
const res = fun();
console.log({ res });
console.log("B");
res.then((res) => console.log(res));
// E A C
//fun returns a promise
//B 2
// timeout is unreachable
