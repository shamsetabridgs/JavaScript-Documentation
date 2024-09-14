//.................................................................Introduction...........................................................
/*
if( condition ) {
  // ...
} else { 
  // ...
}
*/
/*
       +---------+        
       |  Start  |        
       +----+----+        
            |             
       +----v----+        
       | Condition|       
       +----+----+        
     False/      \True     
      /            \       
+----v----+     +----v----+ 
| Else    |     |  If      |
|  Block  |     | Block    |
+----+----+     +----+----+ 
      \            /       
       +----v----+         
       |   End   |         
       +---------+        
*/





//..............................................................IF ELSE Statement Example....................................................
/*
let age = 18;
if ( age >= 18) {
    console.log('You can sign up!');
} else {
    console.log('You must be at least 18 to sign up!');
}
// You can sign up
*/

/*
let age = 16;
if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}
*/

/*
let age = 16, country = 'USA';
if ( age >= 16 && country == 'USA' ) {
    console.log('You can get a driving liscence!');
} else {
    console.log('You are not eligible to get a driving liscence!');
}
*/