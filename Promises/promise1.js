// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("oops")), 1000);
// });
// console.log(myPromise);
// console.log(typeof myPromise);
// myPromise.then((data) => console.log(data)).catch((err) => console.log(err));

// ------------------------------------------------------
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_name]} selected`);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("order recieved, production started");
//     setTimeout(() => {
//       console.log("fruit has been chopped");
//     }, 2000);
//   }, 0000);
// };

// order(0, production);
//  above is a example of callback hell , if we want to run async functions
// now to demonstrate promise chaining
// -----------------------------------------------------------------------
// const isShopOpen = true;

// const order = (time, work)=>{

//     return new Promise((resolve,reject)=>{
//         if(isShopOpen){
//             setTimeout(()=>{
//                 resolve(work())
//             },time)

//         }else{
//             reject(console.log("shop closed!"));
//         }
//     })
// }

// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected!`))
//     .then(()=>{
//         return order(0000, ()=>console.log("production started!"))
//     })
//     .then(()=>{
//         return order(2000, ()=>console.log("fruit was chopped!"))
//     })
//     .then(()=>{
//         return order(1000,()=>console.log("ice-cream was served!"))
//     })
//     .catch(()=>console.log("customer left"))
//     .finally(()=>{
//         console.log("shop is closed now bbye!");
//     })
// ------------------------------------------------------------------------------

// let toppingChoice = () => {
//     return new Promise((resolve, reject)=>{
//         if(isShopOpen){
//             setTimeout(()=>{
//                 resolve(console.log("whuch topping u want?"));
//             },2000)
//         }else{
//             reject("customer left!")
//         }

//     })
// }

// async function kitchen(){
//     console.log("A");
//     console.log("B");
//     console.log("C");
//     await toppingChoice();
//     console.log("D");
//     console.log("E");
// }
// kitchen();
// console.log("dishes");
// console.log("tables");

// --------------------------------------------------------
{
  /*
  Callback hell, or the "pyramid of doom," emerged as a consequence of JavaScript's asynchronous nature and the lack of built-in constructs for handling asynchronous operations in early versions of the language.

In the early days of JavaScript, many operations were synchronous, meaning they would block the execution of code until they were complete. However, as web applications became more sophisticated, there was a need for non-blocking, asynchronous operations, particularly when dealing with tasks like making HTTP requests or handling user interactions.

Callbacks were introduced as a way to handle these asynchronous operations. They allow you to specify a function that will be executed once an asynchronous operation is complete. This approach worked, but it led to deeply nested code structures, which became known as callback hell.

Callback hell was a natural consequence of trying to manage multiple asynchronous operations and their dependencies using callbacks. It was challenging to read and maintain code structured in this way, which hindered the development process and made codebases more error-prone.

As a result, developers sought out alternative patterns and tools to address this issue. Promises and later async/await were introduced to provide cleaner, more readable solutions for handling asynchronous code, 
  */
}

// function first(callback) {
//   console.log("in first");
//   callback();
// }
// function second(callback) {
//   setTimeout(() => {
//     console.log("in second");
//     callback();
//   }, 2000);
// }
// function third() {
//   console.log("in third");
// }

// first(function () {
//   second(function () {
//     third();
//   });
// });
// ==============================

// function first() {
//   return new Promise((resolve, reject) => {
//     resolve("resolved func one");
//   });
// }

// function second() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("resolved func 2"), 2000);
//   });
// }

// function third() {
//   console.log("third");
// }

// // first()
// //   .then((res) => {
// //     console.log(res);
// //     return second();
// //   })
// //   .then((res2) => {
// //     console.log(res2);
// //     third();
// //   })
// //   .catch((err) => console.log(err));

// Promise.all([
//   first().then((res) => console.log(res)),
//   second().then((res) => console.log(res)),
//   third(),
// ]);

// ------------------------------------------------------------------

// function first(){
//     console.log("in first");
// }

// async function second(){
//     await setTimeout(()=>{
//         console.log("in second");
//     },2000)

// }
// function third(){
//     console.log("in third");

// }

// async function main(){
//     first();
//     await second();
//     third();
// }
// console.log(main);
// main();

// ----------------------------------------------------------------------
// const calculate = (a,b,c) => {

//     return new Promise((resolve, reject) => {

//         if(a<0 || b<0 || c<0)
//             reject("enter positive numbers");
//         setTimeout(()=>{
//             resolve(a+b+c)
//         },2000)
//     })
// }

// calculate(1,2,3)
// .then((res)=>{
//     console.log(res);
//     return calculate(res,-4,5);
// }).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// -----------------------------------------------------------------------
// let p1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, 'p1asd');
// });

// p1
// .then((data)=>console.log(data))
// ------------------------------------------
// let p1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, 'p1');
// });

// let p2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 1000, 'p2');
// });

// let p3 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 1200, 'p3');
// });

// let p4 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 300, 'p4');
// });

// let p5 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 800, 'p5');
// });

// let promise = Promise.all([p1, p2, p3, p4, p5]);

// promise

// .then(function(data) {
//     console.log(data);
//     data.forEach(function(data) {
//         console.log(data);
//     });
// })

// .catch(function(error) {
//     console.error('error', error);
// });

// ------------------------------------------------------

// async function run(){
//     return new Promise((res, rej)=>{
//     console.log("Hello roc8")
//     setTimeout (res, 2000, "Hello World")
//     console.log("Hello JS")
//     })
//     }

//     async function print(){
//         console.log("Printing")
//         const r = await run();
//         console.log(r)
//         console.log(" Done")
//     }

//     print().then(res=>console.log(res))
//     //printing
//     //hello roc8
//     //hello js
//     //hello world
//     //done
//     //undef
// -------------------------------------------------

// function job(num){

//     return new Promise( (resolve, reject) =>{
//         if(isNaN(num)){
//             reject(new Error('error'))
//         }else if(num%2===0){
//             setTimeout(()=>{
//                 resolve('even')
//             },2000)
//         }else{
//             setTimeout(()=>{
//                 resolve('odd')
//             },1000)
//         }
//     })
// }

// job(12)
// .then((console.log))
// // .catch((err) => console.log(err))

// ------------------------------------------------------------

// var p = Promise.all([]);
// console.log(p);
// var x = p.then((data) => {
//   console.log(data);
// });

// console.log(x);
// x.then((data) => {
//   console.log(data);
//   console.log(x);
// });
// console.log("----------------------------");

// var p =Promise.all([]);
// console.dir(p);
// var  x = p.then(data=>{
// console.dir(data)
// })

// console.dir(x)
// --------------------

// let promise1 = new Promise((resolve,reject) => {

//     setTimeout(() => {

//       resolve('first');

//     },2000)
//   })

//   promise1
//   .then((x) => {
//      return promise2;
//   })
//   .then(y => console.log(y))
//   .catch(err => console.log(err));

//   let promise2 =  new Promise((resolve,reject) => {
//     console.log("here in 2 ");
//        setTimeout(() => {

//             resolve('second');

//        },3000);
//   })
//   let promise3 = new Promise((resolve,reject) => {
//     console.log("here");
//      setTimeout(() => {
//        resolve('third');
//      })

//   },5000);
// -------

//failed attemp at making a api call in a calback hell

// const getTodo = async (id, callback) => {
//   setTimeout(() => {
//     const resp = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     callback(resp);
//   }, 2000);
// };

// getRepositories = (title, callback) => {
//   callback(title);
// };

// getTodo(1, (todo) => {
//   console.log("todo", todo);
//   getRepositories(todo.title, (repos) => {
//     console.log(repos);
//   });
// });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("foo");
  }, 300);
});

myPromise
  .then(
    (resp) => {
      console.log(resp);
    }
    // (resp) => {
    //   console.log("reject", resp);
    //   return "vivek";
    // }
  )
  .then(
    (resp) => console.log(resp)
    // (resp) => console.log("reject", resp)
  )
  .catch((err) => {
    throw new Error(err);
  });
