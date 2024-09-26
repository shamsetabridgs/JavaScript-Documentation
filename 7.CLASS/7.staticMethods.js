//______________________________________________________________Introduction / Before ES6___________________________________________________________________________
/*
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
};
Person.createAnonymous = function(gender) {
    let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
    return new Person(name);
}
*/







//_________________________________________________________Static Method in ES6_________________________________________________________________
/*
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static createAnnonymous(gender) {
        let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
        return new Person(name);
    }
}
let person = new Person('James DOe');
let anonymous = person.createAnnonymous('male');                              // TypeError: person.createAnonymous is not a function
*/



//________________________________________Calling the Static Method from the Class Constructor or an Instance Method____________________________________________

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static createAnonymous(gender) {
        let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
        return new Person(name);
    }
}
let person = new Person('James Doe');
let anonymous = Person.createAnonymous('male');                     // Call static method on the class, not on the instance
console.log(person.getName());                                      // James Doe
console.log(anonymous.getName());                                   // John Doe