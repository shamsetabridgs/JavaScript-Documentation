/*
Type                                           true                                            false
----------------------------------------------------------------------------------------------------------
string                                    non-empty string                                   empty string
----------------------------------------------------------------------------------------------------------
number                               non-zero number and infinity                               0, NaN
----------------------------------------------------------------------------------------------------------
Object                                     non-null object                                       null
----------------------------------------------------------------------------------------------------------
undefined                                                                                      undefined
----------------------------------------------------------------------------------------------------------
*/


// let error = 'An error has occured!';
// if (error){
//     console.log(error);
// }


// let error = '';
// if (error) {
//     console.log(error);
// } else {
//     console.log(false);
// }

let error = 'An error has ocured.'
let hasError = Boolean(error);
console.log(hasError);