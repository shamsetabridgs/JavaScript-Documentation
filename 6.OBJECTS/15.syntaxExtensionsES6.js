//_____________________________________________________________Object Property Initializer Shorthand__________________________________________________________
/*
function createMachine(name, status) {                         //  Before ES6
    return {
        name : name,
        status : status
    };
}
*/

/*
function createMachine(name, status) {                         // in ES6
    return {
        name,
        status
    };
}
*/


/*
let name = 'Computer', status = 'On';
let machine = {
    name,
    status
};
console.log(machine);                           // {name: 'Computer', status: 'On'}
*/






//_______________________________________________________________Computed Property Name________________________________________________________________________
/*
let name = 'machine name';                              // before ES6
let machine = {
    [name]: 'server',
    'machine hours': 10000
};
console.log(machine[name]);                    // server
console.log(machine['machine hours']);         // 10000
*/
 
/*
let prefix  = 'machine';                                // in ES6
let machine = {
    [prefix + ' name'] : 'server',
    [prefix + ' hours']: '10000'
};
console.log(machine['machine name']);           // server
console.log(machine['machine hours']);          // 10000
*/







//____________________________________________________________Concise Method Syntax_____________________________________________________________________
/*
let server = {                                                // Before ES6
    name   : 'Server',
    restart: function() {
        console.log('The ' + this.name + ' is restarting.......');
    }
};
*/

/*                                                            // in ES6
let server = {
    name: 'Server',
    restart(){
        console.log('The ' + this.name + ' is restarting......');
    }
};
*/


let server = {
    name: 'Server',
    restart() {
        console.log('The ' + this.name + ' is restarting.....');
    },
    'starting up'() {
        console.log('The ' + this.name + ' is starting up!');
    }
};
server['starting up']();                       // The Server is starting up!
server.restart();                              // The Server is restarting.....
console.log(server.name)                       // Server