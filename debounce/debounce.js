//eg.1
const displayarea = document.querySelector("#display-area");


function getData(x){
    displayarea.innerHTML = x;
    console.log(displayarea.innerHTML);
}

const debounce = (fn, delay) => {
    let timer;
    return function(...args){
        let context = this;
        clearTimeout(timer);
        console.log(timer);
        timer = setTimeout(()=>{
            fn.apply(this, args);
        },delay)
    }
}

const betterFunction = debounce(getData,300);
//eg.2----------------------------------------------------------------------------
// vivek={ 
//     name:"vivek",
//     speak : debounce(getData)
// }
// vivek.speak();