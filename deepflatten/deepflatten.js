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

// function flatten(array, degree = 2) {
//   const result = [];
//   array.forEach((element) => {
//     if (Array.isArray(element) && degree > 0) {
//       console.log(...flatten(element, degree - 1));
//       result.push(...flatten(element, degree - 1));
//     } else {
//       result.push(element);
//     }
//   });
//   return result;
// }

// const res = flatten(arr, 2);

// console.log({ res });

//--flatten object----

const obj = {
  name: "vivek",
  area: {
    city: "pune",
    state: "MH",
  },
  likes: ["sports", "martial-arts"],
};

function flattenObj(obj) {
  const result = [];
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      result.push(...flattenObj(obj[key]));
    } else {
      result.push(obj[key]);
    }
  });
  return result;
}

// const res = [];
// function flattenObj(obj) {
//   Object.keys(obj).forEach((key) => {
//     if (typeof obj[key] === "object") {
//       flattenObj(obj[key]);
//     } else {
//       res.push(obj[key]);
//     }
//   });
//   return res;
// }

console.log(flattenObj(obj));

// {a: undefined, b: { c: { d: undefined, e: ['BFE.dev', undefined]} }} spec  , (diff is too big, full diff )
