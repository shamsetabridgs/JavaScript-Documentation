//.......................................................Introduction...............................................................
/*
function say(message = 'Hi') {
    console.log(message);
}
say();         // Hi
say('Hello');  // Hello
*/



//....................................................Arguments vs Parameters........................................................
/*
function add(x, y) {               // x and y are the parameter of add() functions
    return x + y;
}
add(100, 200);                     // 100 and 200 are the arguments of the add() functions
*/




//...........................................Setting JavaScript Default Parameters for a Function.....................................
/*
function say(message = 'Hi') {
    console.log(message);
}
say();                           // Hi
say(undefined);                  // Hi
say('Hello');                    // Hi
*/





//....................................................Passing Undefined Arguments.........................................................

function createDiv(height = '100px', width = '100px', border = 'solid 1px red') {
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width  = width;
    div.style.border = border;
    document.body.appendChild(div);
    return div;
}
createDiv()
createDiv(undefined, undefined, 'solid 5px blue');