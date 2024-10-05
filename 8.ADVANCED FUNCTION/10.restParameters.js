//__________________________________________________________________________Introduction__________________________________________________________________________
/*
function fn(a, b, ...args) {
    //...
}
fn(1, 2, 3, 4, "A", "B", "C");

The 'args' array stores the following values:
[3, 'A', 'B', 'C']

If you pass only the first two parameters, the rest parameter will be an empty array:
fn(1, 2)
The 'args' will be:
[]


function fn(a, ...args, b) {
    // error
}
Error -> SyntaxError: Rest parameter must be last formal parameter
*/









//__________________________________________________________________More Javascript rest parameters Example____________________________________________________________
/*
function sum(...args) {
    let total = 0;
    for(const a of args) {
        total += a;
    }
    return total;
}
let total = sum(1, 2, 3, 4);
console.log(total);                          // 10
*/

/*
function sum(...args) {
    return args.filter(function(e) {
        return typeof e === 'number';
    }).reduce(function(prev, curr) {
        return prev + curr;
    });
}
let result = sum(10, 'Hi', null, undefined, 20);
console.log(result);                                // 30
*/



// lets we need to filter the arguments based on a specific type such as numbers, strings, boolean, and null
/*
function filterBy(type, ...args) {
    return args.filter(function(e) {
        return typeof e === type;
    });
}
const mixedArray = [1, 'hello', true, 42, 'world', false, 3.14, 'JavaScript'];

const numbers = filterBy('number', ...mixedArray);
console.log(numbers);                               // [ 1, 42, 3.14 ]

const strings = filterBy('string', ...mixedArray);
console.log(strings);                               // [ 'hello', 'world', 'JavaScript' ]

const booleans = filterBy('boolean', ...mixedArray);
console.log(booleans);                              // [ true, false ]
*/










//________________________________________________________________Rest Parameters and Arrow Function________________________________________________________________
/*
const combine = (...args) => {
    return args.reduce(function(prev, curr) {
        return `${prev} ${curr}`;
    });
};
let message = combine('JavaScript', 'Rest', 'Parameters');
console.log(message);                                      // JavaScript Rest Parameters
*/








//_________________________________________________________________JavaScript Rest Parameter in a Dynamic Function_____________________________________________________

let showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3, 4);                                  // [ 1, 2, 3, 4 ]