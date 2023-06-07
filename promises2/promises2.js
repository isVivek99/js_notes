// function loadScript(src, callback){

//     let script =   document.createElement("script");
//     script.src = src;
//     console.log(script);
//     script.onload = ()=>(callback(script));
//     script.onerror = ()=>(callback(new Error(`Script load error for ${src}`)));
//     document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
//     (script,error)=>{
//         console.log(`in calback,${script.src} is loaded!`)
//         if(error){
//             console.log(error);
//         }else{
//             loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',(script)=>{
//                 console.log(`in calback2,${script.src} is loaded!`);

//                 loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
//                 (script,error)=>{
//                     if(error){
//                         console.log("error");
//                     }else{
//                         console.log(`${script.src} script3 loaded`);
//                     }
//                 }
//                 )
//             })
//         }

//     })
// ----------------------------------------------
// callback hell
// function one(callback) {
//   console.log("call func1");
//   callback();
// }
// function two(callback) {
//   setTimeout(() => {
//     console.log("call func2");
//     callback();
//   }, 1000);
// }

// function three() {
//   console.log("call func3");
// }

// one(function () {
//   two(function () {
//     three();
//   });
// });

// ----------------------------------------------

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("result dasd"), 2000);
// })
//   .finally(() => console.log("Promise ready"))
//   .then((result) => console.log(result));
// --------------------------------------------
// let promise = new Promise(function (resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then((data) => console.log(data));
// -----------------------------------------------

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(1);
//     }, ms);
//   });
// }

// delay(3000)
//   .then((data) => alert(`runs ${data}`))
//   .catch((err) => console.log(err));
// ------------------------------------------------

// new Promise((resolve, reject) => {
//   throw new Error("Whoops!");
// });

// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// });

// p1.catch((err) => console.log(err));

// ----------------------------------------------------

// p2 = new Promise((resolve, reject) => {
//   resolve("ok");
// });
// p2.then((data) => {
//   console.log(data);
//   throw new Error("whoops");
// }).catch((err) => console.log(err));
// ----------------------------------------------

// new Promise((resolve) => setTimeout(() => console.log(resolve(1)), 3000)),
// ----------------------------------------------
// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then(console.log);
// ------------------------------------------
// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then((res) => {
//   console.log(res);
//   res.forEach((item) => console.log(item));
// });
// ------------------------------------

// pr = Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//   }),
//   2,
//   3,
// ]); // 1, 2, 3

// pr.then(console.log);
// //--------------------------------------------
// Promise.allSettled([
//         new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//         new Promise(reject => setTimeout(() => reject("rejected"), 2000)), // 2
//         new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
//       ]).then(res=>{
//         //   console.log(res);
//           res.forEach(item=>console.log(item));
//   })
// ---------------------
// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 4000))
//   ]).catch(alert); // 1
//   ---------------------------------
// let p1 = Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(1), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(3), 3000))
//   ])// 1

//   p1.then(console.log)
//     .catch(err=>console.log(err.errors))

// -------------Promisification--------------------

// function getFruits(callback) {
//   let fruits = ["apple", "grapes", "banana"];
//   setTimeout(() => callback(fruits), 1000);
// }

// function promisify(func) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       try {
//         func(resolve);
//       } catch (e) {
//         reject(e);
//       }
//     });
//   };
// }

// const promisified = promisify(getFruits);
// promisified().then(console.log).catch(console.log);
// --------------------promisfy-------------------

// const getSumAsync = (num1, num2, callback) => {
//   if (!num1 || !num2) {
//     return callback(new Error("Missing arguments"), null);
//   }
//   return callback(null, num1 + num2);
// };

// function promisify(fn) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       function customCallback(err, ...res) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res.length === 1 ? res[0] : res);
//         }
//       }
//       args.push(customCallback);
//       fn.call(this, ...args);
//     });
//   };
// }

// const getSumPromise = promisify(getSumAsync);
// getSumPromise(23, 34)
//   .then(console.log)
//   .catch((err) => console.log(err));

// -------------------async-await--------------------------

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise; // wait until the promise resolves (*)
//   console.log(result); // "done!"
// }

// f();
//   ----------------------------
// async function showAvatar() {

//     // read github user
//     let githubResponse = await fetch(`https://api.github.com/users/vickydonor`);
//     let githubUser = await githubResponse.json();

//     // show the avatar
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     // wait 3 seconds
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//     img.remove();

//     return githubUser;
//   }

//   console.log(showAvatar());
// //   -------------------------------------------------
// class Thenable {
//     constructor(num) {
//       this.num = num;
//     }
//     then(resolve, reject) {
//       // resolve with this.num*2 after 1000ms
//       setTimeout(() => resolve(this.num * 2), 1000); // (*)
//     }
//   }

//   async function f() {
//     // waits for 1 second, then result becomes 2
//     let result = await new Thenable(1);
//     console.log(result);
//   }

//   f();
// // ========================
//   async function loadJson(url){
//       try{
//         let response = await fetch(url);
//         if(response.status==200){
//             return response.json();
//         }else{
//             throw new Error(response.status);
//         }
//       }catch(error){
//         console.log(error);
//       }

//   }
//   loadJson('no-such-user.json')
//-----------------------------------

// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }

//   async function loadJson(url) {
// try{
//     let response =  await fetch(url)
//     if (response.status == 200) {
//         return response.json();
//     } else {
//         throw new HttpError(response)
//     }
// }catch(err){
//     console.log(err);
// }

// }

//   // Ask for a user name until github returns a valid user
//   async function demoGithubUser() {
//     let name = prompt("Enter a name?", "iliakan");

//     try{
//         let user = await  loadJson(`https://api.github.com/users/${name}`)
//     alert(`Full name: ${user.name}.`);
//     } catch(err){
//         if (err instanceof HttpError && err.response.status == 404) {
//           alert("No such user, please reenter.");
//           return demoGithubUser();
//         } else {
//           throw err;
//         }
//       }
//   }

//   demoGithubUser();

// ----------------------------------------------
// const numberSeries = function (i, time) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log(i);
//       resolve(i);
//     }, time);
//   });
// };

// let queue = Promise.resolve();

// for (let i = 0; i <= 1; i++) {
//   queue = queue.then(function () {
//     console.log(queue);
//     return numberSeries(i, Math.floor(Math.random() * 6000));
//   });
//   console.log(queue);
// }
// -------------------------------------------

// Promise.resolve('Success!')
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return 'actually, that worked'
//   })
//   .catch(data => {
//     throw Error('The fails!')
//   })
//   .catch(error => console.log(error.message))

//  -----------------------------------------------
// Promise.resolve("Success!")
//   .then(() => {
//     throw Error("Error all the way!");
//   })
//   .catch((err) => {
//     throw Error(err.message);
//   })
//   .catch((err) => {
//     throw new Error(err.message);
//   })
//   .catch((error) => console.log(error.message));
// ------------------------------------------------

// promise.all() polyfill

const promises = [
  new Promise((resolve) => resolve(1)),
  new Promise((resolve) => resolve(3)),
  Promise.resolve(2),
  Promise.reject("bar"),
  42,
];

function newPromiseAll(promises) {
  const results = [];
  let completed = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          results[i] = res;
          completed += 1;
          if (completed === promises.length) resolve(results);
        })
        .catch((err) => reject(err));
    }
  });
}

// function newPromiseAllSettled(promises) {
//   const results = [];
//   let promisesCompleted = 0;
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < promises.length; i++) {
//       promises[i]
//         .then((res) => {
//           results[i] = { status: "fullfilled", value: res };
//         })
//         .catch((e) => {
//           results[i] = { status: "rejected", reason: `${e}` };
//         });
//     }
//     resolve(results);
//   });
// }

// Promise.all(promises)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
const response = newPromiseAll(promises);
response.then((res) => console.log(res)).catch((err) => console.log(err));

// const response2 = newPromiseAllSettled(promises);
// response2.then((res) => console.log(res));
