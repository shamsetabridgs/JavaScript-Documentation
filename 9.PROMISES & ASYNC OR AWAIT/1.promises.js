//____________________________________________________________Why JavaScript Promise____________________________________________________________
/*
function getUsers() {
    return [
        {username: 'john', email: 'john@gmail.com'},
        {username: 'jane', email: 'jane@gmail.com'}
    ];
}
function findUsers(username) {
    const users = getUsers();
    const user  = users.find((user) => user.username === username);
    return user;
}
console.log(findUsers('john'));                                     // { username: 'john', email: 'john@gmail.com' }
*/


/*
function getUsers() {
    let users = [];
    setTimeout(() => {
        users = [
            { username: 'john', email: 'john@gmail.com' },
            { username: 'jane', email: 'jane@gmail.com' }
        ];
    }, 1000);
    return users;
}
function findUsers(username) {
    const users = getUsers();   // A
    const user  = users.find((user) => user.username === username);   // B
    return user;
}
console.log(findUsers('john'));                                    // undefined
*/








//____________________________________________Using Callbacks to Deal With an Asynchronous Operation_________________________________________________

function getUsers(callback) {
    setTimeout(() => {
        callback([
            { username: 'john', email: 'john@gmail.com' },
            { username: 'jane', email: 'jane@gmail.com' }
        ]);
    }, 1000);
}
function findUsers(username, callback) {
    getUsers((users) => {
        const user = users.find((user) => user.username == username);
        callback(user);
    });
}
findUsers('john', console.log);                       // { username: 'john', email: 'john@gmail.com' }
