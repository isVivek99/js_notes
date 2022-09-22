// ---------sum of n numbers-------

// function calcSum(n){

//     if(n===1){
//         return 1;
//     }else{
//         return n + calcSum(n-1);
//     }
// }

// let sum = calcSum(4);
// console.log(sum);
// ----------fibonacci-----

// function fibbonaci(num){

//     let n1=0; n2=1; nextNum = 0;
//     arr=[];
//     while(nextNum <= num){
//         arr.push(n1);
//         nextNum = n1+n2;
//         n1=n2;
//         n2=nextNum;
//     }
//     return arr;
// }

// console.log(fibbonaci(7));//0,1,1,2,3,5,8

// -------------fibonacci-recursion-----

function fibonacci(n){

    if(n<=1){
        return n;
    }else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

console.log(fibonacci(7));


// ------------------printname----------------------------

function printString(str){
    if(str==""){
      return;
    }
    console.log(str[0])
    printString(str.substring(1))
}
printString("vivek");