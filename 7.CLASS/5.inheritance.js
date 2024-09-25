//______________________________________________________________________Prior to ES6___________________________________________________________
/*
function Animal(legs) {
    this.legs = legs;
}
Animal.prototype.walk = function () {
    console.log('Walking on ' + this.legs + ' legs');
}
function Bird(legs) {
    Animal.call(this, legs);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;
Bird.prototype.fly = function() {
    console.log('Flying');
}
var pigeon = new Bird(2);
pigeon.walk();                          // Walking on two legs
pigeon.fly();                           // Flying 
*/





//_______________________________________________________________________After ES6________________________________________________________________
/*
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log(`Walking on ${this.legs} legs`);
    }
}
class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log(`Flying`);
    }
}
let bird = new Bird(2);
bird.walk();                                  // Walking on 2 legs
bird.fly();                                   // Flying
*/
/*
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log(`Walking on ${this.legs} legs`);
    }
}
class Bird extends Animal {
    constructor(legs, color) {
        super(legs);
        this.color = color;
    }
    fly() {
        console.log(`Flying!!!`);
    }
    getColor() {
        return this.color;
    }
}
let pegion = new Bird(2, `White`);
console.log(pegion.getColor());                   // White
*/







//_________________________________________________________________Shadowing Methods___________________________________________________________________
/*
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log(`Walking on ${this.legs} legs`);
    }
}
class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        console.log(`Go Walking!!!`);
    }
}
let bingo = new Dog();
bingo.walk();                             // Go Walking
*/
/*
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log(`Walking on ${this.legs} legs`);
    }
}
class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        super.walk();
        console.log(`Go walking`);
    }
}
let bingo = new Dog();
bingo.walk();                                  // Wlaking on 4 legs / Go walking
*/






//__________________________________________________________________________Inheriting Static Member___________________________________________________________________________
/*
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log(`Walking on ${this.legs} legs`);
    }
    static helloWorld() {
        console.log(`Hello World`);
    }
}
class Bird extends Animal {
    fly() {
        console.log(`Flying`);
    }
}
Bird.helloWorld();                   // Hello World
*/






//__________________________________________________________________Inheriting from Built-in Types_______________________________________________________________________________

class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}
let customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');
while (!customers.empty()) {
    console.log(customers.dequeue());
    console.log(customers.peek());
    
}
/*
A
B
B
C
C
undefined
*/