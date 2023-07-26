//eg.1
const displayarea = document.querySelector("#display-area");

function getData(x) {
  //fetch data and show
  console.log({ x });
  displayarea.innerHTML = x;
}

// const debounce = (fn, delay) => {
//   let timer;
//   return function (...args) {
//     let context = this;

//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// };
const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

// var timer;
// function debounce(fn, delay, val) {
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     fn(val);
//   }, delay);
// }

// const betterFunction1 = (val) => debounce(getData, 300, val);
