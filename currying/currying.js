// function multiply(x,y){
//     console.log(x*y);
// }

// let multByTwo = multiply.bind(this,2); 
// multByTwo(3);
// ---------------------------
function multiply2(x) {
    return function (y) {
        console.log(x * y);
    };
}
let multByFive = multiply2(2);
multByFive(5);
// ------------------------------

// function calcVolume(l,b){
//     let calcArea = l*b;
//     return function(h){
//         return (calcArea * h);
//     }
// }

// let area = calcVolume(5,6);
// let volume = area(10);
// console.log(volume);
// ---------------------------------

// function job(callback1, callback2) {
//     setTimeout(()=>callback1(),2000);
//     for(let i=0; i<3; i++){
//         setTimeout(()=>callback2(),1000)
//     }
// }

// job(()=>console.log("one"),()=>console.log("two"));