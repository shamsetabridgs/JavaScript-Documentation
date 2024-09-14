//.............................................................Introduction......................................................
/*
if (condition1) {
  // ...
} else if (condition2) {
  // ...
} else if (condition3) {
  //...
} else {
  //...
}
*/

/*
  +---------+        
       |  Start  |        
       +----+----+        
            |             
       +----v----+        
       |Condition1|       
       +----+----+        
     False/      \True     
      /            \       
+----v----+     +----v----+ 
| Else    |     |  If      |
|  Block  |     | Block    |
+----+----+     +----+----+ 
      |             
+----v----+              
|Condition2|              
+----+----+              
False/      \True        
 /            \          
+----v----+  +----v----+ 
| Else If |  | If Block |
|  Block  |  +----+----+
+----+----+       |      
      |          End     
+----v----+              
|Condition3|              
+----+----+              
False/      \True        
 /            \          
+----v----+  +----v----+ 
| Else If |  | If Block |
|  Block  |  +----+----+
+----+----+       |      
      |          End     
      +----v----+         
       |   End   |         
       +---------+    
*/



//.........................................................IF ELSE IF Example..........................................................
/*
let month = 6;
let monthName;
if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);             // Jun
*/



let weight = 70, height = 1.72;
let bmi = weight / (height ** 2);
let weightStatus;

if ( bmi < 18.5 ) {
    weightStatus = 'Underweight';
} else if ( 18.5 <= bmi && bmi <= 24.9 ) {
    weightStatus = 'Healthy Weight';
} else if ( 25 <= bmi && bmi <= 29.9) {
    weightStatus = 'Overweight';
} else {
    weightStatus = 'Obesity';
}
console.log(weightStatus);                      // Healty Weight