let num = prompt("enter number:");//111222

let res="";
let count=0;
for(let i=0; i<num.length; i++){
    count++;
    if(num[i]!==num[i+1]){ 
        res = res.concat(num[i],count);
        count = 0;
    }
    
}
console.log(res);