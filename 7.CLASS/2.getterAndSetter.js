//_______________________________________________________Introduction_______________________________________________________________
/*
class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName == '') {
            throw 'The name cannot be empty!';
        }
        this.name = newName;
    }
}
let person = new Person('Jane Dane');
console.log(person);                        // Person { name: 'Jane Dane }
person.setName('Jane Smith');
console.log(person.getName());              // Jane Smith
*/

/*
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
let person = new Person('Jane Dane');
console.log(person.name);                            // jane Dane
person.name = 'Jane Smith';
console.log(person.name);                            // Jane Dane            --> Attempt to change the name, but cannot
*/






//____________________________________________________________Using GETTER in an Object Literal____________________________________________________________

let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting!`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0? undefined : this.attendees[count - 1];
    }
};
meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);