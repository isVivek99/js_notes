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

function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  const arr = [];
  while (num1 < num) {
    arr.push(num1); //0,1,1,2,3
    sum = num1 + num2; //1,2,3,5
    num1 = num2; //1,1,2,3
    num2 = sum; //1,2,3,5
  }
}

// -------------fibonacci-recursion-----

// const memoizeFn = function (fn) {
//   let cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     // const result = fn(args); since this is window
//     cache[args] = result;
//     return result;
//   };
// };

// function fibonacci(n) {

//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// console.log(fibonacci(7));
// const fib = memoizeFn(fibonacci);
// console.log(fib(7));

// ----- pangram----
// Returns true if the string is pangram else false

function checkPangram(str) {
  const markBooleanArray = new Array(26).fill(false);

  str.split("").forEach((element, index) => {
    let indx;
    if (element >= "A" && element <= "Z") {
      indx = str.charCodeAt(index) - "A".charCodeAt(0);
    }
    if (element >= "a" && element <= "z") {
      indx = str.charCodeAt(index) - "a".charCodeAt(0);
    }
    markBooleanArray[indx] = true;
  });
  console.log(markBooleanArray);

  for (let i = 0; i <= 25; i++) if (markBooleanArray[i] == false) return false;
  return true;
}

// function checkPangram(str) {
//   const set = new Set(str.replaceAll(" ", "").toUpperCase());
//   if (set.size === 26) return true;
//   return false;
// }
// let str = "The quick brown fox jumps over the lazy dog";
// console.log(checkPangram(str));
// --------------anagram------------

// function anagramPair(arr) {
//   const map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     map.set(arr[i].split("").sort().join(""), []);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i].split("").sort().join("");

//     if (map.has(element)) {
//       map.set(element, [...map.get(element), arr[i]]);
//     }
//   }

//   return map;
// }

// const anagramMap = anagramPair(["eat", "tea", "tan", "ate", "nat", "bat"]);

// console.log([...anagramMap.values()], anagramMap);

// -----groupBy Pollyfill-----

// const groupBy = (values, keyFinder) => {
//   console.log(values, keyFinder);
//   const target = {};

//   for (value of values) {
//     let ans =
//       typeof keyFinder === "function" ? keyFinder(value) : value[keyFinder];

//     if (!target[ans]) {
//       target[ans] = [value];
//     } else {
//       target[ans] = [...target[ans], value];
//     }
//   }
//   console.log(target);
//   return target;
// };

// console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// console.log(groupBy(["one", "two", "three"], "length"));
// const books = [
//   { title: "The Catcher in the Rye", genre: "Fiction" },
//   { title: "Sapiens", genre: "Non-Fiction" },
//   { title: "Dune", genre: "Science Fiction" },
//   { title: "To Kill a Mockingbird", genre: "Fiction" },
// ];
// groupBy(books, (book) => book.genre);
// { 6: [6.1, 6.3], 4: [4.2] }
// { 3: ['one', 'two'], 5: ['three'] }
