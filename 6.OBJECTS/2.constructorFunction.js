//..............................................................Introduction.....................................................................
/*
function Person(firstName, lastName) {                    // P is in Capital Letter
    this.firstName = firstName;
    this.lastName  = lastName;
}
let person = new Person('John', 'Doe');
*/
/*
function Person(firstName, lastName) {
    // this = {};

    // add properties to this
    this.firstName = firstName;
    this.lastName  = lastName;

    //return this;
}
*/





//...................................................Adding Methods to Javascript Constructor Functions......................................................
/*
function Person(firstName, lastName) {
    this.firstName   = firstName;
    this.lastName    = lastName;
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
}
let person = new Person('John', 'Doe');
console.log(person.getFullName());               // John Doe
*/





//.....................................................Calling Constructor Function without NEW Keyword.......................................................
/*
function Person(firstName, lastName) {
    this.firstName   = firstName;
    this.lastName    = lastName;
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
}
let person = Person('John', 'Doe');
console.log(person.firstName);                   // TypeError: Cannot read property 'firstName' of undefined
console.log(person.getFullName());               // TypeError: Cannot read property 'getFullName' of undefined
*/

/*
function Person(firstName, lastName) {
    console.log(new.target);
    this.firstName = firstName;
    this.lastName  = lastName;
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
}
let person = Person('John', 'Doe');                    // Undefined
let person1 = new Person('John', 'Doe');               // [Function: Person]
*/

/*
function Person(firstName, lastName) {
    if(!new.target) {
        throw Error('Cannot be called without the new Keyword!');
    }
    this.firstname = firstname;
    this.lastname  = lastname
}
let person = Person('John', 'Doe');                    // Cannot be called without the new Keyword!
*/


function Person(firstName, lastName) {
    if(!new.target) {
        return new Person(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
}
let person = Person('John', 'Doe');
console.log(person.firstName);                       // John