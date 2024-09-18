

const person = {
    firstName: 'John',
    lastName : 'Doe'
};
const employee = Object.create(person, {
    job : {
        value: 'JS Developer',
        enumerable: true
    }
});

console.log(employee.hasOwnProperty('job'));                   // true
console.log(employee.hasOwnProperty('firstName'));             // false
console.log(employee.hasOwnProperty('lastName'));              // false
console.log(employee.hasOwnProperty('ssn'));                   // false
