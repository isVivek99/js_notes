var x = 1;
console.log(x);
a();
b();

function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    c();
    function c (){
        console.log("in C");
    }
    console.log(x);
}



