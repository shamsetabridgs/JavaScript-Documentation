//_________________________________________________________________Event Handler____________________________________________________________________
/*
At time of event handling, we cannot use the Arrow Method. We have to use traditional function.
*/







//__________________________________________________________________Object Method_______________________________________________________________________
/*
const counter = {
    count: 0,
    next: () => ++this.count,
    current: () => this.count
};
console.log(counter.next());                                 // NaN
*/
//....................We have to use here treditional function for object method........................
/*
const counter = {
    count: 0,
    next() {
        return ++this.count;
    },
    current() {
        return this.count;
    }
};
console.log(counter.next());             // 1
*/









//________________________________________________________________Prototype Methods_____________________________________________________________________
/*
function Counter() {
    this.count = 0;
}
Counter.prototype.next = () => {
    return this.count;
}
Counter.prototype.current = () => {
    return ++this.next;
}
let counter = new Counter();
console.log(counter.current());                      // Nan
*/

//......................The corrected form is.........................
/*
function Counter() {
    this.count = 0;
}
Counter.prototype.next = function() {
    return this.count;
}
Counter.prototype.current = function() {
    return ++this.count;
}
let counter = new Counter();
console.log(counter.current());                      // 1
*/










//________________________________________________________Functions that uses Arguments Objects_____________________________________________________________

/*
const concat = (seperator) => {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(seperator);
}
*/

//         Instead of this We have to use Regular or Treditional Function

function concat(seperator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(seperator);
}