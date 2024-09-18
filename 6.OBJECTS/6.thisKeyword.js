//......................................................................Introduction........................................................................
/*
let counter = {
    count: 0,
    next: function() {
        return this.count;
    },
};
counter.next();
*/






//................................................................Global Context............................................................................
// console.log(this === window);                        // true
/*
this.color = 'Red';
console.log(window.color);              // 'Red'
*/






//..............................................................Simple Function Invocation...................................................................
/*
function show() {
    console.log(this === window);        
}
// show()                // true
window.show();           // true
*/

/*
function show() {
    'use strict';
    console.log(this === undefined);
    function display() {
        console.log(this === undefined);
    }
    display();
}
show()                       // true    true
*/






//...................................................................Method Invocation.........................................................................
/*
let car = {
    brand : 'Honda',
    getBrand : function() {
        return this.brand;
    }
}
console.log(car.getBrand());              // Honda
*/

/*
let car = {
    brand   : 'Honda',
    getBrand: function() {
        return this.brand;
    }
};
let bike = {
    brand : 'Harley Davidson'
};
let brand = car.getBrand.bind(bike);
console.log(brand());                    // Harley Davidson
*/






//...................................................................Constructor Invocation....................................................................
/*
function Car(brand) {
    this.brand = brand;
}
Car.prototype.getBrand = function() {
    return this.brand;
}
let car = new Car('Honda');
console.log(car.getBrand());             // Honda
*/

/*
function Car(brand) {
    if(!(this instanceof Car)) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}
*/

/*
function Car(brand) {
    if(!new.target) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}
*/







//.....................................................................Indirect Invocation............................................................................

function getBrand(prefix) {
    console.log(prefix + this.brand);
}
let honda = {
    brand : 'Honda'
};
let audi = {
    brand : 'Audi'
};
getBrand.call(honda, "It's a ");                   // It's a Honda
getBrand.call(audi, "It's an ");                   // It's an Audi






//.........................................................................Arrow Functions............................................................................
/*
let getThis = () => this;
console.log(getThis() === window);                 // Honda
*/


function Car() {
    this.speed = 120;
}
Car.prototype.getSpeed = () => {
    return this.speed;
};
var car = new Car();
console.log(car.getSpeed());                      // Undefined