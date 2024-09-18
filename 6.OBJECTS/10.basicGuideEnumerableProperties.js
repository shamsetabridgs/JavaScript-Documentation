//......................................................................Introduction............................................................................
/*
By default, all properties created via a simple assignment or via a property initializer are enumerable.
*/
/*
const person = {
    firstName: 'John',
    lastName: 'Doe'
};
person.age = 25;
for(const key in person) {
    console.log(key);
}                               // firstName    lastName     age
*/

// To change the internal ENUMERABLE attribute of a property, we can use the Object.defineProperty() method.

/*
const person = {
    firstName: 'John',
    lastName : 'Doe'
};
person.age = 25;
Object.defineProperty(person, 'ssn', {
    enumerable: false,
    value: '123-456-7890'
});
for(const key in person) {
    console.log(key);
}                               // firstName       lastName       age
*/

// ES6 provides a method propertyIsEnumerable() that determines whether or not a property is enumerable.

const person = {
    firstName: 'John',
    lastName : 'Doe'
}
person.age = 15;
Object.defineProperty(person, 'ssn', {
    enumerable: false,
    value: '123-456-7890'
});
console.log(person.propertyIsEnumerable('firstName'));                       //  true
console.log(person.propertyIsEnumerable('lastName'));                        //  true
console.log(person.propertyIsEnumerable('age'));                             //  true
console.log(person.propertyIsEnumerable('ssn'));                             //  false
