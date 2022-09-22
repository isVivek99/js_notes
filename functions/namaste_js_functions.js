//function statement
// function a(){
//     var x=10;
//     console.log(x);
// }
// ---------------------------------------

// function b(){
//     var x=100;
//     c();
//     function c (){
//         console.log("in C");
//     }
//     console.log(x);
// }
// b();

// --------------------------------

//function expression
// var  a = function(){
//     console.log("function expression");
// }

// //named function expression
// var b = function xyz(){
//     console.log(xyz);
// }

// a();
// b();

//first class functions
// -------------------------------------

// function bar() {
//     foo = 10;
//     return foo;
//     function foo() {}
//   }
//   console.log(typeof bar());

// // -------------------------------------------

// function testHack() {
//     var test = [];
//     for (var z = 0; z < 5; z++) {
//       test[z] = function foo() {
//         return z;
//       };
//     }
//     return test;
//   }
//   var testArray = testHack();
//   console.log(testArray[4]());

// --------------------------------------------

// function bar() {
//   foo;
//   return foo;
//   function foo() {}
// }
// console.log(bar());
// console.log(typeof bar());
// --------------------------------

// function Person(name){
//   this.name = name;

//    Person.prototype.speak = () =>{
//      console.log(`my name is: ${this.name}`);
//    }
//    Person.prototype.speaker = function (){
//     console.log(`my name is: ${this.name}`);
//   }

// }

// console.dir(Person);
// let vivek = new Person("vivek");
// vivek.speak();
// vivek.speaker();
// // -----------------------------------

// obj = {
//   name:"vivek",
//   speak: ()=>{
//     console.log(`my name is: ${this.name,this}`);
//   }
// }
// obj.speak();
// ------------------------
// function foo() {
//   let a = (b = 0);
//   a++;
//   return a;
// }

// foo();
// console.log(typeof a);
// console.log(typeof b);
// ------------------------------
// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     // outer func
//     console.log(this.foo);
//     console.log(self.foo);
//     (function () {
//       // inner func
//       console.log(this.foo);
//       console.log(self.foo);
//     })();
//   },
// };
// myObject.func();
// ----------------------------------
// var globalVal = 1;
// (function (outerArg) {
//   var outerVal = 2;
//   (function (innerArg) {
//     var innerVal = 3;

//     console.log(innerVal);
//     console.log(outerVal);
//     console.log(globalVal);
//     console.log(innerArg);
//     console.log(outerArg);
//   })(456);
// })(123);
// -------------------------------
// var length = 10;

// function fn() {
//   console.log(this.length);
// }

// var myObj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     console.log(arguments);
//     arguments[0]();
//   },
// };

// myObj.method(fn, 1);
// -------------------------------

// --------------------------------
// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1,
//       y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();
// --------
// 1 < 2 < 3
// 3 > 2 > 1
// 3 > 2 > 0
// --------------------------------------------

// function sum(a){

//  return  function(b){
//     return a+b;
//   }
// }
// console.log(sum(2,3));
// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement("button");
//   btn.appendChild(document.createTextNode("Button " + i));
//   //  anonymous function
//   (function (i) {
//     btn.addEventListener("click", function () {
//       console.log(i);
//     });
//   })(i);
//   document.body.appendChild(btn);
// }
// ------------------------------------------------
// function foo() {
//   let a = (b = 0);
//   a++;
//   return a;
// }
// foo();
// typeof a;
// typeof b;
// ---------------------------------------
// var a=99;
// function fun(){
//    a=100;
//    console.log(a);
//   }
//   fun();
//   console.log(a);
// --------------------------------
// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   };
//   setTimeout(log, 100);
// }
// ---------------------------------------

// function *generator(i){
//   yield i;
//   return "finished";
// }

// const gen = generator(10);
// console.log(gen);
// console.log(gen.next());
// console.log(gen.next());
// ------------------normal func vs anonymous func----------------------

let fun = function(){
  console.log("anonymius bthc");
}
function gun(){
  console.log("not anonymius bthc");
}
fun();
console.log(fun.prototype.constructor);
console.log(gun.prototype.constructor);
// ----------------------------------------------
var host = document.querySelector("#host");

var root = host.attachShadow({mode: 'open'});
var div = document.createElement('div');
div.textContent = "THis is shadow dom";
root.appendChild(div);
console.dir(root);