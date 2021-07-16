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

// let user ={

//     firstname:"vivek",
//     sayHi(){
//         console.log("hi "+this.firstname);
//     }
// }

// setTimeout(user.sayHi, 1000);//undefined
// setTimeout(()=>user.sayHi(), 1000)// hi vivek

// --------------------------using bind--------------------------


// let user ={

//     firstname:"vivek",
//     sayHi(){
//         console.log("hi "+this.firstname);
//     }
// }
// let sayHi = user.sayHi.bind(user);
// console.log(user);
// setTimeout(sayHi, 1000);// hi vivek (no error since function is bound)

// // ---------------binding arguments-----------------------------------


// function mul(a, b) {
//     // console.log(a,b);
//     return a * b;
//   }

//   let double = mul.bind(null,2 );

//   console.log(double(3));
//   console.log(double(4));
//   ----------------------------call and apply----------------------------

//eg.1
// let name1 = {
//     name:"vivek",
//     lastName:"lokhande",
// }

// let printName = function(...args){
//     console.log("my name is",this.name + "",this.lastName, "and i am from", args[0]+","+args[1]);
// }

// printName.call(name1, "pune", "maharashtra");
// printName.apply(name1, ["pune", "maharashtra"]);

//eg.2
function f(){
    console.log(this.name);
}

let fa = f.bind({name:"vivek"}); 
console.log(typeof(fa));
fa();

// -------------
