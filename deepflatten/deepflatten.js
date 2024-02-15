//--flatten array----

const arr = [1, [2, 3, [4, [5]]]];
// const arr = [1, 2, [3, 4]];
// console.log(arr.flat(1));

// function flatten(array, degree = 1) {
//   let result = [];
//   array.forEach((element) => {
//     if (Array.isArray(element) && degree > 0) {
//       result.push(...flatten(element, degree - 1));
//     } else {
//       result.push(element);
//     }
//   });
//   return result;
// }

// Array.prototype.myFlat = function (degree) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (Array.isArray(this[i]) && degree > 0) {
//       arr.push(...this[i].myFlat(degree - 1));
//     } else {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

// const res = flatten(arr, 2);
// const res = arr.myFlat(3);

// console.log({ res });

//--flatten object----

const obj = {
  name: "vivek",
  area: {
    city: "pune",
    state: "MH",
    locality: {
      street: 1,
      houseNo: 12,
    },
  },
  likes: ["sports", "martial-arts"],
};

// function flattenObj(obj) {
//   const result = [];
//   Object.keys(obj).forEach((key) => {
//     if (typeof obj[key] === "object") {
//       result.push(...flattenObj(obj[key]));
//     } else {
//       result.push(obj[key]);
//     }
//   });
//   return result;
// }

// let res = {};
// function flattenObj(obj, k) {
//   for (key in obj) {
//     let path = k ? `${k}.${key}` : key;
//     if (typeof obj[key] === "object") {
//       flattenObj(obj[key], path);
//     } else {
//       res = { ...res, [path]: obj[key] };
//     }
//   }
//   return res;
// }

// console.log(flattenObj(obj));

// {a: undefined, b: { c: { d: undefined, e: ['BFE.dev', undefined]} }} spec  , (diff is too big, full diff )
