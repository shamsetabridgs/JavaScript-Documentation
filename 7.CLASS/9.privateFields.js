//_____________________________________________________________Introduction___________________________________________________________
/*
class Circle {
    #radius;
    constructor(value) {
        this.#radius = value;
    }
    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }
}
let circle = new Circle(10);
console.log(circle.area);                                   // 314.1592653589793
*/






//_______________________________________________Using GETTER & SETTER to Access PRIVATE fields________________________________________
/*
class Circle {
    #radius = 0;
    constructor(radius) {
        this.radius = radius;                      // calling setter
    }
    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }
    set radius(value) {
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
        } else {
            throw `The radius must be a positive number`;
        }
    }
    getRadius() {
        return this.#radius;
    }
}
let mycircle = new Circle(5);
console.log(`Radius: ${mycircle.getRadius()}`);                         // Output: Radius: 5
console.log(`Area: ${mycircle.area}`);                                  // Output: Area: 78.53981633974483
mycircle.radius = 10;                                                                                        // Set a new radius using setter
console.log(`Updated Radius: ${mycircle.getRadius()}`);                 // Updated radius: 10
console.log(`Updated Area: ${mycircle.area}`);                          // Updated Area: 314.1592653589793
*/






//______________________________________________________________Private Fields and Subclass______________________________________________
/*
class Circle {
    #radius = 0;
    constructor(radius) {
        this.radius = radius;                              // calling setter
    }
    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }
    set radius(value) {
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
        } else {
            throw `The radius must be a positive number`;
        }
    }
    get radius() {
        return this.#radius;
    }
}
class Cylinder extends Circle {
    #height;
    constructor(radius, height) {
        super(radius);
        this.#height = height;

          // cannot access the #radius of the Circle class here

    }
}
*/







//______________________________________________________________The in operator: Check private fields exist________________________________________________________
/*
fieldName in objectName
*/
/*
class Circle {
    #radius = 0;
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }
    set radius(value) {
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
        } else {
            throw `The radius must be a positive number!`;
        }
    }
    get redius() {
        return this.#radius
    }
    static hasRadius(circle) {
        return #radius in circle;
    }
}
let circle = new Circle(10);
console.log(Circle.hasRadius(circle));                               // true
*/









//_______________________________________________________________Static Private Fields_____________________________________________________________

class  Circle {
    #radius = 0;
    static #count = 0;
    constructor(radius) {
        this.radius = radius;                    // calling radius
        Circle.#count++;
    }
    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }
    set radius(value) {
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
        } else {
            throw `The value must be positive integer!`
        }
    }
    get radius() {
        return this.#radius;
    }
    static hasRadius(circle) {
        return #radius in circle;
    }
    static getCount() {
        return Circle.#count;
    }
}
let circle = [new Circle(10), new Circle(20), new Circle(30)];
console.log(Circle.getCount());                                             // 3
