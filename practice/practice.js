// let num = prompt("enter number:"); //111222

// let res = "";
// let count = 0;
// for (let i = 0; i < num.length; i++) {
//   count++;
//   if (num[i] !== num[i + 1]) {
//     res = res.concat(num[i], count);
//     count = 0;
//   }
// }
// console.log(res);
// ---------------------------measure freq------------------------------
// let str = "aaacccddddbbb";

// function measure(str){

//     let count=0;
//     let res="";

//     for(let i=0; i<str.length; i++){
//         count++;
//         if(str[i] !== str[i+1]){
//             res = res.concat(str[i],count);
//             count=0;
//         }
//     }

//     return res;
// }

// console.log(measure("aaacccddddbbb"));
// ------------------bubble sort--------------

// function bubleSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let isSwapped = false;

//         for(j=0; j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j+1];
//                 arr[j+1]=arr[j];
//                 arr[j] = temp;
//                 isSwapped =true;
//             }
//         }
//         if(!isSwapped) break; //if no swaps take place in an iteration break the outer loop
//     }
//     return arr;
// }

// console.log(bubleSort( [ 1, 4, 2, 5, -2, 3 ]))

// --------------------------------two sum-------------------------------------

// let arr = [-8, 1, 4, 6, 10, 45] //find soln for 16

// console.log(arr.sort());

function twoSum(arr, num) {
  let i = 0;
  let r = arr.length - 1;
  let newarr = arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (newarr[i] + newarr[r] === num) {
      return [newarr[i], newarr[r]];
    } else if (newarr[i] + newarr[r] > num) {
      r -= 1;
    } else {
      i += 1;
    }
  }
}

// console.log(twoSum(arr, 16));

// ----------------take obj and callback run callback after 3 sec------

// function callMe(obj, callback){

//     setTimeout(()=>{
//         callback();
//     },3000)

// }

// callMe({myName:"vivek"}, ()=>{console.log("my name is vivek")});

// -------------------------------valid parenthisis----------------------------------

// let obj = {
//   ")": "(",
//   "}": "{",
//   "]": "[",
// };
// let keys = Object.keys(obj);
// let values = Object.values(obj);

// // let arr = ["(", "}", "]", "{", ")", "["];
// let arr = ["(", "}", "]", "{", ")", "[", "(", "}", ")", "} ", "}"];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (values.includes(arr[i])) {
//     arr.splice(i, 1);
//     newArr.push(arr[i]);
//   } else if (newArr.indexOf(obj[arr[i]]) !== -1) {
//     newArr.splice(newArr.indexOf(obj[arr[i]]), 1);
//   }
// }
// console.log(newArr, arr);

// -----------------------longest-palindrome------------------

// function longestPalindrome(longString) {
//   let temp = "";
//   for (let i = 0; i < longString.length; i++) {
//     for (let j = longString.length - 1; j >= 0; j--) {
//       if (
//         longString.substring(i, j) ===
//         longString.substring(i, j).split("").reverse().join("")
//       ) {
//         let length = longString.substring(i, j).length;
//         if (temp.length < length) {
//           temp = longString.substring(i, j);
//           console.log(temp);
//         }
//       }
//     }
//   }

//   return temp.length;
// }

let longString = "abracadabra";
// let num = longestPalindrome(longString);
// if (num) {
//   console.log(true, num);
// } else {
//   console.log(false, num);
// }
// // --------------return all palindeomrome from string-----------
// const res = [];
// let arr = [];
// function checkLongestPalindromeInArray(array) {
//   //if we find a palindrome add it to the localArray.
//   for (let i = 0; i < array.length; i++) {
//     //if palindrome add to result array.
//     if (array[i] === array[i].split("").reverse().join("")) {
//       res.push(array[i]);
//     }
//   }
// }

// for (let i = 0; i < longString.length; i++) {
//   for (let j = i; j < longString.length; j++) {
//     arr.push(longString.substring(i, j + 1));
//   }
//   console.log({ arr });
//   checkLongestPalindromeInArray(arr);
//   arr = [];
// }

// console.log(res); //return longest string from this array.
// console.log(res.sort((a, b) => b.length - a.length)[0]);

// O(n^2) TC

// -----------------------------------------------------------

function convert(arr) {
  let newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let prev;
    if (count === 0) {
      prev = arr.indexOf(arr[i]);
      console.log(prev);
    }
    let current = i;
    if (arr[current] !== arr[i + 1]) {
      console.log("increase count");
      count++;
      console.log("count:", count);
    }
    if (count === 2) {
      console.log(current + 1);
      //console.log(arr.splice(prev,current+1));
      newArr = [...newArr, arr.splice(prev, current + 1)];
      count = 0;
    }
  }
  return newArr;
}

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 4];

let nestedArray = convert(arr);
console.log(nestedArray);

// --------------------------------------------------------

// for(let i=0; i<5; i++){
//   string="";
//   for(let j=0; j<5; j++){
//     string+="* ";
//   }
//     string+=("\n");
//     console.log(string);
// }
// * * * * *

// * * * * *

// * * * * *

// * * * * *

// * * * * *
// -------------------------------------------------------

// let n=5;
// for(let i=1; i<=n; i++){
//   let string="";
//   for(let j=0;j<i; j++){
//     string+="* ";
//   }
//   string+="\n";
//   console.log(string);
// }
// *

// * *

// * * *

// * * * *

// * * * * *
// ---------------------------------------------------------------

// let n=5;
// let string="";
// for(let i=1; i<=n; i++){
//     for(let j=0; j<=n-i; j++){
//     string+=" ";
//   }
//   for(let k=0; k<i; k++){
//     string += "*";
//   }
//   string+="\n";

// }
// console.log(string);

// ----------------------------------------

// let n=5;
// for(let i=1; i<=n; i++){
//   let string="";
//   for(let j=0;j<=n-i; j++){
//     string+="* ";
//   }
//   string+="\n";
//   console.log(string);
// }
// ----------------------------------------
// let n=5;
// let string="";
// for(let i=1; i<=n ;i++){
//   for(let j=1; j<i; j++){
//     string+=" ";
//   }
//   for(let k=0; k<=n-i; k++){
//     string+="* ";
//   }
//   string+="\n";
// }
// console.log(string);

// * * * * *
//  * * * *
//   * * *
//    * *
//     *
// -------------------------------------------
// let n = 5;
// let string = "";

// for(let i=1; i<=n; i++){
//     for(let j=n; j>i; j--){
//         string+=" ";
//     }
//     for(let k=0; k<i*2-1; k++){
//         string+="*";
//     }
//     string+="\n";
// }

// for(let i=1; i<n; i++){
//     for(let j=0; j<i; j++){
//         string+=" ";
//     }
//     for(let k=1; k<(n-i)*2; k++ ){
//         string+="*";
//     }
//     string+="\n";
// }
// console.log(string);
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// ---------------------------------------------
// let n=5;
// let string="";

// for(let i=0; i<n; i++){
//     for(let j=0; j<i; j++){
//         string+=" ";
//     }
//     for(let k=1; k<(n-i)*2; k++){
//         string+="*";
//     }
//     string+="\n";
// }
// for(let i=2 ; i<n+1; i++){
//     for(let j=0;j<(n-i); j++){
//         string+=" ";
//     }
//     for(let k=0; k<i*2-1; k++){
//         string+="*"
//     }
//     string+="\n";
// }
// console.log(string);
