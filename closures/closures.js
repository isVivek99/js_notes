
// function x(){
//     var a=1;
//     function y(){
//         console.log(a);
//     }
//      return y;
     
// }

// let func = x();
// console.log(func);
// func();


// function x() {
//     var a=900;
//     function y(){
//         var b = 500;
//         function z(){
//             console.log(a,b);
//         }
//         z();
//     }
//     y();
// }

// x();
// -----------------------------------------

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  console.log(add5(2));  // 7