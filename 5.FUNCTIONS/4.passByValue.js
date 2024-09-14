//............................................................Pass By Value of Primitive Values..........................................................
/*
function square(x) {
    x = x * x;
    return x;
}
let y = 10;
let result = square(y);
console.log(result);       // 100
console.log(y);            // 10 -- no change
*/




//..................................................................Pass by Value of Reference Value........................................................
/*
let person = {
    name : 'John',
    age  : 25
};
function increaseAge(obj) {
    obj.age += 1;
}
increaseAge(person);
console.log(person);          // { name: 'John', age: 26 }
*/


let person = {
    name : 'John',
    age  : 25
};
function increaseAge(obj) {
    obj.age += 1;
    obj = { name: 'Jane', age : 22 }
}
increaseAge(person);
console.log(person);          // { name: 'John', age: 26 }