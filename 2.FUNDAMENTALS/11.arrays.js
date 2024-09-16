//........................................Arrays........................................................
/*
Index-------->   0          1          2           3         4
Element------>   1          2       'Three'      true       null
*/




//.....................................Creating JavaScript Array.........................................
/*
let scores = new Array()                       // By Array Constructor
let score = new Array(10);                     // By Array size inside the array constructor 
let scorer = new Array(9, 10, 11, 8, 7, 6)     // By the array elements inside the array constructor
*/



//......................................Preferred Way of JavaScript Array................................
/*
let color = ['red', 'green', 'blue'];
let emptyArray = [];
*/



//.......................................Accessing JavaScript Array Elements..............................
/*
let mountains = ['Everest', 'Fuji', 'Naga Parbat'];
console.log(mountains[0]);             // Everest
console.log(mountains[1]);             // Fuji
console.log(mountains[0]);             // Naga Parbat
*/



//..................................Changing the Value of Elements........................................
/*
let mountains = ['Everest', 'Fuji', 'Naga Parbat'];
mountains[2] = 'K2';
console.log(mountains);        // [ 'Everest', 'Fuji', 'K2' ]
*/



//....................................Getting the Array Size..............................................
/*
let mountains = [ 'Everest', 'Fuji', 'K2' ];
console.log(mountains.length);        // 3
*/




//.................................Addding Element to the end of the array................................
/*
let seas = ['Black Sea', 'Carribean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');
console.log(seas);                //        [ 'Black Sea', 'Carribean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]
*/



//...............................Adding Element to the Beginning of an Array..............................
/*
let seas = ['Black Sea', 'Carribean Sea', 'North Sea', 'Baltic Sea'];
seas.unshift('Red Sea');
console.log(seas);                //       [ 'Red Sea', 'Black Sea', 'Carribean Sea', 'North Sea', 'Baltic Sea' ]
*/



//..............................Removing the Element from the End of the Array.............................
/*
let seas = ['Black Sea', 'Carribean Sea', 'North Sea', 'Baltic Sea'];
let lastElement = seas.pop()
console.log(lastElement);         //   Baltic Sea
*/



//..............................Removing en Element from the Beginning of an Array.........................
/*
let seas = ['Black Sea', 'Carribean Sea', 'North Sea', 'Baltic Sea'];
let firstElement = seas.shift();
console.log(firstElement);            //   Black Sea
console.log(seas);                    //   [ 'Carribean Sea', 'North Sea', 'Baltic Sea' ]
*/



//......................................Finding the Index of an Array.......................................
/*
let seas = ['Black Sea', 'Carribean Sea', 'North Sea', 'Baltic Sea'];
let index = seas.indexOf('Baltic Sea');
console.log('Index : ' + index);          // index : 3
*/




//.......................................Check If the Value is an Array.....................................
let seas = ['Black Sea', 'Carribean Sea', 'North Sea', 'Baltic Sea'];
console.log(Array.isArray(seas));        // true