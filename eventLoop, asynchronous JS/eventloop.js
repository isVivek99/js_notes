console.log("start");

document.getElementById("btn")
.addEventListener("click", function cb(){
    window.console.log("callback");
})

window.console.log("end");


function x(){
    window.console.log("inside x");
}
x()