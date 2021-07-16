// --------------------IIFE--------------------
// var test = (function test(x){
//     delete x;
//     return x;
//   })(0)
//   console.log(test)
// //   ----------------------------------

(function(window) {
    'use strict';
    function Person(name, age){
        this.name = name;
        this.age = age;
    }

    Person.prototype.sayHello = function(){
            console.log("hi may name is "+this.name,"and my age is"+this.age);
    }
    window.Person = Person;
    

})(window)



function init(){
    console.log(this);
    let person = new Person("vivek", 22);
    person.sayHello();
    console.log(person);
}
init();