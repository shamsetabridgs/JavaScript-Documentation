//.........................................................Logical Not Operator(!).....................................................
/*
let eligible = false, required = true;
console.log(!eligible);         // true
console.log(!required);         // false
*/
/*
console.log( !undefined );               // true
console.log( !null );                    // true
console.log( !20 );                      // false
console.log( !0 );                       // true
console.log( !NaN );                     // true
console.log( !{} );                      // false
console.log( !'' );                      // true
console.log( !'OK' );                    // false
console.log( !false );                   // true
console.log( !true );                    // false
*/
/*
let counter = 10;
console.log(!!counter); // true
*/



//.......................................................Logical AND operator(&&).........................................................
/*
        a	                      b 	                        a && b
    ______________________________________________________________________

      true	                     true	                         true
    ______________________________________________________________________
    
      true	                     false	                         false
    ______________________________________________________________________
      
      false	                     true	                         false
    ______________________________________________________________________
      
      false	                     false	                         false
    ______________________________________________________________________
*/
/*
let eligible = false, required = true;
console.log(eligible && required);         // false
*/
/*
let eligible = true, required = true;
console.log(eligible && required);         // true
*/





//.......................................................Short Circuit Evaluation................................................................
/*
let b = true;
let result = b && ( 1 / 0 );
console.log(result);                  // Infinity
*/
/*
let b = false;
let result = b && (1 / 0);
console.log(result);                  // false
*/





//........................................................Logical OR Operator(||).....................................................................
/*
         a	                                 b	                                      a || b
    ____________________________________________________________________________________________________________
    
       true	                               true	                                       true
    ____________________________________________________________________________________________________________
    
       true	                               false	                                   true
    ____________________________________________________________________________________________________________
       
       false	                           true	                                       true
    ____________________________________________________________________________________________________________
       
       false	                          false	                                      false
    ____________________________________________________________________________________________________________
*/
/*
let eligible = true, required = false;
console.log(eligible || required);             // true
*/
/*
let eligible = false, required = false;
console.log(eligible || required);            // false
*/