//..............................................................Introduction..............................................
/*
let age = 18;
let message;
age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');
console.log(message);          // You can drive.
*/




//................................................Most Preferred Way......................................................
/*
let age = 18;
let message = age >= 16 ? 'You can drive.' : 'You cannot drive.';
console.log(message);     //   You can drive.
*/




//.............................................Syntax of Ternary Operator.................................................
/*
let variableName = condition ? expressionIfTrue : expressionIfFalse;
*/



//............................................Ternary Operator for Multiple Statement.....................................
/*
let authenticated = true;
let nextUrl = authenticated ? (() => { alert('You will redirect to admin area.'); return '/admin'; })() : (() => { alert('Access denied.'); return '/403' })();
console.log(nextUrl);
*/




//..........................................Simplifying Ternary Operator..................................................
/*
let locked = 1;
let canChange = locked != 1 ? true : false;
console.log(canChange);      //  false      
*/




//...........................................Multiple Ternary Operators...................................................

let speed = 90;
let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'Ok';
console.log(message);           // Fast