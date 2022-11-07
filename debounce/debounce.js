//eg.1
const displayarea = document.querySelector("#display-area");

function getData(x) {
  console.log(x);
  displayarea.innerHTML = x;
  console.log(displayarea.innerHTML);
}

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    let context = this;
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const betterFunction = function (value) {
  debounce(getData(value), 1000);
};

// const debounce = function(func, delay){
//     let timer;
//     return function(...args){
//         //console.log(...args);
//         clearTimeout(timer);
//         timer = setTimeout(()=>{func(...args)},delay);
//     }
// }
