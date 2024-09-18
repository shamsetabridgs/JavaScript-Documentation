//_________________________________________________________________Introduction_________________________________________________________________
/*
let person = {
    firstName : 'John',
    lastName  : 'Doe'
};
let {firstName, lastName} = person;
console.log(firstName);                      // John
console.log(lastName);                       // Doe
*/

/*
let person = {
    firstName : 'John',
    lastName  : 'Doe'
};
let {firstName, lastName, middleName} = person;
console.log(middleName);                            // undefined
*/






//_______________________________________________________________Setting Default Value___________________________________________________________
/*
let person = {
    firstName : 'John',
    lastName  : 'Doe',
    currentAge: 28
};
let {firstName, lastName, middleName = '', currentAge: age = 18} = person;
console.log(firstName);                  // John
console.log(lastName);                   // Doe
console.log(middleName);                 // ''
console.log(age);                        // 28
*/

/*
let person = {
    firstName : 'John',
    lastName  : 'Doe',
    middleName: 'C.',
    currentAge: 28
};
let {firstName, lastName, middleName = '', currentAge: age = 18} = person;
console.log(middleName);                  // C.
console.log(age);                         // 28
*/





//__________________________________________________________________Destructing Null Objects_____________________________________________________________________
/*
function getPerson() {
    return null;
}
let { firstName, lastName } = getPerson();
console.log(firstName, lastName);             // TypeError: Cannot destructure property 'firstName' of 'getPerson(...)' as it is null.
*/






//________________________________________________________________Nested Object Destructing_____________________________________________________________________
/*
let employee = {
    id: 1001,
    name : {
        firstName : 'John', 
        lastName  : 'Doe'
    }
};
let {
    name : {
        firstName,
        lastName
    }
} = employee;
console.log(firstName, lastName);               // John Doe
*/

/*
let employee = {
    id : 1001,
    name: {
        firstName : 'John',
        lastName  : 'Doe'
    }
};
let {
    name: {
        firstName,
        lastName
    },
    name
} = employee;
console.log(firstName);                      // John
console.log(lastName);                       // Doe
console.log(name);                           // { firstName: 'John', lastName: 'Doe' }
*/







//_________________________________________________________________Destructing Function Arguments____________________________________________________________________________
/*
let display = (person) => console.log(`${person.firstName} ${person.lastName}`);
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
display(person);              // John Doe
*/


let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);
let person = {
    firstName: 'John',
    lastName : 'Doe'
};
display(person);                // John Doe