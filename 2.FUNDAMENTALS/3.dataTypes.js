//......................................Primitive Data Types............................................
/*
1. null                     5. string
2. undefined                6. symbol -availabe from ES2015
3. boolean                  7. bigint -availabe from ES2020
4. number
*/



//.....................................Complex Data Types...............................................
/* object */

// let counter = 120;
// console.log(typeof(counter));              // "number"

// counter = false;
// console.log(typeof(counter));              // "boolean"

// counter = 'Hi';
// console.log(typeof(counter));              // "string"



//..................................Undefined Type.......................................................
// let counter;
// console.log(counter);                        // undefined
// console.log(typeof(counter));                // undefined



//...................................The Number Type.....................................................
// let num = 100;
// let price = 12.5;
// let discount = 0.05;
// let salePrice = 200.00; // interpreted as an integer 200

// console.log(Number.MAX_VALUE);   // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE);   // 5e-324

// console.log(Number.MAX_VALUE + Number.MAX_VALUE);       // Infinity
// console.log(-Number.MAX_VALUE - Number.MAX_VALUE);      // -Infinity




//..........................................NaN(Not a Nmber)............................................
// console.log('a'/2);          // NaN;
// console.log(NaN/2);          // NaN
// console.log(NaN == NaN);     // false



//.........................................String Type...................................................
// let greeting = 'Hi';
// let message  = 'I \'m a single string';
// console.log(greeting, message);


/*
----------------------------------------------------------------------------------------------------------
Type                                           true                                            false
----------------------------------------------------------------------------------------------------------
string                                    non-empty string                                   empty string
----------------------------------------------------------------------------------------------------------
number                               non-zero number and infinity                               0, NaN
----------------------------------------------------------------------------------------------------------
Object                                     non-null object                                       null
----------------------------------------------------------------------------------------------------------
undefined                                                                                      undefined
*/

// console.log(Boolean('Hi'));// true
// console.log(Boolean(''));  // false

// console.log(Boolean(20));  // true
// console.log(Boolean(Infinity));  // true
// console.log(Boolean(0));  // false

// console.log(Boolean({foo: 100}));  // true on non-empty object
// console.log(Boolean(null));// false




//..........................................Symbol Type................................................
// let s1 = Symbol();
// console.log(Symbol() == Symbol());      // false



//.........................................The bigint Type.............................................
// let pageView = 90000444587454465847847n;
// console.log(typeof(pageView));      // bigint


//.........................................The Object Type.............................................
let emptyObject = {};
let person = {
    firstname : 'John',
    lastname  : 'Doe'
};

let contact = {
    firstname : 'John',
    lastname  : 'Doe',
    email     : 'john.doe@example.com',
    phone     : '(408)-555-9999',
    address   : {
        building : '4000',
        street   : 'North 1st street',
        city     : 'San Jose',
        state    : 'CA',
        country  : 'USA'
    }
}

console.log(contact.firstname);
console.log(contact.address);