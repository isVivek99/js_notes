// let myName={
//     firstName:"vivek",
//     lastName:"lokhande",
//     printfullName:function(){
//         console.log(this.firstName +" "+this.lastName);
//     }
// }

// myName.printfullName();

// let newPrintFullName = myName.printfullName;



// let otherName={
//     firstName:"salam",
//     lastName:"valekum",
// }

// otherName.printfullName = newPrintFullName;
// otherName.printfullName();

// ---------------------------bind--------------------------

// let user = {

//     firstname:"vivek",
//     sayHi(){
//         console.log("hi "+this.firstname);
//     }
// }

// setTimeout(user.sayHi, 1000);//undefined
// setTimeout(()=>{user.sayHi()}, 1000)// hi vivek

// --------------------------using bind--------------------------


// let user ={

//     firstname:"vivek",
//     sayHi(){
//         console.log("hi "+this.firstname);
//     }
// }
// console.log(user);
// let sayHi = user.sayHi.bind(user);
// console.log(user);
// console.dir(sayHi);
// setTimeout(sayHi, 1000);// hi vivek (no error since function is bound)

// // ---------------binding arguments-----------------------------------


function mul(a, b) {
    // console.log(a,b);
    return a * b;
  }

  let double = mul.bind(null,2 );
  console.dir(mul);
  console.dir(double);

  console.log(double(3));
  console.log(double(4));
//   ----------------------------call and apply----------------------------

//eg.1
// let name1 = {
//     name:"vivek",
//     lastName:"lokhande",
// }

// let printName = function(){
//     console.log(arguments);
//     console.log("my name is",this.name + "",this.lastName, "and i am from", arguments[0]+","+arguments[1]);
// }

// // printName.call(name1, "pune", "maharashtra");
// printName.apply(name1, ["pune", "maharashtra"]);

// //eg.2---------------------------------------------------
// function f(){
//     console.log(this.name);
// }

// let fa = f.bind({name:"vivek"}); 
// console.dir(fa);
// fa();

// -------------myBind-------------------------------------

let name1 = {
    name:"vivek",
    lastName:"lokhande",
}

let printName = function(...args){
    console.log(args);
    console.log("my name is",this.name + "",this.lastName+" from "+args[0],args[1] );
}



Function.prototype.myBind = function(...args){
    let self = this;
    console.log(args);
    return function(){  
        self.call(args[0], args[1], args[2])
    }
}

let printMyName = printName.myBind(name1 , "pune", "India");
console.dir(printMyName);
printMyName();

