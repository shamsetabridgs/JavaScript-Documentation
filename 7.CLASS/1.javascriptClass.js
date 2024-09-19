//____________________________________________________Class Before ES6 Revisited__________________________________________________________
/*
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
};
var john = new Person('John Doe');
console.log(john.getName());              // John Doe
console.log(john instanceof Person);      // true
console.log(john instanceof Object);      // true
*/







//_________________________________________________________ES6 Class Decleration_____________________________________________________

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let john = new Person('John Doe');
let name = john.getName();
console.log(name);                          // John Doe
console.log(typeof Person);                 // function           ---->   Because CLASS is a special type of function in JavaScript.