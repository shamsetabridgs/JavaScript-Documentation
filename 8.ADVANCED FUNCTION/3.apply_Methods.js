//______________________________________________________________Introduction__________________________________________________________________
/*
fn.apply(thisArgs, [args]);
*/







//_______________________________________________________________Simple apply() Method Example__________________________________________________________
/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
};
function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${message}`;
}
let result = greet.apply(person, ['Hello', 'How are you?']);
console.log(result);                                                    // Hello John How are you?
*/







//______________________________________________________Function Borrowing_______________________________________________________
/*
const computer = {
    name: 'Macbook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};
const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};
let result = computer.turnOn.apply(server);
console.log(result);                             //  The Dell PowerEdge T30 is On
*/








//_____________________________________________________________Append An Array to Another_______________________________________________________________

let arr = [1, 2, 3];
let numbers = [4, 5, 6];
arr.push.apply(arr, numbers);
console.log(arr);                           //   [ 1, 2, 3, 4, 5, 6 ]
