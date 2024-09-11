//................................................Introduction.....................................................
/*
Unary Operators	                                                   Name	                                                 Meaning
___________________________________________________________________________________________________________________________________________________________

     +x	                                                        Unary Plus	                                      Convert a value into a number
___________________________________________________________________________________________________________________________________________________________

     -x	                                                        Unary Minus	                                   Convert a value into a number and negate it
___________________________________________________________________________________________________________________________________________________________

    ++x	                                                 Increment Operator (Prefix)	                            Add one to the value
___________________________________________________________________________________________________________________________________________________________

     –x	                                                 Decrement Operator (Prefix)	                          Subtract one from the value
___________________________________________________________________________________________________________________________________________________________

    x++	                                                 Increment Operator (Postfix)	                              Add one to the value
___________________________________________________________________________________________________________________________________________________________

     x–	                                                 Decrement Operator (Postfix)	                             Subtract one from the value
___________________________________________________________________________________________________________________________________________________________
*/






//...............................................Unary plus(+).....................................................
/*
let x = 10;
let y = +x;
console.log(y);    // 10
*/
/*
       Value	                                                                       Result
_____________________________________________________________________________________________________________________________________________________

      boolean	                                                    false to 0, true to 1
_____________________________________________________________________________________________________________________________________________________

      string	                                                    Convert the string value based on a set of specific rules
_____________________________________________________________________________________________________________________________________________________

      object	                                                    Call the valueOf() and/or toString() method to get the value to convert into a number
_____________________________________________________________________________________________________________________________________________________
*/
/*
let s = '10';
console.log(+s);                      // 10
*/
/*
let f = false, t= true;
console.log(+f);                      // 0
console.log(+t);                      // 1
*/
/*
let person = {
    name: 'John',
    toString: function (){
        return '25';
    },
};
console.log(+person);                // 25
*/
/*
let person = {
    name: 'John',
    toString: function(){
        return '25';
    },
    valueOf: function(){
        return '30';
    },
};
console.log(+person);                // 30
*/








//..............................................................Unary Minus( - ).................................................
/*
let x = 10;
let y = -x;
console.log(y);      // -10
*/




//..........................................................Increment Operator...................................................
/*
let age = 25;
++age;
console.log(age);       // 26
*/
/*
let weight = 90;
weight = ++weight + 5;
console.log(weight);
*/
/*
let weights = 90;
weights = weights++ + 1;
console.log(weights);
*/




//......................................................Decrement Operator.......................................................
/*
let weight = 90;
weight = --weight;
console.log(weight);         // 89
*/
/*
let weight = 90;
weight = --weight + 5;
console.log(weight);         // 94
*/