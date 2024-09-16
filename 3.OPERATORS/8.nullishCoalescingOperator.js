//...........................................................Introduction........................................................
/*
value1 ?? value2
*/
/*
const result = value1;
if ( result === null || result === undefined) {
    result = value2;
}
*/
/*
const name = null ?? 'John';
console.log(name);         // John
*/
/*
const age = undefined ?? 28;
console.log(age);
*/
/*
let age = 'masum';
let isAge = age ?? 10;
console.log(isAge);              //  masum
*/



//..................................................Chaining with the AND or OR operator..........................................
/*
const result = null || undefined ?? 'OK';                              // Syntax Error
*/

const result = ( null || undefined ) ?? 'OK';
console.log(result);   // Ok