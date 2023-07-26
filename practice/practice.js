// let num = prompt("enter number:");//111222

// let res="";
// let count=0;
// for(let i=0; i<num.length; i++){
//     count++;
//     if(num[i]!==num[i+1]){
//         res = res.concat(num[i],count);
//         count = 0;
//     }

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

// --------------------------------two sum-------------------------------------

// let arr = [-8, 1, 4, 6, 10, 45] //find soln for 16

// console.log(arr.sort());

// function twoSum(arr, num){
//     let i=0;
//     let r = arr.length-1;
//     let newarr = arr.sort();

//     for(let i=0; i<arr.length; i++){

//         if(newarr[i] + newarr[r] === num){
//             return ([newarr[i], newarr[r]]);
//         }else if(newarr[i] + newarr[r]>num){
//             r-=1;
//         }else{
//             i+=1;
//         }
//     }

// }

// console.log(twoSum(arr, 16));

// ----------------take obj and callback run callback after 3 sec------

// function callMe(obj, callback){

//     setTimeout(()=>{
//         callback();
//     },3000)

// }

// callMe({myName:"vivek"}, ()=>{console.log("my name is vivek")});

// -----------------------------------------------------------------

// let obj = {
//     "(": ")",
//     "{": "}",
//     "[": "]"
//   };
//   let keys = Object.keys(obj);
//   console.log(keys);

//   let arr = ["(", "}", "]", "{", ")", "["];
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (keys.includes(arr[i])) {
//         console.log(arr[i]);
//       newArr.push(arr[i]);
//       newArr.push(obj[arr[i]]);
//     }
//   }
//   console.log(newArr);

// -----------------------brackets problem----------------------------

// function addSimilar(str,i){
//   let index;

//   switch(str){

//     case "(":
//     newArr.push("(");
//     index = arr.indexOf(")");
//     newArr.push(arr[index]);
//     arr.splice(i,1);
//     arr.splice(arr.indexOf(")"),1);
//     break;

//     case "[":
//       newArr.push("[");
//       index = arr.indexOf("]");
//     newArr.push(arr[index]);
//     arr.splice(i,1);
//     arr.splice(arr.indexOf("]"),1);
//     break;

//     case "{":
//       newArr.push("{");
//       index = arr.indexOf("}");
//       newArr.push(arr[index]);
//       arr.splice(i,1);
//       arr.splice(arr.indexOf("}"),1);
//       break;

//   }

// }
// arr = ["(", "}", "]", "{", ")", "[","(","}",")","}  "];
// newArr=[];

//  while(arr.length !== 0){

//   if(arr.indexOf("(") !==-1){

//     addSimilar("(",arr.indexOf("("));

//   }else if(arr.indexOf("[") !== -1){

//     addSimilar("[",arr.indexOf("["));

//   }
//   else{

//     addSimilar("{",arr.indexOf("{"));

//   }

// }

// console.log(newArr);
// -----------------------longest-palindrome------------------

// function longestPalindrome(longString) {
//   console.log(longString);
//   let temp="";
//   for (let i = 0; i < longString.length; i++) {
//     for (let j = longString.length - 1; j >= 0; j--) {
//       if (
//         longString.substring(i, j) ===
//         longString.substring(i, j).split("").reverse().join("")
//       ) {
//         let length = longString.substring(i,j).length;
//         if (temp.length < length) {
//           temp = longString.substring(i, j);
//           console.log(temp);
//         }
//       }
//     }
//   }

//   return temp.length;
// }
// let longString = "abracadabra";
// let num = longestPalindrome(longString);
// if (num) {
//   console.log(true, num);
// } else {
//   console.log(false, num);
// }
// -----------------------------------------------------------

// function convert(arr){

//   let newArr = [];
//   let count=0;
//   for(let i=0; i<arr.length; i++){
//     let prev;
//     if(count===0){
//       prev=arr.indexOf(arr[i]);
//       console.log(prev);
//     }
//     let current = i;
//     if(arr[current]!==arr[i+1]){
//       console.log("increase cony");
//       count++
//       console.log("count:",count);
//     };
//     if(count===2){
//       console.log(current+1);
//       //console.log(arr.splice(prev,current+1));
//       newArr = [...newArr, (arr.splice(prev, current+1))];
//       count=0;
//     }
//   }
//   return newArr;

// }

// let arr = [1,1,2,2,3,3,4,4,4]

// let nestedArray = convert(arr)
// console.log(nestedArray);

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

//------
console.log(0 ?? 21); // Output: 0
console.log(null ?? 21); // Output: 21
