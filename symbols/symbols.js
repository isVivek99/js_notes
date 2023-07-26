//symbols are unique identifiers, a symbol is a “primitive unique value” with an optional description
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
// --------

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123, // not "id": 123
};

//[id] is a symbol and cannot be accessed in a for of loop or a
//or Object.keys fn because  That’s a part of the general “hiding symbolic properties” principle.

//----------------
//Global symbols
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert(id === idAgain); // true

//symbol for creates a symbol in the global registry, if we try to access
// a pre-existing symbol then it is returned or else if its not present
//then a new symbol is created
