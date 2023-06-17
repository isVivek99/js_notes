// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);

//   for (var i = 0; i < 5; i++) console.log("Namaste JS");
// }
// x();

// ----------------------------------------------------

// function x() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }

//   console.log("namaste JS");
// }
// x();

// // ------------------------------------------------

// function x() {
//   for (var i = 0; i < 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
//   console.log("namaste js");
// }

// x();
// // -----------------------------------
// let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId);
