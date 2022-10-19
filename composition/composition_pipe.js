// const double = (x) => x * 2;
// const square = (x) => x * x;
// // Tradition approach
// var output1 = double(2);
// var output2 = square(output1);
// console.log(output2);
// // variant two
// var output_final = square(double(2));
// console.log(output_final);

//compose function

const double = (x) => x * 2;
const square = (x) => x * x;

// function compose(...functions) {
//   return function (args) {
//     return functions.reduceRight((arg, fn) => fn(arg), args);
//   };
// }
function compose(...functions) {
  return function (param) {
    let result = param;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}
// we can do pipe just by changing the the iteration from leftToRight
// function composition
var output_final = compose(square, double)(2);
console.log(output_final);
