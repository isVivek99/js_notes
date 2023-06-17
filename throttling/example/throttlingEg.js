var  timerId;
var  divBodyDom  =  document.getElementById('div-body');


function  makeAPICall(name) {
    console.log(name);
	var  debounceDom  =  document.getElementById('debounc-count');
	var  debounceCount  =  debounceDom.innerHTML  ||  0;
	debounceDom.innerHTML  =  parseInt(debounceCount) +  1
}

// var  throttleFunction  =  function (func, delay) {
	
//     let flag = true;
// 	return function(...args){
//         if(flag){
//             func.apply(this, args);
//             flag=false;
//             setTimeout(()=>{
//                 flag=true
//             },delay)
//         }    
//     }
// }

function debounceFunction(fn, delay){

    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn();
        },delay)
    }
}

// const betterFunction = throttleFunction(makeAPICall,200);
const betterFunction = debounceFunction(makeAPICall,200);
divBodyDom.addEventListener('scroll', function () {
	var  apiCallCountDom  =  document.getElementById('show-api-call-count');
	var  apiCallCount  =  apiCallCountDom.innerHTML  ||  0;
	apiCallCount  =  parseInt(apiCallCount) +  1;

	apiCallCountDom.innerHTML  =  apiCallCount; 

	// throttleFunction(makeAPICall, 200)
    betterFunction("vivek")
})