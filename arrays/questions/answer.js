// array = ['A', 'B', 'A', 'C', 'B', 'vivek', "vivek", "ball", "ball", {city:"pune",state:"maharashtra"},
// {city:"pune",state:"maharashtra"}];

// array.sort();
// console.log(array);
// newArray=[];

// for(let i=0; i<array.length; i++){

//     if(typeof(array[i])===Object){
//         array[i] = JSON.stringify(array[i]);
//     }else{
//         console.log("false");
//     }
//      if(!newArray.includes(array[i])){
//          newArray.push(array[i]);
//      }
// }
// console.log(newArray);


// ---------------------------------------
//Create a localStorage wrapper with expiration support. 
// myLocalStorage.setItem('roc8', '42', 1000);
// myLocalStorage.getItem('roc8'); // 42 
//After 1 sec 
//myLocalStorage.getItem('roc8'); // null 

// const myLocalStorage = {


//     setItem : function(key,value,expiry){
//         localStorage.setItem(key,value);
//         setTimeout(()=>{
//             localStorage.removeItem(key)
//         },expiry)
//     },

//     getItem : function(key){
//         return localStorage.getItem(key)
//     }

// }





// myLocalStorage.setItem('roc8', '42', 5000);
// console.log(myLocalStorage.getItem('roc8')); // 42
// setTimeout(()=>{
//     console.log(myLocalStorage.getItem('roc8'));
// },6000) 
// ----------------------------------------------------------

// function deleteDuplicates(arr){

//     let  i =0
  
//     while(i<arr.length-1){
      
//       let element = arr[i];
//       let nextDup =  arr.indexOf(element,i+1)
//       console.log("**************************************")
//       console.log("element: ",element,"at index of ",i)
    
//       while( nextDup !== -1){
//         console.log("prev duplicate ",nextDup,"  element  is ",element)
//         arr.splice(nextDup,1)
//         nextDup= arr.indexOf(element,nextDup)
//       }
//       i++;
//     }
//   }
  
//   let x = [1,1,"hell",{name:"hubb"},true,"true",3,"hell",4,2,3,4,{name:"hubb"},1,1,1,1,1,1,1,1,1,1]
  
//   deleteDuplicates(x);
  
//   console.log(x);
// ---------------------------------recursion---------------------------------


// function factorialCalc(num){

//     if(num>=1){
//         return num *(factorialCalc(num-1));
//     }else{
//         return 1; 
        
//     }
    
// }


// let factorial = factorialCalc(5);
// console.log(factorial);

// ----------------------------------flatten array and objects--------------------
//flatten the given array,

const arr = [1, 2, [3, 4, [5, 6]]];

let array = [];
count=0;
function flatten(arr,depth=1){
    
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i]) &&  depth>0){
            flatten(arr[i], depth-1);
        }else{
            array.push(arr[i]);
        }
    }
    return array;
}

let flatArr = flatten(arr,2);
console.log(flatArr);
