//...........................................................Introduction...........................................................
/*
function recurse() {
    if(condition) {
        // stop calling itself
        //..........
    } else {
        recurse();
    }
}
*/





//......................................................Simple Recursive Function....................................................
/*
function countDown(fromNumber) {
    console.log(fromNumber);
    countDown(fromNumber - 1);
}
countDown(3);                  // Uncaught RangeError: Maximum call stack size exceeded.
*/

/*
function countDown(fromNumber) {
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);
*/






//................................................Calculate the Sum of n Natural Numbers...................................................

function sum(n) {
    if(n <= 1) {
        return 1;
    }
    return n + sum(n - 1);
}
console.log(sum(10));              //  55