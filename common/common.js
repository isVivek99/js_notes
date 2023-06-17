// ----------fibonacci-----

// function fibbonaci(num) {
//   let n1 = 0;
//   n2 = 1;
//   nextNum = 0;
//   arr = [];
//   while (nextNum <= num) {
//     arr.push(n1);
//     nextNum = n1 + n2;
//     n1 = n2;
//     n2 = nextNum;
//   }
//   return arr;
// }

// console.log(fibbonaci(7)); //0,1,1,2,3,5,8

// -------------fibonacci-recursion-----

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(7));

// ----- pangram----
// Returns true if the string is pangram else false

// function checkPangram(str) {
//   const markBooleanArray = new Array(26).fill(false);

//   str.split("").forEach((element, index) => {
//     let indx;
//     if (element >= "A" && element <= "Z") {
//       indx = str.charCodeAt(index) - "A".charCodeAt(0);
//     }
//     if (element >= "a" && element <= "z") {
//       indx = str.charCodeAt(index) - "a".charCodeAt(0);
//     }
//     markBooleanArray[indx] = true;
//   });
//   console.log(markBooleanArray);

//   for (let i = 0; i <= 25; i++) if (markBooleanArray[i] == false) return false;
//   return true;
// }

function checkPangram(str) {
  const set = new Set(str.replaceAll(" ", "").toUpperCase());
  if (set.size === 26) return true;
  return false;
}
let str = "The quick brown fox jumps over the lazy dog";
console.log(checkPangram(str));
