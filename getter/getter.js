function *g1(){
    let a=2;

    console.log("hello");
    yield a*a;
    console.log("world");
    yield a*a;
    return 'returned...'
}

var g = g1();
console.log(g);
console.log(g.next());
console.log(g.next());
console.log(g.next());