//....................................................Introduction(**).....................................................
/*
Math.pow(base, exponent)
*/
/*
let result = Math.pow(2, 3);
console.log(result);         // 8
*/





//...........................................................X**N..........................................................
/*
let result = 2 ** 2;
console.log(result);       // 4
*/

/*
let result = 2n ** 3n;
console.log(result);       // 8n
*/

/*
let x = 2;
x **= 4;
console.log(x);     // 16
*/

/*
let result = -2**3;    // Uncaught SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence
*/

let result = (-2)**3;
console.log(result);         // -8