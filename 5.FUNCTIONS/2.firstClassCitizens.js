
//...........................................Storing Function in Variables..................................................
/*
function add(a, b) {
    return a + b;
}
let sum = add;
console.log(sum(20,10));          // 30
*/





//............................................Passing a Function to Another Function..........................................
/*
function add(a, b) {
    return a + b;
}
let sum = add;
function average(a, b, fn) {
    return fn(a, b) / 2;
}
let result = average(10, 20, sum);
console.log('Result : ' + result);                // Result = 15
*/

/*
function add(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
function average(fn, ...numbers) {
    return fn(...numbers) / numbers.length;
}
let result = average(add, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10);
console.log(result);                   // 5.5
*/






//........................................Returning Functions from Functions.....................................................
/*
function compareBy(propertyName) {
    return function (a, b) {
        let x = a[propertyName], y = b[propertyName];
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}
let products = [
    { name : 'iphone', price : 900 },
    { name : 'Samsung Galaxy', price : 850 },
    { name : 'Sony Xperia', price: 700 }
]
console.log('Sort Products by name: ');
products.sort(compareBy('name'));
console.table(products);
/*
Sort Products by name: 
┌─────────┬──────────────────┬───────┐
│ (index) │ name             │ price │
├─────────┼──────────────────┼───────┤
│ 0       │ 'Samsung Galaxy' │ 850   │
│ 1       │ 'Sony Xperia'    │ 700   │
│ 2       │ 'iphone'         │ 900   │
└─────────┴──────────────────┴───────┘
*/

/*
function compareBy(propertyName) {
    return function (a, b) {
        let x = a[propertyName], y = b[propertyName];
        if(x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}
let products = [
    { name : 'iphone', price : 900 },
    { name : 'Samsung Galaxy', price : 700 },
    { name : 'Sony Xperia', price : 850 },
]
products.sort(compareBy('price'));
console.table(products);
/*
┌─────────┬──────────────────┬───────┐
│ (index) │ name             │ price │
├─────────┼──────────────────┼───────┤
│ 0       │ 'Samsung Galaxy' │ 700   │
│ 1       │ 'Sony Xperia'    │ 850   │
│ 2       │ 'iphone'         │ 900   │
└─────────┴──────────────────┴───────┘
*/


/*
function compareBy(propertyName) {
    return function(a, b) {
        let x = a[propertyName], y = b[propertyName];
        if (x > y) {
            return 1;
        } else if ( x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}
let products = [
    { name : 'iphone', price : 900 },
    { name : 'Samsung Galaxy', price : 700 },
    { name : 'Sony Xperia', price : 850 },
]
products.sort((a,b) => -compareBy('price')(a, b));
console.table(products);
/*
┌─────────┬──────────────────┬───────┐
│ (index) │ name             │ price │
├─────────┼──────────────────┼───────┤
│ 0       │ 'iphone'         │ 900   │
│ 1       │ 'Sony Xperia'    │ 850   │
│ 2       │ 'Samsung Galaxy' │ 700   │
└─────────┴──────────────────┴───────┘
*/

/*
function cmToIn(length) {
    return length / 2.54;
}
function inToCm(length) {
    return length * 2.54;
}
function convert(fn, length){
    return fn(length);
}
let inches = convert(cmToIn, 10);
console.log('CM to INCH : ' + inches);
let cm = convert(inToCm, 10);
console.log('INCH to CM : ' + cm);
/*
CM to INCH : 3.937007874015748
INCH to CM25.4
*/