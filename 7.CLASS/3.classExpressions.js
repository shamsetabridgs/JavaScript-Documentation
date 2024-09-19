//____________________________________________________________________Introduction_______________________________________________________________________
/*
let Person = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let person = new Person('John Doe');
console.log(typeof Person);                          // function   -> Class is a special type of function in JavaScript.
console.log(person.getName());                       // John Doe
*/






//___________________________________________________________________First Class Citizen__________________________________________________________________
// It means that we can pass a class into a function, return it from a function and assign it to a variable.
/*
function factory(aClass) {
    return new aClass();
}
let greeting = factory(class{
    sayHi() {
        console.log('Hi');
    }
});
greeting.sayHi();                                   // Hi
*/







//______________________________________________________________________Singleton_________________________________________________________________________
// Class expressions can be used to create a singleton by calling the class constructor immediately.

let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App');
app.start();                                       // Starting the awesome App