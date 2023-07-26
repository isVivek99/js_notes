//  //  // ------  implicit binding ----------//  //  //
// function makeUser() {
//   return {
//     name: "vivek",
//     ref: this,
//     //ref doesnt have a reference which is being bound,
//     // hence it refers to window object
//     ref2() {
//       //ref2 is being called on user, hence it has a reference
//       return this;
//     },
//   };
// }
// const user = makeUser();
// console.log("this:", user.ref);
// console.log(user.ref2().name);
// const fn = user.ref2;

// ------------------
// let user = {
//   name: "vivek",
//   getDetails() {
//     console.log(this.name);
//     function getName() {
//       console.log(this, this.name); // refers to wihndow object
//     }
//     getName();
//   },
// };
// user.getDetails();

// // --------------------
// let john = {
//   year: 1985,

//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//     let self = this;

//     function inner() {
//       console.log(self);
//       console.log(this);
//     }
//     inner();

//     let inner2 = () => {
//       console.log(this);
//     };
//     inner2();
//   },
//   returnThis: () => {
//     console.log(this);
//   },
// };
// // john.calcAge(); //{john}, 31
// john.calcAge();
// john.returnThis();
// let func = john.calcAge;
// func(); //window obj , undefined
// // ------------------------------------------

/*
why printName does not resolve to the inside object variable is
 because arrow functions (() => {}) do not bind their own this value. 
 Instead, they inherit the this value from their surrounding context, which, 
in this case, is the global scope or the nearest enclosing non-arrow function.
*/
// let namea = "vivek";
// var name = "lokhande";
// let john = {
//   year: 1985,
//   name: "jon",

//   printName: () => {
//     console.log("hi " + this.name);
//   },
//   printName2() {
//     console.log("hi " + this.name);
//   },
// };

// john.printName();
// john.printName2();

// function fun() {
//   console.log("asd");
// }
// var x = Object.getOwnPropertyNames(fun);
// console.log(x);
// console.dir(fun);
// // ----------------------------------

// function Pet(name) {
//   this.name = name;

//   Pet.prototype.getaName = function () {
//     return this;
//   };
//   // this.getName = function(){return this.name};

//   this.getName = () => this.name;
// }
// console.dir(Pet);
// const cat = new Pet("Fluffy");
// console.log(cat.getName());
// let printName = cat.getName;
// console.log(printName());
// const { getName } = cat;
// console.log(getName());
// console.log(cat.getaName());
// // ---------------------------------

// const object = {
//   message: "Hello, World!",
//   fun: function () {
//     console.log(this.message); // What is logged?
//   },
// };

// function logMessage() {
//   console.log(this.message); // What is logged?
// }

// const boundLogMessage = logMessage.bind(object);
// console.log({ object: object });
// console.dir(boundLogMessage);
// setTimeout(object.fun, 1000); //undefined
// setTimeout(boundLogMessage, 2000);
// // ---------------------------------------------
// var length = 4;
// function callback() {
//   console.log(this, this.length); // What is logged?
// }

// const object = {
//   length: 5,
//   method() {
//     console.log(arguments, this);
//     //arguments is an array of elements, i.e. an object
//     /*
//     {
//       0:callback(),
//       1:1,
//       2:2
//     }
//     hence when we call the callback method it returns the length of the object array
//     */
//     arguments[0]();
//   },
// };

// object.method(callback, 1, 2);

// // ------------------------------

//que:
//implement: calc.add(10).mul(5).sub(30)

// const calc = {
//   total: 0,
//   add(param) {
//     this.total += param;
//     return this;
//   },
//   sub(param) {
//     this.total -= param;
//     return this;
//   },
//   mul(param) {
//     this.total *= param;
//     return this;
//   },
// };

// const calc1 = {
//   total: 0,
//   add(param) {
//     this.total += param;
//     return this;
//   },
//   mult(param) {
//     this.total *= param;
//     return this;
//   },
// };

// const result = calc.add(10).mul(5).sub(30);
// const result2 = calc1.add(10);
// console.log(result.total, result2.total);
// // ----------------------

// const user = {
//   name: "vivek",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(user.logMessage, 1000); //op: undefined since we have passed this fn as a callback
// // and the context is not preserved

// setTimeout(() => {
//   user.logMessage();
// }, 1000); //op: vivek; since we have passed this fn in a callback and the context is preserved
