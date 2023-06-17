// console.log(Infinity-Infinity);
// console.log(0/0);
// console.log("This is the first line\n\\t And this is the second");
// console.log(`half of 100 is ${100 / 2}`);
// console.log(`there are ${99/3} dist in maha`);
// console.log("user" && "agner");
// console.log("user" && null);
// console.log(null && "agner");

// let theNum = Number(prompt("Enter number:"));
// console.log(`the number ${theNum} is the square root of ${theNum*theNum}`);

// let yourName;
// do{
//     yourName = prompt("Who are you?");
// }while(!yourName);
// console.log(yourName);

// for (let current = 20; ; current = current + 1) {
//     console.log(current);
//     if (current % 7 == 0) {
//         console.log(current);
//         break;
//     }
// }

/*let theNumber = prompt("Pick a number");
console.log("Your number is the square root of " +
theNumber * theNumber);*/

/*let theNumber = prompt("Pick a number");
if(!Number.isNaN(theNumber)){
    console.log("Your number is the square root of " +theNumber * theNumber);
}*/
//-------------------------------------------------------------
// const a=20;
// function foo(){
//      a=10;
//     console.log(a);
// }
// foo()

// console.log(a);
// --------------------------------------------------------------

// fetch request

const getMovies = () => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=9f27855f3a716c4b2b32bb4cf259ed66&query=james+bond`
  )
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then((data) => console.log(data.results))
    .catch((error) => console.log(error.message));
};

getMovies();

// ===========================================

console.log(a);

var a = 2;
let b = 3;
console.log(b);
console.log(d());
var d = function () {
  console.log("hyperlane activate");
};
const c = 1;
console.log(c);
