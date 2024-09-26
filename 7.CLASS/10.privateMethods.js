//___________________________________________________________________Introduction_______________________________________________________________
/* The following shows the syntax of defining a private instance method
class MyClass {
    #privateMethod() {
        //................................
    }
}
*/

/*   To call the #privateMethod inside the `MyClass`, we use the `this` keyword as follows
this.privateMethod();
*/

/*
class MyClass {
    static #privateStaticMathod() {
        //................................
    }
}
MyClass.#privateStaticMethod();
*/






//______________________________________________________________Private GETTER / SETTER____________________________________________________________
/*                 Wrong Way
class MyClass {
    #field;
    get #myfield() {
        return #field;
    }
    set #myfield(value) {
        #field = value;
    }
}
*/

/*
class MyClass {
    #field;
    get myField() {
        return this.#field;
    }
    set myField(value) {
        this.#field = value;
    }
}
let obj = new MyClass();
obj.myField = 42;                             // Sets the private field #field to 42
console.log(obj.myField);                     // Outputs: 42
*/







//___________________________________________________________Private Instance Method Example(THUMB Rule Here)___________________________________________________________
/*
class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName  = lastName;
    }
    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }
    #firstLast() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
        return `${this.#lastName} ${this.#firstName}`;
    }
}
let person = new Person('John', 'Doe');
console.log(person.getFullName());                      // John Doe
console.log(person.getFullName(false));                 // Doe John
*/









//_____________________________________________________________Private Static Method Example____________________________________________________________________

class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        this.#firstName = Person.#validate(firstName);
        this.#lastName  = Person.#validate(lastName);
    }
    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }
    static #validate(name) {
        if (typeof name ==='string') {
            let str = name.trim();
            if (str.length >= 3) {
                return str;
            }
        }
        throw `The name must be a string with at least 3 characters`;
    }
    #firstLast() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
        return `${this.#lastName} ${this.#firstName}`
    }
}
let person = new Person('John', 'Doe');
console.log(person.getFullName());                      // John Doe
