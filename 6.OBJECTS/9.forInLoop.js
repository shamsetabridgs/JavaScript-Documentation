//...................................................................Introduction.....................................................................
/*
Object.propertyName = value;
or
let obj = {
    propertyName : value,
    .....
};
*/

/*
var person = {
    firstName : 'John',
    lastName  : 'Doe',
    ssn       : '299-24-2351'
};
for(var prop in person) {
    console.log(prop + ':' + person[prop]);
}
firstName:John
lastName:Doe
ssn:299-24-2351
*/





//.................................................................The for...in Loop & Inheritance.......................................................
/*
var decoration = {
    color : 'red'
};
var circle = Object.create(decoration);
circle.radius = 10;
for(const prop in circle) {
    console.log(prop);
}                                //  radius   color
*/

/*
var decoration ={
    color : 'red'
};
var circle = Object.create(decoration);
circle.radius = 10;
for(const prop in circle) {
    if(circle.hasOwnProperty(prop)) {
        console.log(prop);
    }
}                             // radius
*/






//...............................................................The for...in Loop & Array.................................................................
/*
const items = [10, 20, 30];
let   total = 0;
for(const item in items) {
    total += items[item];
}
console.log(total);             // 60
*/


Array.prototype.foo       = 100;
const items               = [10, 20, 30];
let   total               = 0;
for (let prop in items) {
    console.log({prop, value: items[prop]});
    total += items[prop];
}
console.log(total);