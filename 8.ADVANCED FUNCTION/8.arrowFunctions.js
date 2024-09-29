//_______________________________________________________________Introduction______________________________________________________________

/*
// Normal Function...........
let add = function(x, y) {
    return x + y;
};
console.log(add(10, 20));              // 30
*/

/*
let add = (x, y) => x + y;
console.log(add(10, 20));              // 30
*/

// If We want to use block syntax, we need to specify the 'return' keyword
/*
let add = (x, y) => {return x + y};
console.log(add(10, 20));                    // 30

console.log(typeof add);                     // function
console.log(add instanceof Function);        // true
*/









//____________________________________________________________________Arrow Functions with Multiple Parameters_____________________________________________________________________
/*
(p1, p2, ..., pn) => expression;
=> expression
=> {return expression; }
*/

//...........Traditional function for SORTING............
/*
let numbers = [4, 2, 6, 8];
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers);                        // [8, 6, 4, 2]
*/


//..........Arrow function for SORTING...................
/*
let numbers = [4, 2, 6, 8];
numbers.sort((a, b) => b - a);
console.log(numbers);                        // [8, 6, 4, 2]
*/

/*
let numbers = [4, 2, 6, 8];
numbers.sort((a, b) => {return b - a});
console.log(numbers);                        // [8, 6, 4, 2]
*/








//_________________________________________________________________Arrow Function with Single Parameters____________________________________________________________________
/*
(p1) => { statements }
p => { statements }             // We can omit the parentheses
*/

/*
let names = ['John', 'Mac', 'Peter'];
let length = names.map(name => name.length);
console.log(length);                                      [4, 3, 5]
*/








//___________________________________________________________________Arrow Functions with No Parameters____________________________________________________________________
/*
() => { statements }
 */

/*
let logDoc = () => console.log(window.document);
logDoc();                                             // only for browser console
*/








//________________________________________________________________Line Break Between Parameters Definition & Arrow______________________________________________________________________
/*
let multiply = (x, y) => x * y;
console.log(multiply(10, 20));                 // 200
*/

/*
let multiply = (x, y)
=> x * y;
console.log(multiply(10, 20));                // Syntax Error
*/

/*
let multiply = (x, y) => 
    x * y;
console.log(multiply(10, 20));                // 200   (Perfectly Executed)
*/

/*
let multiply = (
    x,
    y
) => 
    x * y;
console.log(multiply(10, 20));               // 200 (Perfectly Executed)
*/








//________________________________________________________________Statements & Expressions in the Arrow Functions body_________________________________________________________________

// A statement does a specific task such as 
/*
if (x === y) {
    console.log('x equals to y');
}
*/

/*
let square = x => x * x;
console.log(square(5));                     // 25
*/

/*
let except = msg => {
    throw msg;
};
console.log(except('Hi guies, this is risky task!'));
*/








//_____________________________________________________________________Arrow Functions & Object Literal________________________________________________________________________

/*       traditional function
let setColor = function(color) {
    return {value: color};
}
let backgroundColor = setColor('Red');
console.log(backgroundColor.value);                              // Red
 */

/*
let setColor = color => {value: color};
let backgroundColor = setColor('Red');
console.log(backgroundColor.value);                              // Type Eror
*/

/*
let setColor = color => ({value: color});
let backgroundColor = setColor('Red');
console.log(backgroundColor.value);                              // Red
*/







//______________________________________________________________Arrow Function vs Traditional Function___________________________________________________________________________
/*
1. First, in the Arrow function, the 'this', 'arguments', 'super', 'new.target' are lexiacl. It means that the arrow function uses thes variables (or constructs) from the enclosing lexical scope
2. Second, an arrow function cannot be used as a function constructor. If you use the 'new' keyword to create a new object from an arrow function, you will get an error. 
*/








//___________________________________________________________________Arrow Functions and this value______________________________________________________________________________

/*
function Car() {
    this.speed = 0;
    this.speedUp = function(speed) {
        this.speed = speed;
        setTimeout(function() {
            console.log(this.speed);
        }, 1000);
    };
}
let car = new Car();
car.speedUp(50);                               // Undefined
*/


//....................FIX....................
/*
function Car() {
    this.speed = 0;
    this.speedUp = function(speed) {
        this.speed = speed;
        let self = this;
        setTimeout(function() {
            console.log(self.speed);
        }, 1000);
    };
}
let car = new Car();
console.log(car.speedUp(50));                       // undefined 50
*/

/*       permanently fixing problem
function Car() {
    this.speed = 0;
    this.speedUp = function(speed) {
        this.speed = speed;
        setTimeout(
            () => console.log(this.speed),
        1000);
    };
}
let car = new Car();
car.speedUp(50);                                  // 50
*/







//______________________________________________________________Arrow Functions & the Arguments Object________________________________________________________________________

/*
function show() {
    return x => x + arguments[0];
}
let display = show(10, 20);
let result = display(5);
console.log(result);                              // 15     (Does not have the argument Object)
*/








//__________________________________________________________________Arrow Functions & The Prototype Property__________________________________________________________________

/*
function dump(message) {
    console.log(message);
}
console.log(dump.hasOwnProperty('prototype'));               // true
*/


let dump = message => console.log(message);
console.log(dump.hasOwnProperty('prototype'));             // false    (Arrow Functions don't have 'prototype' property)

