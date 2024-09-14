//..................................................................Introduction.................................................................
/*
let show = function() {
    console.log('Anonymous Function');
}
show();                  // Anonymous Function
*/




//......................................................Anonymous Function as an Arguments........................................................
/*
setTimeout( function() {
    console.log('Execute later after 1 seconds!');
}, 1000);                                          //  Execute later after 1 seconds!
*/





//.......................................................Immediately Invoked Function Expression(IIFE)....................................................
/*
If we want to create a function and execute it immediately after the declaration, we can declare an anonymous function is called Immediately Invoked Function Expression(IIFE). 
*/

/*
(function() {
    console.log('IIFE');
}());                        // IIFE
*/

/*
let person = {
    firstname : 'John',
    lastname  : 'Doe'
};
(function() {
    console.log(person.firstname + ' ' + person.lastname);
}(person))                   // John Doe
*/





//.............................................................Arrow Functions............................................................
/*
let show = () => console.log('Anonymous Function');
show();
*/
/*
let add = (a, b) => a + b;
console.log(add(10, 20));
*/