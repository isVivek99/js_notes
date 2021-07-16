function greeting(name){
    console.log("hello "+name);
}

function takeInput(callback){
    let userName = prompt("enter username:");
    callback(userName);
}

takeInput(greeting);
// -----------------------------------------


function attachEventListener(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log("clicked",++count);
})
}


attachEventListener();