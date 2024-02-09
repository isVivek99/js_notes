// function* g1() {
//   let a = 2;

//   console.log("hello");
//   yield a * a;
//   console.log("world");
//   yield a * a;
//   return "returned...";
// }

// var g = g1();
// console.log(g);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// generator return a iterator
// iterator is an object which has two keys, i.e. value and done {value:'something', done:true/false}

function* abcs() {
  yield "a";
  yield "b";
  yield "c";
}

console.log(abcs().next(), abcs());
for (let letter of abcs()) {
  console.log(letter, letter.toUpperCase());
}
// ----------


function* generatorId(){
  let id=1;
  while(true){
    yield id;
    console.log({id});
    id++;
  }
}
const gen = generatorId()
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());