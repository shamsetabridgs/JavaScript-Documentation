//_____________________________________________________________Introduction___________________________________________________________
/*
function add(x, y) {
    return x + y;
}
console.log(add instanceof Function);                     // true
console.log(add(10, 20));                                 // 30
*/

/*
function add(x, y) {
    return x + y;
}
let result = add.call(this, 10, 20);
console.log(result);                                      // 30
*/

/*
var greeting = 'Hi';
let messenger = {
    greeting: 'Hello'
}
function say(name) {
    console.log(`${this.greeting} ${name}`);
}
say.call(this, 'John');                               // undefined Hello
say.call(messenger, 'John');                          // Hello
*/






//_________________________________________________________call() Method to Chain constructor for an Object__________________________________________________________
/*
function Box(height, weight) {
    this.height = height;
    this.weight = weight;
}
function Widget(height, weight, color) {
    Box.call(this, height, weight);
    this.color = color;
}
let widget = new Widget('red', 100, 200);
console.log(widget);                                             // Widget { height: 'red', weight: 100, color: 200 }
*/







//_____________________________________________________call() Method for Function Borrowing________________________________________________________________
/*
const car = {
    name: 'car',
    start() {
        console.log(`Start the ${this.name}`);       
    },
    speedUp() {
        console.log(`Speed up the ${this.name}`);
    },
    stop() {
        console.log(`Stop the ${this.name}`);
    }
};
const aircraft = {
    name: 'aircraft',
    fly() {
        console.log(`Fly`);
    }
};
car.start.call(aircraft);                                   // start the aircraft
car.speedUp.call(aircraft);                                 // speed up the aircraft
aircraft.fly();                                             // Fly
*/


function isOdd(number) {
    return number % 2;
}
function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
}
let result = getOddNumbers(10, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(result);                                       // [ 1, 3, 5, 7, 9 ]