//______________________________________________________________________Introduction____________________________________________________________
// ES6 allows us to use an expression in Brackets -> []....
/*
let propName = ['c'];
const rank = {
    a: 1,
    b: 2,
    [propName]: 3
};
console.log(rank.c);                     // 3
*/





//___________________________________________________________Computed Property Function______________________________________________________________
/*
let name = 'fullName';
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName  = lastName;
    }
    [name]() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('John', 'Doe');
console.log(person.fullName());              // John Doe
*/






//___________________________________________________________Computed Property GET Function____________________________________________________________

let name = 'fullName';
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName  = lastName
    }
    get [name]() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('John', 'Doe');
console.log(person.fullName);              // John Doe
