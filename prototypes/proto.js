// class Rabbit {
//   constructor(type) {
//     this.type = type;
//     this.speak = function () {
//       console.log(`${this.type} rabbit wants a carrot`);
//     };
//   }

//   code() {
//     console.log("in code");
//   }
// }
// Rabbit.prototype.teeth = "small";
// // console.dir(Rabbit);
// wierdRabbit = new Rabbit("wierd");
// console.log({ wierdRabbit }, wierdRabbit.teeth);
// // wierdRabbit.teeth = "sharp";
// wierdRabbit.speak();
// console.log(wierdRabbit);
// console.dir(Object.getPrototypeOf(Rabbit));
// console.dir(Function.prototype);
// console.log(Object.getPrototypeOf(Rabbit) === Function.prototype);

// -----------------------------

// let user = {
//   name: "vivek",
//   surname: "lokhande",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `my name is ${this.name} ${this.surname}`;
//   },
// };

// let admin = {
//   __proto__: user,
// };

// console.log(admin);
// console.log(admin.fullName);
// admin.fullName = "Jyoti Lokhande";
// console.log(admin.fullName);
// console.log(user.fullName);
// console.log(admin);
// console.log(user);
// --------------------------------------

// animal has methods
// let animal = {
//   isSleeping: false,
//   walk() {
//     if (!this.isSleeping) {
//       console.log(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal,
// };

// // modifies rabbit.isSleeping
// rabbit.sleep();
// //rabit.__proto__ is same as the [[prototype]] object inside the rabbit object
// console.log(rabbit); // true
// console.log(animal);
// ---------------------------------------

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// console.log(Object.keys(rabbit));
// console.log(rabbit);
// // for (let key in rabbit) {
// //   console.log(key);
// // }
// for (let key in rabbit) {
//   console.log("key:", key);
//   let isOwn = rabbit.hasOwnProperty(key);
//   if (isOwn) console.log(key);
// }
// ---------------prototype in function-------------

// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }
// function bar() {}

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit");
// console.dir(Rabbit);
// console.dir(bar);
// console.log(rabbit);
// console.log(rabbit.eats);
// console.log(Number.prototype);
// console.log(eval("{nam:1}"));
// ----------------------------------

// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`my name is ${this.name}`);
//   }
// }

// let wierdRabbit = new Rabbit("dancer");
// console.dir(Rabbit);
