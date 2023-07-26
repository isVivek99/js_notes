// let myName = {
//   firstName: "vivek",
//   lastName: "lokhande",
//   printfullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// // myName.printfullName();

// let newPrintFullName = myName.printfullName;

// let otherName = {
//   firstName: "salam",
//   lastName: "valekum",
// };
//function borrowing
// myName.printfullName.call(otherName);
// otherName.printfullName = newPrintFullName;
// otherName.printfullName();

// ---------------------------bind--------------------------

// let user = {
//   firstname: "vivek",
//   sayHi() {
//     console.log("hi " + this.firstname);
//   },
// };

// setTimeout(user.sayHi, 1000); //undefined
// setTimeout(() => {
//   user.sayHi();
// }, 1000); // hi vivek

// --------------------------using bind--------------------------

// let user = {
//   firstname: "vivek",
//   sayHi() {
//     console.log("hi " + this.firstname);
//   },
// };
// // console.dir(user.sayHi);
// let sayHi = user.sayHi.bind(user);
// // console.log(user);
// console.dir(sayHi);
// setTimeout(sayHi, 1000); // hi vivek (no error since function is bound)

// // ---------------binding arguments-----------------------------------

// function mul(a, b) {
//   // console.log(a,b);
//   return a * b;
// }

// let double = mul.bind(null, 2);
// console.dir(mul);
// console.dir(double); //bind takes boundThis and bound args, which can be seen in its prototype

// console.log(double(3));
// console.log(double(4));
//   ----------------------------call and apply----------------------------

// // eg.1
let name1 = {
  name: "vivek",
  lastName: "lokhande",
};

let printName = function () {
  console.log(arguments);
  console.log(
    "my name is",
    this.name + "",
    this.lastName,
    "and i am from",
    arguments[0] + "," + arguments[1]
  );
};

printName.call(name1, "pune", "maharashtra");
printName.apply(name1, ["pune", "maharashtra"]); //similar to call but takes array of parameters as args
printNameBound = printName.bind(name1, "pune", "maharashtra"); // similar to
// call, but returns a function to be ran later, wheras call will immediatly invoke
console.dir(printNameBound);
console.log(printNameBound());

// //eg.2---------------------------------------------------
// function f() {
//   console.log(this.name);
// }

// let fa = f.bind({ name: "vivek" });
// console.dir(fa);
// fa();

// -------------myBind-------------------------------------

let name1 = {
  name: "vivek",
  lastName: "lokhande",
};

function printName(hometown, state, area) {
  console.log(
    "my name is",
    this.name + "",
    this.lastName + " from " + hometown,
    state,
    area
  );
}

Function.prototype.myBind = function (context, ...args) {
  console.log(context, ...args);
  return (...args2) => {
    console.log(name1);
    this.apply(context, [...args, ...args2]);
  };
};

Function.prototype.myBind = function name(context, args) {
  return (...args2) => {
    console.log({ this: this });
    this.apply(context, [...args, ...args2]);
  };
};

const printMyName = printName.myBind(name1, ["pune", "india"]);
console.dir(printMyName);
printMyName("hingne");
// -------------myCall-------------------------------------

let name1 = {
  name: "vivek",
  lastName: "lokhande",
  printName: function (hometown, state, area) {
    console.log(
      "my name is",
      this.name + "",
      this.lastName + " from " + hometown,
      state,
      area
    );
  },
};
let name2 = {
  name: "viveks",
  lastName: "lokhandes",
};

Function.prototype.myCall = function (context, ...args) {
  console.log(this);
  context.myFn = this;
  context.myFn(...args);
};

const pName = name1.printName;
pName.myCall(name1, "pune", "india", "hingne");
