// function x() {
//   var a = 1;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// let func = x();
// console.log(func);
// func();

// ----------
// function x() {
//   var a = 900;
//   function y() {
//     var b = 500;
//     function z() {
//       console.log(a, b);
//     }
//     z();
//   }
//   y();
// }

// x();
// -----------------------------------------

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// var add5 = makeAdder(5);
// console.log(add5(2)); // 7
// ---------------------------------------------

// function outer() {
//   var num = 0;

//   var message = num;
//   return function () {
//     num++;
//     console.log(num);
//     console.log(message);
//   };
// }

// outer()();
// ---------------------------------------------------
// function outer() {
//   var num = 0;

//   var message = `The value of num is ${num}`;
//   return function () {
//     num++;
//     console.log(num);
//     console.log(message);
//   };
// }
// // the references for num and message are different so they don't show same value
// //objects dont have the same case
// outer()();

// ------------------------------

// function myStr(str) {
//   return new Promise((res, rej) => {
//     setTimeout(res, 1000, str);
//   });
// }
// myStr("abc").then((data) => console.log(data));
// myStr("abc").then(console.log); //shorthand for above line
// ------------------------------

// for (let i = 0; i < 8; i++) {
//   let string = "";
//   // printing spaces
//   if (i % 2 == 0) {
//     string += " ";
//   }
//   // printing "#"
//   for (let k = 0; k < 4; k++) {
//     string += "# ";
//   }
//   console.log(string);
// }

//closures advantages, used in function currying, enacpsulation
//closre disadvantage, increases mmemory uses, since we are using references
