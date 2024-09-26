//___________________________________________________________Introduction New Target__________________________________________________________
/*
function Person(name) {
    this.name = name;
}
let john = new Person('John');
console.log(john.name);                              // John

Person('Lily')                   // -> invoking as a function
console.log(window.name);       // Lily
*/

/*
function Person(name) {
    if (!new.target) {
        throw `Must use the new operator with Person`;
    }
    this.name = name;
}
let john = new Person('John');
console.log(john.name);                    // John
console.log(Person('Lily').name);          // Must use the new operator metaproperty
*/







//______________________________________________________new.target in Constructors______________________________________________________

class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}
class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}
let john = new Person('John Doe');                                    // Person
let lily = new Employee('Lily Bush', 'Programmer');                   // Employee
