//_________________________________________________________________Introduction____________________________________________________________
/*
let name = 'John';                   // Lexical Scoping
function greeting() {
    let message = 'Hi';
    console.log(`${message} ${name}`);
} 
greeting();                           // Hi John
*/

/*
function greeting() {
    let message = 'Hi';
    function sayHi() {
        console.log(message);
    }
    sayHi();
}
greeting();                          // Hi
*/







//_____________________________________________________________JavaScript Closures____________________________________________________________
/*
function greeting() {
    let message = 'Hi';
    function sayHi() {
        console.log(message);
    }
    return sayHi;
}
let hi = greeting();
hi();                             // hi (Still can access the message variable)
*/







//__________________________________________________________More JavaScript Closures Example___________________________________________________
/*
function greeting(message) {
    return function(name) {
        return `${message} ${name}`;
    }
}
let sayHi = greeting('Hi');
let sayHello = greeting('John');
console.log(sayHi('John'));                                    // Hi John
console.log((sayHello('Dane')));                               // Hi Dane
*/








//____________________________________________________________Closures in a Loop___________________________________________________________________
/*
for (var index = 1; index <= 4; index++) {
    setTimeout(function() {
        console.log(`After ${index} seconds(s): ${index}`);
    }, index*1000);
}
// After 5 seconds(s): 5
// After 5 seconds(s): 5
// After 5 seconds(s): 5
// After 5 seconds(s): 5
*/







//_________________________________________________________________Using IIFE Solution____________________________________________________________
/*
for (var index = 1; index <= 4; index++) {
    (function(index) {
        setTimeout(function() {
            console.log(`After ${index} seconds(s) ${index}`);
        }, index*1000);
    })(index);
} 
// After 1 seconds(s) 1
// After 2 seconds(s) 2
// After 3 seconds(s) 3
// After 4 seconds(s) 4
*/








//________________________________________________________________Using let Keyword in ES6_________________________________________________________

for (let index = 1; index <= 4; index++) {
    setTimeout(function() {
        console.log(`After ${index} seconds(s): ${index}`);
    }, index*1000);
}
// After 1 seconds(s): 1
// After 2 seconds(s): 2
// After 3 seconds(s): 3
// After 4 seconds(s): 4