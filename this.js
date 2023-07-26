// console.log(this);
//console.log("vivek");

// function fun (){
//     console.log(this);
// }
// fun();
// // this when used in a method

// const obj = {
//     name: "kisha",
//     hobby: "reading",
//     sayHi :  () => {
//         console.log(this);
//     }
// };

// obj.sayHi();  // {name: "kisha", hobby: "reading", sayHi: ƒ}

// const user = {
//     firstName:"vivek",
//     lastName:"lokhande",
//     fullName:function(){console.log(`my name is ${firstName,lastName} `)}
// }

// function getFullName(){
//     console.log(this);
// }

// const binder = getFullName.bind(user);

// console.log(binder());
//---------------------------------------------------
class Flash {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = function () {
      console.log("in state");
    };
  }

  run() {
    console.log("in-run---------");
    console.log("this:", this);
    console.log(this.x + this.y);
    this.state();
    console.log("--------");
  }

  render() {
    return {
      func: this.run,
    };
  }
}

var obj = new Flash(5, 6);

obj.run();
var element = obj.render();
element.func();

// --------------------------------------------------------
// function Flash(x,y){
//     this.x=x;
//     this.y=y;
// }

// Flash.prototype.run = function(){
//     console.log("this:",this);
//     return(this.x+this.y)
// }

//  var flash = new Flash(5,8)
// flash.run()
// console.log(flash.run().isPrototypeOf());

// -----------------------------------------
// var x = 10;

// var obj = {
//     x:90,
//     getX:function(){
//         console.log(this);
//         return this.x;
//     }
// }
// obj.getX();
// xGetter = obj.getX.bind(obj);
// xGetter()
// console.log(xGetter());

// ----------------------------------------------------------

// class Comp {
//     constructor(){
//         this.state="";
//         this.setState = function(){
//             console.log("setting state");
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         console.log("in handle");
//         this.setState();
//     }

//     render() {
//         return{
//             props:{
//                 onClick:this.handleClick,
//             }
//         }
//     }

// }

// const componentInstance = new Comp;
// const ele = componentInstance.render();
// console.log(ele);
// ele.props.onClick();
// ----------------------------------------------

// obj1 = {
//     name:"vivek"
// }

// obj2={
//     name:"akshay",
//     city:"pune",
//     getIntro:function(){
//         console.log(`${this.name} lives in ${this.city}`);
//     }
// }

// obj1.__proto__ = obj2;
// arr=[1,3,4]
// num=1;
// let myName=new String("vivek")
//------------------------------------------------

//console.log(JSON.parse('{ "name":"John", "age":20, "city":"New York"}'));
// -----------

// Omitting parentheses
// By the way, we can omit parentheses after new:

// let user = new User; // <-- no parentheses
// same as
// let user = new User();
// Omitting parentheses here is not considered a “good style”, but the syntax is permitted by specification.
