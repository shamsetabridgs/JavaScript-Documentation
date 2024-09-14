//..........................................................Introduction........................................................
/*
let colors = ['red', 'blue', 'green'];
let rgb = [...colors];
console.log(rgb);          // [ 'red', 'blue', 'green' ]
*/

/*
let rgb  = ['red', 'blue', 'green'];
let cmyk = ['cyan', 'meganta', 'yello', 'black'];
let merge = [...rgb, ...cmyk];
console.log(merge);          // ['red', 'blue', 'green', 'cyan', 'meganta', 'yello', 'black']
*/

/*
const circle = {
    radius : 10
};
const coloredCircle = {
    ...circle,
    color : 'black'
};
console.log(coloredCircle);    // { radius: 10, color: 'black' }
*/





//........................................................Cloning An Object (Use Case)...................................................
/*
const circle = {
    radius: 10
};
const clonedCircle = {...circle};
console.log(clonedCircle);
*/

/*
const circle = {
    radius : 10,
    style : {
        color : 'blue'
    }
};
const clonedCircle = {
    ...circle
};
clonedCircle.style = 'red';
console.log(clonedCircle);
*/





//........................................................Merging Objects..............................................................
/*
const circle = {
    radius : 10
};
const style = {
    backgroundColor : 'red'
}
const solidCircle = {
    ...circle,
    ...style
}
console.log(solidCircle);
*/




//....................................................Spread Operator vs Object.assign()................................................
/*
1. The spread operator is : ( ... )
2. The assign operator is : Object.assign()
*/




//...................................................Target Object with Setters.........................................................
/*
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set diameter(value) {
        this.radius = value / 2;
        console.log('SET ', value);
    }
    get diameter() {
        return this.radius * 2;
    }
}
let circle = new Circle(100);
let clonedCircle = Object.assign(circle, {
    diameter : 200
});
let coloredCircle2 = {
    ...circle
};
//     SET 200
*/




//...............................................Taarget Objects with Read-Only Propertires...............................................
/*
const blueSquare = {
    length : 100,
    color  : 'blue'
}
Object.defineProperty(blueSquare, 'color', {
    value : 'blue',
    enumerable : true,
    writable : false
});
console.log(blueSquare);     // { length: 100, color: 'blue' }
*/

/*
const blueSquare = {
    length : 100,
    color  : 'blue'
}
Object.defineProperty(blueSquare, 'color', {
    value : 'blue',
    enumerable : true,
    writable : false
});
const style = {
    color : 'green'
};
const greenSquare = {
    ...blueSquare,
    ...style
};
console.log(greenSquare);            // { length: 100, color: 'green' }
const redSquare = Object.assign(blueSquare, {
    color : 'red'
})                                   // TypeError: Cannot assign to read only property 'color' of object '#<Object>'

*/