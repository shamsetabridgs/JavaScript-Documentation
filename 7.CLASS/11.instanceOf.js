//___________________________________________________________________Introduction_____________________________________________________________________
/*
object instanceof constructor
# `object` is the object to test.
# `constructor` is a function to test against.
*/

/*
function Person(name) {
    this.name = name;
}
let p1 = new Person('John');
console.log(p1 instanceof Person);                    // true
*/







//______________________________________________________________________ES6 Class & InstanceOf Operator_________________________________________________________________________
/*
class Person {
    constructor(name) {
        this.name = name;
    }
}
let person = new Person('John');
console.log(person instanceof Person);              // true
*/








//__________________________________________________________________InstanceOf Operator & Inheritance____________________________________________________________________________
/*
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}
let e1 = new Employee();
console.log(e1 instanceof Employee);                                      // true
console.log(e1 instanceof Person);                                        // true
console.log(e1 instanceof Object);                                        // true
*/









//_________________________________________________________________________Symbol.hasInstance__________________________________________________________________________
/*
class Person {
    constructor(name) {
        this.name = name;
    }
}
let p1 = new Person('John');
console.log(Person[Symbol.hasInstance](p1));                           // true
*/


class Person {
    constructor(name) {
        this.name = name;
    }
}
class Android extends Person {
    static [Symbol.hasInstance]() {
        return false;
    }
}
let a1 = new Android('Sonny');
console.log(a1 instanceof Android);             // false
console.log(a1 instanceof Person);              // true
