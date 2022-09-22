
//console.log(x);

// console.log(x_let);

//     getData();
//     const x_let = 1;

//     function getData(){
//         console.log("hello vivek!");
//     }
// -------------------------------
// var test = 1;
// function functionHoisting() {
//   test = 10;
//   return;
// function test() {}
// }
// functionHoisting();
// console.log(test);
// -------------------------------------
alert(a());
function a() {
  function b() {
    return 3;
  }
  return b();
  function b() {
    return 8;
  }
}