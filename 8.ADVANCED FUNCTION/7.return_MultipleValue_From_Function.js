//__________________________________________________________________Using Array____________________________________________________________________

/*   Process -> 1
function getName() {
    // get names from the Database or API
    let firstName = 'John', lastName = 'Doe';
    return [firstName, lastName];
}
let names = getName();
console.log(names[0]);                        // John
console.log(names[1]);                        // Doe
*/

/*   Process -> 2
function getName() {
    let firstName = 'John', lastName = 'Doe';
    return [firstName, lastName];
}
const [firstName, lastName] = getName();
console.log(firstName);                          // John
console.log(lastName);                           // Doe
*/









//_________________________________________________________________________Using Object________________________________________________________________________

//___________________Making more readable and easier to maintain_____________________
/*  process -> 1
function getName() {
    // get names from Database and API
    let firstName = 'John', lastName  = 'Doe';

    // return values
    return {
        'firstName': firstName,
        'lastName': lastName
    };
}
let names = getName();
console.log(names.firstName);                   // John
console.log(names.lastName);                    // Doe
*/

/*   process -> 2
function getName() {
    let firstName = 'John', lastName = 'Doe';
    return {
        'firstName': firstName,
        'lastName': lastName
    };
}
let {firstName, lastName} = getName();
console.log(firstName);                        // John
console.log(lastName);                         // Doe
*/





//________________Names of the properties are the same as the variables, in ES6________________

/*   process -> 1
function getName() {
    let firstName = 'John', lastName = 'Doe';
    return {firstName, lastName};
}
let names = getName();
console.log(names.firstName);                   // John
console.log(names.lastName);                    // Doe
*/



function getName() {
    let firstName = 'John', lastName = 'Doe';
    return {firstName, lastName};
}
let {firstName, lastName} = getName();
console.log(firstName);                        // John
console.log(lastName);                         // Doe

