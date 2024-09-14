//.............................................................Introduction..........................................................
/*
switch(expression) {
    case value1 :
        statement1;
        break;
    case value2 :
        statement2;
        break;
    case value3 :
        statement3;
        break;
    case value4 :
        statement4;
        break;
    case value5 :
        statement5;
        break;
    default:
        statement;
}
*/

// Technically, the switch statement is equivalent to the following if-else-if statement:
/*
if (expression === value1) {
    statement1;
} else if (expression === value2) {
    statement2;
} else if (expression === value3) {
    statement3;
} else {
    statement;
}
*/





//...........................................................Example of Switch Case..........................................................
/*
let day = 3;
let dayName;
switch(day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}
console.log(dayName);        // Tuesday
*/






//.................................................Day Count by Month Using Switch Statement............................................................

let year = 2016;
let month = 2;
let dayCount;
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30
        break;
    case 2:
        if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
            dayCount = 29;
        } else {
            dayCount = 28;
        }
        break;
    default:
        dayCount = 'Invalid Month';   // invalid month
}
console.log(dayCount);             // 29