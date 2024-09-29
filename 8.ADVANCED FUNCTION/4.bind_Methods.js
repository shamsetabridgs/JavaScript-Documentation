//___________________________________________________________________________Introduction____________________________________________________________________________
/*
fn.bind(thisArgs[, arg1[, arg2,[, ...]]])
*/






//______________________________________________________________________Function Binding by bind() Methods__________________________________________________________
/*
let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};
setTimeout(person.getName, 1000)                                   // undefined
*/

/*
let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};
let f = person.getName;
setTimeout(f, 1000);                                              // Lost person context
*/

/*
let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};
setTimeout(function() {
    person.getName();
}, 1000);                                                      // john Doe  (after 1 seconds)
*/


//______________________Solution with bind() Methods________________________________
/*
let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};
let f = person.getName.bind(person);
setTimeout(f, 1000);                                          // John Doe  (after 1 seconds)
*/









//_________________________________________________________Borrow methods from Different Object________________________________________________________________

let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(`${this.name} runs at ${speed} mph.`);
    }
};
let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(`${this.name} flies at ${speed} mph.`);
    }
};
let run = runner.run.bind(flyer, 20);
run();                                                          // Flyer runs at 20 mph.