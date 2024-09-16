//....................................................Introduction Constructor / Protptype Pattern................................................................
/*
//..........Constructor............
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName  = lastName;
}
//..........Prototype Object.......
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};
let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Dane');
console.log(p1.getFullName());            // John Doe
console.log(p2.getFullName());            // Jane Dane
*/








//.........................................................................Class in ES6.....................................................................

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName  = lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Dane');
console.log(p1.getFullName());                // John Doe
console.log(p2.getFullName());                // Jane Dane