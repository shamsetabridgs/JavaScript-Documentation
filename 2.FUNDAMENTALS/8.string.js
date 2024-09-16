//......................................Intoduction to JavaScript String..............................
// let str      = 'Hi';    // single quotes
// let greeting = "Hello"  // double quotes
// let name     = `John`;  // backtick
// let message  = `Hi I'm ${name}.`;
// console.log(message);


//.....................................Escaping Special Character.....................................
// 1. Windows line break: '\r\n'
// 2. Unix line break   : '\n'
// 3. Tab               : '\t'
// 4. BackSlash         : '\'



//..........................................Getting Length of the String...............................
// let str = 'Good Morning!';
// console.log('Length of the str : ' + str.length);         // Length of the str : 13



//..........................................Accessing Character........................................
// let str = 'Hello';
// console.log(str[0]);                      // H (Finding 1st Character)
// console.log(str[str.length -1]);          // o (Finding last Character)



//.....................................Concatenating strings via  + operator............................
// let name = 'John';
// let str = 'Hello ' + name;
// console.log(str);                         // Hello John

// let className  = 'btn';
//     className += ' btn-primary';
//     className += ' none';
// console.log(className)                       //  btn btn-primary none




//.....................................Converting Values to String.......................................
// let status = false;               console.log(status);             // false
// let str    = status.toString();   console.log(str);                // false -> string
// let back   = Boolean(str);        console.log(back)                // true



//........................................Comparing String...............................................
let result1 = 'a' < 'b';
console.log(result1);                 // true

let result2 = 'a' < 'B';
console.log(result2);                 // false