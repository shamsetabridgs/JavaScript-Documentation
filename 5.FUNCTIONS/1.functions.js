//............................................................Declare a Function................................................................
/*
function FunnctionName(parameters) {
    //   function body
}
*/

/*
function say() {
}
function square(a) {
}
function add(a, b) {
}
function say(message) {
    console.log(message);
}
*/

/*
function say(message) {
    return message;
}
let result = say('Hello');
console.log('Result:', result);
*/

/*
function add(a, b) {
    return a + b;
}
let sum = add(10, 20);
console.log('Sum:', sum);
*/






//..............................................................The Argumants Objects.............................................................
/*
function add() {
    let sum = 0;
    for (i =0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(1, 2));       // 3
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));      // 55
*/





//.......................................................Function Hoisting.........................................................................
/*
Function HOISTING is a mechanism which the JavaScript engine physically moves function declarations to the top of the code before executing them
/*
showMe()
function showMe() {
    console.log('A Hoisting Example')
}
*/