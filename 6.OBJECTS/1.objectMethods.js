//.................................................................Introduction.......................................................................
/*
An OBJECT is a collection of key/value pairs or properties. When the value is a function, the property becomes a method. 
Typically, we use methods to describe the object's behaviors.
*/

/*
let person = {
    firstName : 'John',
    lastName  : 'Doe'
};
person.greet = function() {
    console.log('Hello!');
}
person.greet();             // Hello!
*/

/*
let person = {
    firstName : 'John',
    lastName  : 'Doe',
};
function greet() {
    console.log('Hello, World!');
}
person.greet = greet;
person.greet();            // Hello, World!
*/






//.............................................................Object Method ShortHand...............................................................
/*
let person = {
    firstName: 'John',
    lastName : 'Doe',
    greet    : function() {
        console.log('Hello, World!');
    }
};
person.greet();                         // Hello, World!
*/

// ES6 provides us with the CONCISE METHOD SYNTAX that allows us to define a method for an Object.
/*
let person = {
    firstName: 'John',
    lastName : 'Doe',
    greet() {
        console.log('Hello, World!');
    }
}
person.greet();                      // Hello, Wrold!
*/








//................................................................The THIS Value.......................................................................
//     this.propertyName

let person = {
    firstName   : 'John',
    lastName    : 'Doe',
    greet       : function() {
        console.log('Hello, World!');
    },
    getFullName : function() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.getFullName());         // John Doe