//.......................................................Introduction...........................................................
/*
for (initializer; condition; iterator) {
    // statements
}
*/
/*
  ┌──────────────┐
  │    Start     │
  └───────┬──────┘
          │
  ┌───────▼───────┐
  │ Initialization│
  └───────┬───────┘
          │
  ┌───────▼───────┐
  │   Condition   │
  └───────┬───────┘
      True││False
          ││
  ┌───────▼───────┐
  │   Statement   │
  └───────┬───────┘
          │
  ┌───────▼───────┐
  │   Iterator    │
  └───────┬───────┘
          │
  ┌───────▼───────┐
  │     End       │
  └───────────────┘
  */




//........................................................Simple For Loop.....................................................
/*
for (let i = 1; i < 5; i++) {
  console.log(i);
}
*/  





//.....................................................Without the Initializer................................................
/*
let j = 1;
for (; j < 10; j += 2) {
    console.log(j);
}                             // 1 3 5 7 9
*/




//...................................................Without Condition........................................................
/*
for (let j = 1; ; j += 2)  {
    console.log(j);
    if (j > 10) {
        break;
    }
}                          // 1 3 5 7 9 11
*/




//..............................................Without Any Expression........................................................
/*
let j = 1;
for(;;) {
    if ( j > 10) {
        break;
    }
    console.log(j);
    j += 2;
}                        // 1 3 5 7 9
*/





//..........................................Without Loop Body Exmple........................................................
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
    console.log(sum)                      //  55