
// {
//     var var_a=10;
//     const const_b = 20;
//     let let_c = 30;
// }

// function scope (){
//     var a=10;
//     {
//         var b=12;
//         let c=14;
//     }
  
//     console.log(b);
//     console.log(c);
// }
// scope();

// -------------------------------------------------------

// function scope (){
//     var a=10;
//     console.log(a);
    
// }
// scope();
// console.log(a);
// ------------------------------------------------------
//let a = 100;
// {
//     let a = 10;
//     {
//         {
//             {
//                 console.log(a); //hierarchial scoping
//             }
//         }
//     }
// }

// console.log(a);
// ----------------------------------------------------
// let number = 10;

// function displayDouble() {
//   //a new variable is defined with the same name as variable on line 1 - outer scope
//   var a=10;
//   let number = 3;

//   number *= 2;
//   console.log(number); //=> 6
// }

// displayDouble();
// console.log(number)
// ---------------------------------------------------

// var value = "outside";
// function logValue() {
//     console.log(value); 
//     var value = "inside";
//     } 
// logValue() ;
// ----------------------------------------------------------
// function add(){}; 
// var add; 
// var b;
// console.log(typeof add);
// --------------------------------------------------------- 
// var add = 10; 
// function add() {}
// console.log(typeof add)
// --------------------------------------------------------
// console.log('1');
//  setTimeout(function () { console.log('2') }, 0) ;
//  Promise.resolve().then(function () { console.log('3') }); 
//  console.log('4');
// -----------------------------------------------------------
// function foo() { return;
    // { message: "Hello World" }; } console.log(foo()); 
    // ----------------------------------------------
    // let a=5;
    // for (let i = 0; i < 3; i++) {
    //     console.log(i); // 0, 1, 2
    //   }
    //   console.log(i);
    //  ----------------------------------
    // var run = function(){
    //     console.log("run");
    // }
    // var m = run; 
    // console.log(m);   
    // ------------------------------
    // let age = 16; // take 16 as an example

    // if (age < 18) {
    //   welcome();               // \   (runs)
    //                            //  |
    //   function welcome() {     //  |
    //     console.log("Hello!");       //  |  Function Declaration is available
    //   }                        //  |  everywhere in the block where it's declared
    //                            //  |
    //   welcome();               // /   (runs)
    // }
    
    // // Here we're out of curly braces,
    // // so we can not see Function Declarations made inside of them.
    
    // welcome(); // Error: welcome is not defined
    // -------------------------------------------------------

// var x=99;
// {
// console.log(x);
// const x=99;
// console.log(x);
// }

// console.log(x);
// ------------------------------------
// var z=99;

// {

// let z="Vikas";
// console.log(z);
// }

// console.log(z);
/////

// function baz(){
//     console.log(this);
//     }
    
//     baz();
//     var obj={};
    
//     var x=baz.bind(obj);
//     baz();
    
//     var obj2={
//     myBaz:baz.bind(this),
//     } 
//     obj2.myBaz();
    
//     var y = new baz();
    // -----------------------

        