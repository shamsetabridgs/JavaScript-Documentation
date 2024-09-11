//................................................Introduction..................................................
/*
dividend % divisor
* The equation of the remainder
dividend = divisor * quotient + remainder
where |remainder| < |divisor|
*/



//............................................With Positive Dividend............................................
/*
let remainder = 5 % 2;
console.log(remainder)      // 1
remainders = 5 % -2;
console.log(remainders);    // 1
*/



//............................................With Negative Dividend............................................
/*
let remainder = -5 % 3;
console.log(remainder);     // -2
let remainders = -5 % -3;
console.log(remainders);    // -2
*/



//...........................................Remainder Operator Special Value....................................
/*
console.log( Infinity % 2 );                   // NaN
 
console.log( 10 % 0 );                         // NaN

console.log( Infinity % Infinity );           // NaN

console.log( 10 % Infinity );                 // 10

console.log( 0 % 10 )                         // 0

console.log( '10' % 3 )                       // 1
*/




//...........................................Check If the a Number is an Odd Number...............................
/*
function isOdd(num) {
    return num % 2;
}
or
const isOdd = (num) => num % 2;
*/




//............................................Remainder vs Modulo Operator........................................
// modulo = (( dividend % divisor ) + divisor) % divisor

const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;
console.log('remainder', 5 % 3);             // 2
console.log('modulo', mod(5, 3));            // 2
console.log('remainder', -5 % 2);            // -1
console.log('modulo', mod(-5 , 2));          // 1