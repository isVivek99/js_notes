const displayarea = document.querySelector("#display-area");
const button = document.querySelector("#btn");


function getData(x) {
  displayarea.innerHTML = x;
}
function clickFn() {
  console.log('click');
}

// function throttle(fn, limit) {
//   let flag = true;
//   let timer;
//   return function (...args) {
//     if (flag) {
//       fn.apply(this, args);
//       console.log(args);
//       flag = false;
//       timer = setTimeout(() => {
//         console.log("timeout-call");
//         flag = true;
//       }, limit);
//     }
//   };
// }

function throttle(fn, delay) {
  let flag = true;
  console.log(this);
  return function (...args) {
    if (flag) {
      console.log(this);
      fn.apply(this, args);
      flag = false;
      timer = setTimeout(() => {
        flag = true;
      }, delay)
    }
  }
}

const betterFunction = throttle(getData, 1000);
const betterFunctionTwo = throttle(clickFn, 1000);

button.addEventListener(
  "click", function () {
    console.log(this);
    betterFunctionTwo()
  }
);