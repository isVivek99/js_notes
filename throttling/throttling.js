const displayarea = document.querySelector("#display-area");
const button = document.querySelector("#btn");
button.addEventListener(
  "click",
  throttle(() => {
    console.log("click");
  }, 1500)
);

function getData(x) {
  displayarea.innerHTML = x;
}

function throttle(fn, limit) {
  let flag = true;
  let timer;
  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      console.log(args);
      flag = false;
      timer = setTimeout(() => {
        console.log("timeount-call");
        flag = true;
      }, limit);
    }
  };
}

const betterFunction = throttle(getData, 1000);
