//__________________________________________________________________________TL;DR_____________________________________________________________________________
/*
(function() {
    //........
})();
*/






//_________________________________________________________________Why IIFEs(Immediately Invoked Function Expressions)___________________________________________________________

// Normaly all variable and functions stores a global object;
/*
function add(a, b) {
    return a + b;
}
console.log(window.add);            // use it in the browser console
*/
/*
var counter = 10;
console.log(window.counter);        // 10
*/


//______________________When we use IIFE

/*
(function(a, b) {
    return a + b;
})(10, 20);
*/

//_____________________Arrow IIFE
/*
(() => {
    //......
})();
*/


//______________________By placing functions & variables inside an IIFE, We can avoid polluting them to the Global Object
/*
(function() {
    let counter = 0;
    function add(a, b) {
        return a + b;
    }
    console.log(add(10, 20));                            // 30
})();
*/







//________________________________________________________________________Named IIFE________________________________________________________________________
/*
-> An IIFE can have a name. However, it cannot be invoked again after execution: 

(function namedIIFE() {
    //...
})();
*/