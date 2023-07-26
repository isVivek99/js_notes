// array = [1, 2, 3, 4];
// let newArr = array.splice(0, 2, { fuckin: "arrays" });
// // let newArr = array.splice(0, 10, 20, 30); // splice(startIndex, noOfEle),
// // returns spliced array
// //
// console.log(array, newArr); //[{..},3,4] [1,2]

// --------slice--------------------------

// array = [1, 2, 3, 4];
// console.log(array.slice(0, 3), array); //slice returns new array slice(startIndex, delimiter)
// array2 = [6, 7, 8, 9];
// console.log(array2.slice(-1, 0));
// console.log(array2.slice(0, -1)); //always put start indedx as greater left to right ascending
// ----------concat-------------------
// let arr = [1, 2];
// let arraylike = {
//   0: "something",
//   1: "else",
//   [.isConcatSpreadable]: true,
//   length: 2,
// };

// console.log(arraylike);
// // alert(arr.concat(arraylike));
// //console.log(newarr);

// let obj = { [[]]: "dance" };
// console.log(obj);
// ------------------------foreach---------------

// arr=["ali","abdal","is","rich",NaN,]
// arr.forEach((element,index,array) => {
//     console.log(element,index,array);
// });

// // ---------------------includes and indexOf()----

// console.log(arr.indexOf("is"));
// console.log(arr.includes("is"));
// console.log(arr.includes(NaN));
// // =========reverse=----

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);
// ----------------------------------------
// for (const n of arr) {
//   console.log(n);
// }

// const iter = arr[Symbol.iterator]();
// console.log(iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function squared(max) {
//   return {
//     [Symbol.iterator]() {
//       let n = 0;

//       return {
//         next() {
//           n++;
//           if (n <= max) {
//             return {
//               value: n * n,
//               done: false,
//             };
//           }
//           return {
//             value: undefined,
//             done: true,
//           };
//         },
//       };
//     },
//   };
// }

// const iter2 = squared();
// for (let i of squared(10)) {
//   console.log(i);
// }
// --------------------------------------

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
//   };

//   console.log(Object.entries(prices));

//   const obj = Object.fromEntries(
//     Object.entries(prices).map( item => (
//         [item[0], item[1]*2]
//       ))
//   )

// console.log(obj);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   }
//  let sum=0;
//   for( let sal of Object.values(salaries)){
//     sum+=sal;
//   }

//   console.log(sum);
// -----------------------array destructuring-------------------------
//   let [firstName, surname] = ["John","Smith", "alan", 'redav'];
// console.log(firstName,surname)

// let user = {};
// [user.name, ] = ["John"];
// console.log(user);
// // ----------------------------------------
// let [name1, name2 , ...rest] = "vivek lokhande got placed with a  package of 12lpa".split(" ");
// console.log(name1, name2, {rest:rest});

// // -------------------------------------object destructring-------------
// options = {
//     name:"vivek",
//     surname:"lokhande",
// }

// let { name:a, surname:b } = options;
// console.log(a,b);

// let Name;
// ({Name} = {Name:"vivek"})
// --------------------------------------------

// console.log(typeof []);
// console.log(typeof ([] + []));
// console.log(1 + "2");
