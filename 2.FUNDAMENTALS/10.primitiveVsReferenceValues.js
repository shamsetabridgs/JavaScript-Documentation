//.............................................Stack......................................
/*
let name = 'John';
let age  = 25;
                   
                        Stack
                ---------------------
                       age = 25
                ---------------------
                      name = 'John'
                ---------------------
*/



//........................................Reference.......................................
/*
let name = 'John';
let age  = 25;
let person = {
    name : 'John',
    age  : 25
};

                 Stack                                            Heap 
        ----------------------                     ---------------------------------    
               age = 25
        ----------------------
             name = 'John'
        ----------------------
               person         ...............................{name: 'John', age: 25}
*/




//...................................Dynamic Properties.................................
/*
let person = {
    name: 'john',
    age: 35
};
person.ssn = '123-45-6789';         // Add SSN property
person.name = 'John Doe';           // change the name
delete person.age;                  // Delete age property
console.log(person);                // { name: 'John Doe', ssn: '123-45-6789' }
*/

// let name = 'John';
// name.alias = 'Knight';
// console.log(name.alias);            // undefined




//..................................Copying values(Primitive).......................................
/*
let age    = 25;                                              Stack 
let newAge = age;                              ----------------------------------
                                                           newAge = 25
                                               ----------------------------------
                                                             age = 25
                                               ----------------------------------
*/
/*
let age = 25;
let newAge = age;
newAge = newAge + 1;
console.log(newAge);
                           Stack 
                    ---------------------
                           newAge = 26
                    ---------------------
                             age = 25
                    ---------------------
*/


//....................................Copying values(Reference).....................................
/*
let person = {
    name : 'John',
    age  : 25
};
let member = person;
member.age = 26;
console.log(person);         // { name: 'John', age: 26 }
console.log(member);         // { name: 'John', age: 26 }

                 Stack                                       Heap 
        ----------------------                  ---------------------------------
              member
        ----------------------                     {name : 'John', age: 25}
              person                            ---------------------------------
        ----------------------



               Stack                                         Heap 
        ----------------------                  ---------------------------------
              member
        ----------------------                     {name : 'John', age: 26}
              person                            ---------------------------------
        ----------------------
*/




//......................................................Summary................................................
/*
1. JavaScript has two types of values: primitive values and reference values
2. You can add, changes, or delete properties to a reference value, whereas you cannot do it with a primitive values.
3. Copying a primitive value from one variable from another creates a seperate value copy. It means that chamnging the value in one variable does not affect other.
4. Copying a reference from one variable to another creates a reference so that two variables refer to the same Object. This means that changing the object via one variable reflects in 
       another variable
*/