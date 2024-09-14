//.................................................................Introduction............................................................................
/*
The break statement prematurely terminates a loop such as for, do...while, and while loop, a switch, or a label statement. Here's the syntax of the break statement.
*/

/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i == 2) {
        break;
    }
}                    // 0 1 2
*/

/*
for (i = 1; i <= 3; i++) {
    for(j = 1; j <= 3; j++) {
        if (i + j == 4) {
            break;
        }
        console.log(i, j)
    }
}
1 1
1 2
2 1
*/






//.......................................................................Break Statement in While Loop..................................................................
/*
let i = 0;
while (i < 5) {
    i++;
    console.log(i);
    if (i == 3) {
        break;
    }
}                        // 1 2 3
*/







//.........................................................................Break Statement in Do.....While Loop..............................................................
/*
let i = 0;
do {
    i++;
    console.log(i);
    if (i == 3) {
        break;
    }
} while( i < 5);            // 1 2 3
*/