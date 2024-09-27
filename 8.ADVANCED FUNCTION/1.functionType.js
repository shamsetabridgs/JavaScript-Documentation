//_________________________________________________________________________Introduction________________________________________________________________________________
/*
function add(x, y) {
    return x + y;
}
console.log(add.length);           // 2
console.log(add.prototype);        // Object{}
//   new.target
let result = add(10, 20);
console.log(result);                // 30
let obj = new add(10, 20);
console.log(obj);                   // add {}
*/

/*
function add(x, y) {
    console.log(new.target);   
    return x + y;
}
let result = add(10, 20);            // undefined
let obj    = new add(10, 20);        // [Functon: add]
*/

/*
function add(x, y) {
    if(new.target) {
        throw `The add function cannot be called as a constructor!`;
    }
    return x + y;
}
let obj2 = add(10, 20);
console.log(obj2);                           // 30
let obj1 = new add(10, 20);
console.log(obj1);                           // The add function cannot be called as a constructor!
*/








//__________________________________________________________________Function Methods: apply(), call() and bind()_______________________________________________________________

/*_______________________________________________apply() Method_____________________________________________
let cat = {type: 'Cat', sound: 'Meow'};
let dog = {type: 'Dog', sound: 'Wolf'};
const say = function(message) {
    console.log(message);
    console.log(`${this.type} says ${this.sound}`);
}
say.apply(cat, ['What does a cat say?']);
say.apply(dog, ['What does a dog say?']);

// What does a cat say?
// Cat says Meow
// What does a dog say?
// Dog says Wolf
*/

/*________________________________________________call() Method_______________________________________________
let cat = {type: 'Cat', sound: 'Meow'};
let dog = {type: 'Dog', sound: 'Wolf'};
const say = function(message) {
    console.log(message);
    console.log(`${this.type} says ${this.sound}`);
}
say.call(cat, 'What does a cat say?');
say.call(dog, 'What does a dog say?');
// What does a cat say?
// Cat says Meow
// What does a dog say?
// Dog says Wolf
*/

let car = {
    speed: 5,
    start: function() {
        console.log(`Start with ${this.speed} km/h`);
    }
};
let aircraft = {
    speed: 10,
    fly: function() {
        console.log('Flying');
    }
};
let taxiing = car.start.bind(aircraft);
taxiing();                                    // Start with 10 km/h
car.start.call(aircraft);                     // Start with 10 km/h