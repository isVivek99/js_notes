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

// const debounce = (fn, delay) => {
//   let timerId;
//   return function (...args) {
//     console.log(this);
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       fn.call(this, ...args);
//     }, delay);
//   };
// };

// const betterFunction = debounce(getData, 300);

// function debounce(fn, delay) {
//   let timerId;
//   return function (value) {
//     if (timerId) clearTimeout(timerId);

//     timerId = setTimeout(() => {
//       fn(value);
//     }, delay);
//   };
// }

// const betterFunction = debounce(getData, 300);
