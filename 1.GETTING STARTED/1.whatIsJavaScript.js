// let x = 10;
// let y = 20;
// console.log(x+y);


// function add(a, b) {
//     return a+b;
// }
// let result = add(500,600);
// console.log('The result is : ' + result);


// function divide(a, b) {
//     if(b === 0){
//         throw 'Division by Zero!!!';
//     } else {
//         return a / b;
//     }
// }
// let a=40, b= 0;
// console.log(divide(a, b));


let items = [1, 2, 3];
console.log(items.length);
for (let index = 0; index < items.length; index++) {
    console.log(items[index]);
}
for (item of items) {
    console.log(item);
}