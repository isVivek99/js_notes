// function multiply(x, y) {
//   console.log(x * y);
// }

// let multByTwo = multiply.bind(this, 2);
// multByTwo(3);
// ---------------------------
// function multiply2(x) {
//   return function (y) {
//     console.log(x * y);
//   };
// }
// let multByFive = multiply2(2)(5);
// multByFive(5);
// ------------------------------

// function calcVolume(l,b){
//     let calcArea = l*b;
//     return function(h){
//         return (calcArea * h);
//     }
// }

// let area = calcVolume(5,6);
// let volume = area(10);
// console.log(volume);
// ---------------------------------

// function job(callback1, callback2) {
//     setTimeout(()=>callback1(),2000);
//     for(let i=0; i<3; i++){
//         setTimeout(()=>callback2(),1000)
//     }
// }

// job(()=>console.log("one"),()=>console.log("two"));
// --------------------------
// currying, i.e. add 2 numbers
// function add(param1) {
//   return function (param2) {
//     return function () {
//       console.log(param1 + param2);
//       return param1 + param2;
//     };
//   };
// }
// console.log(add(5)(2)());

//---------------------------
// inifinte currying

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }
// console.log(add(5)(2)(4)(8)());

// return func
// add => 5
// return func
// func => 2 =>add(5+2)
// return func
//func => 4 => add(7+4)
// return func
// func => 8 => add(11+8)
// return func
// func => () => return 19
