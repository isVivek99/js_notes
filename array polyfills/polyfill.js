// -------------------------forEach--------------------

// arr = [1,2,3]
// arr.forEach((item)=>{return item*2})
// console.log(arr);

// Array.prototype.myforEach = function(callback){
//     for(let index = 0; index < this.length; index++){
//         callback(this[index], index, this);
//     }
// }

// arr.myforEach((item, index, array)=>{
//     console.log(`item:${item}, index:${index}, array:${array}`);
// })
// ------------------------map--------------------

// arr=[1,2,3]

// let newArr = arr.map((item,index)=>([item*10,index]))
// console.log(newArr);


// Array.prototype.myMap = function(callback){

//     let resultArray =[];
//     for(let index = 0; index < this.length; index++){
//         resultArray.push(callback(this[index], index)); 
//     }
//     return resultArray;
// }

// let newArray = arr.myMap((item, index)=>{
//   return [(item*100),index]
// })
// console.log(newArray);
// // ------------------------------------every--

let arr1 = [15,22,36,21]
// let check = arr.every((age)=>age>18);

// console.log(check);

// Array.prototype.myEvery = function(callback){

//     for(let i=0; i<this.length; i++){
//         if(callback(this[i]) === false) return false;
//     }
//     return true;
// }
// --------------------some---------------------------
// let arr2 = [15,22,36,21]

// Array.prototype.mySome = function(callback){

//     for(let i=0; i<this.length; i++){
//         if(callback(this[i]) === true) return true;
//     }
//     return false;
// }

// let check = arr2.mySome(age => age>18)
// console.log(check);
// ------------------filter-----------------------------------


// arr = [50,46,47,37,49,51,66,42,37,36]

// let newArr = arr.filter((item)=>item>45)
// console.log(newArr);

// Array.prototype.myMap = function(callback){
//     let arrayList=[];
//     for(let i=0; i<this.length; i++){
//         if(callback(this[i],i,this))arrayList.push(this[i]);
//     };
//     return arrayList;
// }


// let filteredArr = arr.myMap((item,index)=>(item>45))
// console.log(filteredArr);
// --------------------find--------------------------------------

// arr = ["vivek", "lokhande", "frontendDev"]

// let found = arr.find((element,index)=>element.length>5)
// console.log(found);

// Array.prototype.myFind = function(callback){
//     let result;
//     for(let i=0; i<this.length; i++){
//         if(callback(this[i])) return this[i];
//     }
// }

// let foundele = arr.myFind(item=>item.length>5)
// console.log(foundele);
// ---------------------reduce-------------------------------------------

// arr=[2,4,3,4,6,6,4]

// let sum = arr.reduce((accumalator, item)=>accumalator+=item,0)
// console.log(sum);

// Array.prototype.myReduce = function(callback, initialValue){
//     let res = initialValue;
//     for(let index=0; index<this.length; index++){
//         res = callback(res, this[index]);
//     }
//     return res;
// }

// let sum1 = arr.myReduce((accumalator,item)=>accumalator+=item, 0)
// console.log(sum1);
// -----------------------------------------------------------------

