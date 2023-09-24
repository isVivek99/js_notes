// --------------------IIFE--------------------
var test = (function test(x){
    delete x;
    return x;
  })(0)
  console.log(test)
// //   ----------------------------------

// (function (window) {
//   "use strict";
//   function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   Person.prototype.sayHello = function () {
//     console.log("hi may name is " + this.name, "and my age is" + this.age);
//   };
//   window.Person = Person;
// })(window)(
//   // ------------
//   function name() {
//     console.log("iife");
//   }
// )();

// function init() {
//   console.log(this);
//   let person = new Person("vivek", 22);
//   person.sayHello();
//   console.log(person);
// }
// init();

// const constVar = "some string";
// let letVar = "some string";
// var varVar = "some string";

// (function () {
//   console.log(window.constVar); // prints undefined
//   console.log(window.letVar); // prints undefined
//   console.log(window.varVar); // prints 'some string'
// })();
