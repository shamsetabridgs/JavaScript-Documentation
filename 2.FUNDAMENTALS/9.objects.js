//................................Introduction.................................
// let empty = {};
// let person = {
//     firstname : 'John',
//     lastname  : 'Doe'
// };



//.......................Accessing Properties(Dot Notation)........................
// let person = {
//     firstname : 'John',
//     lastname  : 'Doe'
// };
// console.log(person.firstname);
// console.log(person.lastname);



//..................Accessing Properties(Array Like Notation)........................
// let person = {
//     firstname : 'John',
//     lastname  : 'Doe'
// };
// console.log(person['firstname']);
// console.log(person['lastname'])



// //.....................Accessing Space containing Properties...................
// let address = {
//     'building no' : 3920,
//     street        : 'North 1st street',
//     state         : 'CA',
//     country       : 'USA'
// };
// console.log(address['building no']);      // Dot notation will not work here. It will occur error....  Space containing properties is not good practice




//..........................Modify the Value of Properties.....................
// let person = {
//     firstname : 'John',
//     lastname  : 'Doe'
// };
// person.firstname = 'Jane';
// console.log(person)             // { firstname: 'Jane', lastname: 'Doe' }



//...........................Adding New Properties.............................
// let person = {
//     firstname : 'John',
//     lastname  : 'Doe'
// };
// person.age = 25;
// console.log(person);   // { firstname: 'John', lastname: 'Doe', age: 25 }



//............................Deleting Property of an Object...................
// let person = {
//     firstname : 'John',
//     lastname  : 'Doe',
//     age       : 25
// };
// delete person.age;
// console.log(person);     //{ firstname: 'John', lastname: 'Doe' }



//............................Checking Properties in Objects...................
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};
console.log('ssn' in employee);                       // false
console.log('employeeId' in employee);                // true



//...............................Summary...............................
/*
1. An object is a collection of key-value pairs. 
2. Use the dot Notification( . ) or array-like notation ( [] ) to access the property of an object.
3. Use the "delete" operator to remove a property from an object.
4. Use the "in" operator to check if a property exists in an object.
*/