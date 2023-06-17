// let str = "HELLO";

// str.test = 5; // (*)
// let str2 = str.toLocaleUpperCase();
// console.log(str === str2);
// console.log(str.test);
// ---------------------------------
// let zero = new Number(0);
// console.log(zero);
// console.log(typeof(zero));
// if (zero) { // zero is true, because it's an object
//   console.log( "zero is truthy!?!" );
// }
// --------------------------------------------
// arr=[1,2,3,4,5,6,]
// //arr.shift();
// //arr.unshift(1);
// //arr.age=18;
// //arr.splice(0,2,432);
// // arr.splice(2,2)
// const arr1 = arr.slice(0,6);
// console.log(arr1);
// -----------------------------------------
["Vivek", "lokhande"].forEach((item, index, array)=>{
    console.log(`${item} is at ${index} in ${array}`);
})
// -------------------------------------------------------
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];

//   let newUsers = users.filter(item=>item.id<3)
//   console.log(newUsers);
//   console.log(users);
// //   ---------------------------------------------------------------------
// let arr = [ 15, 2, 3 ];
// console.log(arr.sort());
// let arr2 = arr.sort((a,b)=>(b-a))
// console.log(arr2);
// ------------------------------------------------------------------------

// function filterRange(array, a, b){
//     let arra = array.filter(item=>((item>=a) && (item<=b)));
//     return arra;
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// ================================================================================

// function copySorted(arr){
//     newArr = [...arr];
//     return newArr.sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);
// ----------------------------------------------------------------------------------

// function sumAll(...args){
//     console.log(args);
//     let sum=0;
//     for(let arg of args){
//         sum+=arg;
//     }
// return sum;
// }
// console.log( sumAll(1, 2, 3) )
// ----------------------------------------------
