//.................................................JavaScript Prototypal Inheritance and __proto__..............................................................
/*
let person = {
    name : 'John Doe',
    greet: function() {
        return "Hi, I 'm " + this.name;
    }
};
console.log(person.toString());                              //  [object Object]
console.log(person.__proto__);                               //  [Object: null prototype] {}
console.log(person.__proto__ === Object.prototype);          // true

let teacher = {
    teach : function(subject) {
        return "I can teach " + subject;
    }
};
teacher.__proto__ = person;
console.log(teacher.name);                                   // John Doe
console.log(teacher.greet());                                // Hi, I 'm John Doe
*/



//.............................................Standard way to Implement protypal inheritance in ES5..............................................................
/*
let person ={
    name : 'John Doe',
    greet: function() {
        return "Hi, I'm " + this.name;
    }
};
let teacher = Object.create(person);
teacher.name = 'Jane Dane';
teacher.teach = function(subject) {
    return "I can teach " + subject;
}
console.log(person.name);                                 // John Doe
console.log(teacher.name);                                // Jane Dane
console.log(teacher.greet());                             // Hi, I 'm Jane Dane
console.log(teacher.teach('English'));                    // I can teach English
*/

//....................or.......................

let person = {
    name : 'John Doe',
    greet: function() {
        return "Hi, I'm " + this.name;
    }
};
let teacher = Object.create(person, {
    name : { value: 'Jane Dane' },
    teach: { value: function(subject) {
        return "I can teach " + subject;
    }}
});
console.log(Object.getPrototypeOf(teacher) === person);       // true

