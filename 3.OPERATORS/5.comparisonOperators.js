//.......................................................Introduction....................................................
/*
       Operator	                                           Meaning
    ____________________________________________________________________________

         <	                                             less than
    ____________________________________________________________________________

        >	                                            greater than
    ____________________________________________________________________________
        
        <=	                                        less than or equal to
    ____________________________________________________________________________
        
        >=	                                       greater than or equal to
    ____________________________________________________________________________
        
        ==	                                              equal to
    ____________________________________________________________________________
        
        !=	                                            not equal to
    ____________________________________________________________________________
*/
/*
let r1 = 20 > 10;          // true
let r2 = 20 < 10;          // false
let r3 = 10 == 10          // true
*/





//...............................................................Compare Number.......................................................
/*
let a = 10, b = 20; 
console.log(a >= b);  // false
console.log(a == 10); // true
*/




//...............................................................Compare Strings......................................................
/*
let name1 = 'alice', name2 = 'bob';
let result = name1 < name2;
console.log(result);                   // true
console.log(name1 == 'alice');         // true
*/




//................................................Compare Number with Another Value....................................................
/*
console.log(10 < '20');      // true
console.log(10 == '10');     // true
console.log(10 === '10');    // false
*/



//................................................Compare Object with non-object.......................................................
/*
let apple = {
    valueOf: function(){
        return 10;
    },
};
let orange = {
    toString: function(){
        return '20';
    },
};
console.log(apple > 10);          // false
console.log(orange == 20);        // true
*/






//.............................................Compare Boolean with Another Value.......................................................
/*
console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true
*/




//...........................................Compare Null and Undefined..................................................................
// console.log(undefined == null);         //true




//.............................................Compare NaN with Other Value..............................................................
/*
console.log(NaN == 1); // false
console.log(NaN == NaN); // false
console.log(NaN != 1); // true
console.log(NaN != NaN); // true
*/




//.....................................................Strict Comparision Operator.......................................................
/*
       Operator	                                  Meaning
    ________________________________________________________________

         ===	                                strict equal
    ________________________________________________________________
         
         !==	                               not strict equal
    ________________________________________________________________
*/
/*
console.log("10" == 10); // true
console.log("10" === 10); // false
*/