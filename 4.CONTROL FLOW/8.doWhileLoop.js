//.........................................................Introduction.......................................................
/*
do {
    statement;
} while(expression);
 */

/*
       ┌──────────────┐
       │  Start Loop  │
       └───────┬──────┘
               │
     ┌────────▼─────────┐
     │   Execute Block  │
     └────────┬─────────┘
               │
     ┌────────▼─────────┐
     │   Condition?     │
     └───────┬───────▲──┘
             │       │
           False    True
             │       │
    ┌────────▼───────┘
    │    End Loop    │
    └────────────────┘
*/




//..........................................................Simple Example.................................................
/*
let count = 0;
do {
    console.log(count);
    count++;
} while (count <= 5);
//  0 1 2 3 4 5
*/





//.........................................................Guessing Number..................................................
/*
const min = 1, max = 10;
let secretNumber   = Math.floor(Math.random() * (max - min + 1) + min);
let guessess       = 0;
let number         = 0;
do {
    let input = prompt(`Please enter a number between ${min} and ${max} `);
    number    = parseInt(input);
    guessess++;
    if (number > secretNumber) {
        console.log(`Secret number is less than ${number}`);
    } else if (number < secretNumber) {
        console.log(`Secret Number is greater than ${number}`);
    } else if (number == secretNumber) {
        console.log(`Bravo! you're correct after ${guessess} guess(es).`);
    }
} while (number != secretNumber); 
 */