//________________________________________________________Introducton______________________________________________________________
/*
let person ={
    firstName : 'John',
    lastName  : 'Doe',
    getFullName : function() {
        return this.firstName + ' ' + this.lastName;
    },
};
console.log(person.getFullName());               // John Doe
*/

/*
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName : lastName,
        getFullName() {
            return firstName + ' ' + lastName;
        },
    };
}
let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Dane');
console.log(person1.getFullName());                    // John Doe
console.log(person2.getFullName());                    // Jane Dane
*/

/*
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}
var personActions = {
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};
let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Dane');
person1.getFullName = personActions.getFullName;
person2.getFullName = personActions.getFullName;
console.log(person1.getFullName());                       // John Doe
console.log(person2.getFullName());                       // Jane Dane
*/







//_________________________________________________________________________Object.create() Method______________________________________________________________________________

var personActions = {
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};
function createPerson(firstName, lastName) {
    let person = Object.create(personActions);
    person.firstName = firstName;
    person.lastName  = lastName;
    return person;
}
let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Dane');
console.log(person1.getFullName());               // John Doe
console.log(person2.getFullName());               // Jane Dane