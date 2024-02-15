// let user = {
//   name: "vivek",
//   age: 30,
// };

// let clone = {};

// for (let key in user) {
//   clone[key] = user[key];
// }
// let perm1 = { makeMoney: true };
// Object.assign(user, perm1);

// let clone2 = Object.assign({}, user);

// console.log(user == clone2);
// console.log(user);
// console.log(clone);
// console.log(user == clone);
// --------------------------------------------------
// let user = {
//   userName: "John",
//   age: 30,

//   sayHi() {
//     console.log(this.userName);
//     console.log(this);
//   },
// };
// //   "use strict"
// //   -----------------------------------
// user.sayHi(); // John

// function sayHi() {
//   console.log(this);
// }
// sayHi();
// ---------------------------------------
// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }

//   let user = makeUser();

//   console.log( user.ref );
// // ------------------------------------
// function makeUser() {
//   return {
//     obj: this,
//     name: "John",
//     ref: function ref() {
//       console.log(this);
//       return this;
//     },
//   };
// }

// let user = makeUser();
// console.log(user.obj);
// console.log(user.ref());
// console.log(user.ref().name); // John
// ----------------------------------------------
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
//   this.sayHi = function () {
//     console.log("Hello my name is", this.name);
//   };
// }

// let user = new User("Jack");
// console.log(user);
// user.sayHi();
//   --------------------------------

// let obj = {};

// function A() {}
// function B() {}

// console.log(new A() == new B()); // true
// ---------------------------------------------------

// function Calculator() {
//   this.a,
//     this.b,
//     (this.read = function () {
//       this.a = prompt("enter var 1:");
//       this.b = prompt("enter var 2:");
//     });
//   this.sum = () => +this.a + +this.b;
// }

// let calculator = new Calculator();
// calculator.read();
// console.log(calculator.sum());
// -------------------------------------------

// function Person(name){
//     this.name = name;

//     Person.prototype.printNameArrow = () => {

//         setTimeout(()=>{
//             console.log(this.name);
//         },0)
//     };

//     Person.prototype.printNameFunction = function () {
//         setTimeout(function(){
//             console.log(this.name);
//         },0)
//     };
// }
// class Person1 {
//     constructor(name) {
//         this.name = name;
//     }

//         printNameArrow = () => {

//             setTimeout(()=>{
//                 console.log(this.name);
//             },0)
//         };

//         printNameFunction = function () {
//             setTimeout(function(){
//                 console.log(this.name);
//             },0)
//         };

// }
// let person = new Person("vivek");
// console.dir(Person)
// console.log(person)
// person.printNameArrow();
// person.printNameFunction();

// // --------getter and setter-------------------

// obj = {
//   name: "Sara",
//   surname: "Nairobi",

//   //The get syntax binds an object property to a function that
//   //will be called when that property is looked up. It can also be used in objects

//   get getter() {
//     console.log(`my name is ${this.name} ${this.surname}`);
//   },
//   set _name(value) {
//     if (value.trim().length < 4) {
//       alert("enter a valid name!");
//     }
//     this.name = value.trim();
//   },
// };
// //getter and setter use case
// // we can set the property from outside with validation
// // we can call the property from outside instead of a fn call looks like a property is called.

// obj.getter;
// obj._name = "vivek";
// obj.getter;

// -------

// obj1 = {
//     name:"vivek",
//     func:function(){
//         console.log(this);

//         let print = ()=> {
//             console.log(this.name);
//         }
//         print();
//     }

// }

// obj1.func();
// // ----------------------9PM Sessions---------------

// var x = 4,
//   obj = {
//     x: 3,
//     bar: function () {
//       var x = 2;
//       console.log(this.x); // OUTPUT ????
//       setTimeout(function () {
//         var x = 1;
//         console.log(x, this.x); // OUTPUT ????
//       }, 1000);
//     },
//   };
// obj.bar();
// ----------------------------------------

// const Employee = {
//   firstname: 'John',
//   lastname: 'Doe'
// };
// delete Employee.firstname;
// console.log(Employee.firstname);
// ---------------------------------------

// var obj = {
//   name: "vivek",
//   skills: ["css", "html", "js"],
// };

// var obj2 = Object.assign({}, obj);
// var obj3 = Object.assign({}, obj, { skills: [...obj.skills, "NextJs"] });
// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// --------------Bind Pollyfill---------------------------

// let nameObj = {
//   firstName: "vivek",
//   lastName: "lokhande",
// };

// let printName = function (hometown, state, country) {
//   console.log(
//     "My name is",
//     this.firstName + " " + this.lastName,
//     "from",
//     hometown,
//     state,
//     country
//   );
// };

// let printMyName = printName.bind(nameObj, "pune");
// console.log({ printMyName });
// printMyName("Maharashtra", "India");

// Function.prototype.myBind = function(...args){
//   let self = this;
//   let params = args.slice(1);
//     return function(...args2){
//       console.log(args,args2);
//       self.apply(args[0],[...params, ...args2]);

//     }

// }

// let printMyName2 = printName.myBind(nameObj,"pune");
// printMyName2("Maharashtra",);
//seal locks the object in a form that we cannot delete or add any element,
// we can only acess the properties and change existing properties,
// but nested seal is not possible

// function deepSeal(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "object") {
//       deepSeal(obj[key]);
//     }
//   }
//   return Object.seal(obj);
// }

// const obj = {
//   a: "1",
//   b: "2",
//   c: {
//     d: "3",
//     e: "4",
//   },
// };

// console.log({ obj });
// Object.seal(obj);
// delete obj.c.d;
// console.log({ obj });

// deepSeal(obj);

// delete obj.c.d;
// console.log({ obj });
// --------------merge objects---------

// function merge(...args) {
//   let target = {};
//   let mergeFn = (obj) => {
//     for (key in obj) {
//       target[key] = obj[key];
//     }
//   };

//   for (let i = 0; i < args.length; i++) {
//     mergeFn(args[i]);
//   }
//   return target;
// }

// let obj1 = {
//   name: "vivek",
//   age: 25,
// };
// let obj2 = {
//   qualification: "BE Mech",
//   loves: "Javascript",
// };

// function merge(...args) {
//   let target = {};

//   const mergeFn = (obj) => {
//     for (key in obj) {
//       if (typeof obj[key] === "object") {
//         target[key] = merge(obj[key]);
//         return;
//       }
//       target[key] = obj[key];
//     }
//   };

//   for (let i = 0; i < args.length; i++) {
//     mergeFn(args[i]);
//   }
//   return target;
// }

// let merge = (...arguments) => {
//   // Variables
//   let target = {};
//   let deep = false;
//   let i = 0;
//   // Check if a deep merge
//   if (typeof arguments[0] === "boolean") {
//     deep = arguments[0];
//     i++;
//   }
//   // Merge the object into the target object
//   let merger = (obj) => {
//     for (let prop in obj) {
//       if (obj.hasOwnProperty(prop)) {
//         if (
//           deep &&
//           Object.prototype.toString.call(obj[prop]) === "[object Object]"
//         ) {
//           target[prop] = merge(target[prop], obj[prop]);
//         } else {
//           // Otherwise, do a regular merge
//           target[prop] = obj[prop];
//         }
//       }
//     }
//   };
//   for (; i < arguments.length; i++) {
//     merger(arguments[i]);
//   }
//   return target;
// };

// let obj1 = {
//   name: "prashant",
//   age: 23,
//   nature: {
//     helping: true,
//     shy: false,
//     dance: false,
//   },
// };
// let obj2 = {
//   qualification: "BSC CS",
//   loves: "Javascript",
//   nature: {
//     angry: false,
//     shy: true,
//     marks: [10, 20],
//   },
// };
// let merged = merge(obj1, obj2);
// // console.log({ merged }, merged.nature === obj2.nature);

// // -----------deep check objects objects-----

// function deepEqual(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

//   for (key in obj1) {
//     if (obj1[key] && !obj2[key]) {
//       return false;
//     }
//   }

//   for (key in obj1) {
//     if (obj1[key] === "object" && obj2[key] === "object") {
//       if (!deepEqual(obj1[key], obj2[key])) return false;
//     }

//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// const obj1 = {
//   name: "vivek",
//   details: {
//     x: [1, 2],
//     y: 2,
//   },
// };
// const obj2 = {
//   name: "vivek",
//   details: {
//     x: [1, 2],
//     y: 2,
//   },
// };

// console.log(deepEqual(obj1, obj2));
// -------Filter array of objects on value or index-------

// const arr = [
//   { name: "Amir", id: "1" },
//   { name: "Samlan", id: "2" },
//   { name: "Shahrukh", id: "0" },
// ];

// function filterObject(arr, filter) {
//   let i = -1;
//   for (element of arr) {
//     i++;
//     if (typeof filter === "number") {
//       if (i === filter) return element;
//     } else {
//       for ([key, val] of Object.entries(element)) {
//         if (val === filter) return element;
//       }
//     }
//   }
// }

// console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }
// console.log(filterObject(arr, "Amir")); // { name: "Amir", id: "1" }
// console.log(filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }

// ---- remove circular references------

// const List = function (value) {
//   this.value = value;
//   this.next = null;
// };

// const item1 = new List(10);
// const item2 = new List(20);
// const item3 = new List(30);
// //creating circular reference
// item1.next = item2;
// item2.next = item3;
// item3.next = item1;

// function removeCycle(obj) {
//   const set = new WeakSet([obj]);

//   function iterateObject(obj) {
//     for (key in obj) {
//       if (typeof obj[key] === "object") {
//         //next => reference to next object
//         //check if the weak set has reference to the object
//         //if we find a reference already, then we delete the new found reference
//         if (set.has(obj[key])) {
//           console.log(obj[key]);
//           delete obj[key];
//         } else {
//           set.add(obj[key]);

//           iterateObject(obj[key]);
//         }
//       }
//     }
//   }
//   iterateObject(obj);
// }

// console.log(removeCycle(item1), item1);

// ---------------JSON stringify polyfill -----

function JSON(obj) {
  let target = [];

  const value = (val) => {
    switch (typeof val) {
      case "symbol":
      case "undefined":
        return null;
      case "boolean":
        return val;
      case "number":
        return isFinite(val) ? `${val}` : null;
      case "string":
        return `"${val}"`;
      case "object":
        if (val === null) {
          return null;
        } else if (val instanceof Date) {
          return `"${val.toISOString()}"`;
        } else if (val instanceof Number) {
          return `${val}`;
        } else if (val instanceof String) {
          return `"${val}"`;
        } else if (Array.isArray(val)) {
          return `[${val.map((v) => value(v)).join(",")}]`;
        } else {
          return JSON(val);
        }
    }
  };

  for (key in obj) {
    const res =
      typeof obj[key] === "function" ? null : `"${key}":${value(obj[key])}`;

    target.push(res);
  }
  return `{${target}}`;
}

//string, number, boolean => string
//null=>null
//Symbol & function => nothing
//Constructor of Number, string,=> string
//Object => recursively we find the variables and return
const tOJSONObj = {
  a: 1,
  b: true,
  name: "first",
  c: {
    d: 3,
    e: "vivek",
    r: () => {},
    s: {
      t: Symbol(1),
      z: [1, 2, 3],
    },
  },
  f: null,
};

let obj1 = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: { i: 5, j: 6 },
  },
};
let obj2 = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};
// console.log(JSON(tOJSONObj));
//first remove cycle
console.log(JSON(obj1));
console.log(JSON(obj2));
