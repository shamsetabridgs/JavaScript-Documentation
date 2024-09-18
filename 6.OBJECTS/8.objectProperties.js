//.......................................................................Object Properties Types.......................................................................
/*
1. Data Properties     ->  [[Configurarable]],       [[Enumerable]],     [[Writable]],      [[Value]]
*/
/*
let person = {
    firstName : 'John',
    lastName : 'Doe'
};
*/
/*
let person = {};
person.age = 25;
delete person.age;
console.log(person.age);                  // undefined
*/

/*
'use strict';
let person = {};
Object.defineProperty(person, 'ssn', {
    configurable : false,
    value : '012-38-9119'
});
delete person.ssn;                            // TypeError: Cannot delete property 'ssn' of #<Object>
*/

/*
'use strict';
let person = {};
Object.defineProperty(person, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});
Object.defineProperty(person, 'ssn', {
    configurable:true
});
//  TypeError: Cannot redefine property: ssn    
*/

/*
let person = {};
person.age = 25;
person.ssn = '012-38-9119';
for (let property in person) {
    console.log(property);
};                               // age ssn
*/

/*
let person = {};
person.age = 25;
person.ssn = '012-38-9119';
Object.defineProperty(person, 'ssn', {
    enumerable: false
});
for (let prop in person) {
    console.log(prop);
}                            // age
*/







//......................................................................Accessor Properties.............................................................................
/*
let person = {
    firstName: 'John',
    lastName : 'Doe'
};
Object.defineProperty(person, 'fullname', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName  = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});
console.log(person.fullname);                    // John Doe
*/






//.............................................................Define Multiple Properties(Object.defineProperties())......................................................
/*
var product = {};
Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    }, 
    netPrice: {
        get: function() {
            return this.price * (1 + this.tax);
        }
    }
});
console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + 'USD');        //   The net price of a Smartphone is 878.90USD
*/







//.............................................................JavaScript Object Properties Descriptor......................................................................

let person = {
    firstName : 'John',
    lastName  : 'Doe'
};
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);                                                //     { value: 'John', writable: true, enumerable: true, configurable: true }