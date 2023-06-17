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
//     userName: "John",
//     age: 30,

//     sayHi() {
//       console.log(this.userName);
//       console.log(this);

//     }
//   -----------------------------------
//   };
//   "use strict"

//   user.sayHi(); // John

//   function sayHi(){
//       console.log(this);
//   }
//   sayHi();
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

//     return {
//         obj:this,
//       name: "John",
//       ref : function ref() {
//           console.log(this);
//         return this;
//       }
//     };
//   }

//   let user = makeUser();
//   console.log(user.obj);
//   console.log(user.ref());
//   console.log( user.ref().name ); // John
// ----------------------------------------------
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//     this.sayHi = function(){
//         console.log("Hello my name is", this.name);
//     }

//   }

//   let user = new User("Jack");
//   console.log(user);
//   user.sayHi();
//   --------------------------------

// let obj = {};

// function A() {  }
// function B() {  }

// console.log( new A() == new B() ); // true
// ---------------------------------------------------

// function Calculator(){
//     this.a,
//     this.b,
//     this.read = function(){
//         this.a = prompt("enter var 1:");
//         this.b = prompt("enter var 2:");
//     }
//     this.sum = () => (+this.a+ +this.b);
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
//     name:"Sara",
//     surname:"Nairobi",

//     get getter(){
//         console.log(`my name is ${this.name} ${this.surname}`);
//     }
// ,

//     set _name(value){
//         if(value.trim().length<4){
//             alert("enter a valid name!");
//         }
//         this.name = value;
//     }
// }

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
//         console.log(this.x); // OUTPUT ????
//       }, 1000);
//     },
//   };
//obj.bar();
// ----------------------------------------

// const Employee = {
//   firstname: 'John',
//   lastname: 'Doe'
// };
// delete Employee.firstname;
// console.log(Employee.firstname);
// ---------------------------------------

// var obj = {
//   name:"vivek",
//   skills:["css","html", "js", ]
// }

// var obj2 = Object.assign({},obj);
// var obj3 = Object.assign({},obj,{skills:[...obj.skills,"NextJs"]});
// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// --------------Bind Pollyfill---------------------------

// let nameObj = {
//   firstName : "vivek",
//   lastName : "lokhande"
// }

// let printName = function(hometown,state,country){
//   console.log("My name is",this.firstName+" "+this.lastName,"from",hometown,state,country);
// }

// let printMyName = printName.bind(nameObj, "pune");
// printMyName("Maharashtra","India");

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
