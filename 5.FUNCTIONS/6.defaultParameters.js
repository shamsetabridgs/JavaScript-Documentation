//.......................................................Introduction...............................................................
/*
function say(message = 'Hi') {
    console.log(message);
}
say();         // Hi
say('Hello');  // Hello
*/



//....................................................Arguments vs Parameters........................................................
/*
function add(x, y) {               // x and y are the parameter of add() functions
    return x + y;
}
add(100, 200);                     // 100 and 200 are the arguments of the add() functions
*/




//...........................................Setting JavaScript Default Parameters for a Function.....................................
/*
function say(message = 'Hi') {
    console.log(message);
}
say();                           // Hi
say(undefined);                  // Hi
say('Hello');                    // Hi
*/





//....................................................Passing Undefined Arguments.........................................................
/*
function createDiv(height = '100px', width = '100px', border = 'solid 1px red') {
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width  = width;
    div.style.border = border;
    document.body.appendChild(div);
    return div;
}
createDiv()
createDiv(undefined, undefined, 'solid 5px blue');
*/



//........................................................Evaluating Default Parameters.....................................................
/*
function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}
console.log(put('Toy Car'));                 // [ 'Toy Car' ]
console.log(put('Teddy Bear'));              // [ 'Teddy Bear' ]
*/

/*
function date( d = today() ) {
    console.log(d);
}
function today() {
    return (new Date().toLocaleDateString("en-US"));
}
date();
*/

/*
function requiredArg() {
    throw new Error('The argument is required');
}
function add(x = requiredArg(), y = requiredArg()) {
    return x + y;
}
//add(10);                                 //  error
console.log(add(10, 20));                  // OK - 30
*/






//........................................................Using Others Parameters in Default Values......................................................
/*
function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}
console.log(add());                   // 4
*/

/*
function subtract( x = y, y = 1 ) {
    return x - y;
} 
subtract(10);                         // Uncaught ReferenceError: Cannot access 'y' before initialization
*/







//....................................................................Using Functions...................................................................
/*
let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}
let fullPrice = getPrice(100);
console.log(fullPrice);           // 110
*/






//...............................................................Arguments Objects.......................................................................
/*
function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}
add(10);                           // 1
add(10, 20);                       // 2
add(10, 20, 30);                   // 3
*/