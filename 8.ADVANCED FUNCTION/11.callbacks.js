//_________________________________________________________________What are CallBacks_______________________________________________________________
/*
function filter(numers) {
    let result = [];
    for (const number of numbers) {
        if (number % 2 != 0) {
            result.push(number);
        } 
    }
    return result;
}
let numbers = [1, 2, 3, 4, 5, 6];
console.log(filter(numbers));                // [ 1, 3, 5 ]
*/

/*
function isOdd(number) {
    return number % 2 != 0;
}
function filter(numbers, fn) {
    let result = [];
    for(const number of numbers) {
        if (fn(number)) {
            result.push(number);
        }
    }
    return result;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filter(numbers, isOdd));         // [ 1, 3, 5, 7, 9 ]
*/


//....................More advanced way
/*
function isOdd(number) {
    return number % 2 != 0;
}
function isEven(number) {
    return number % 2 == 0;
}
function filter(numbers, fn) {
    let result = [];
    for (const number of numbers) {
        if (fn(number)) {
            result.push(number);
        }
    }
    return result;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filter(numbers, isOdd));                            // [ 1, 3, 5, 7, 9 ]
console.log(filter(numbers, isEven));                           // [ 2, 4, 6, 8 ]
*/


//....................Callback can be anonymous
/*
function filter(numbers, callback) {
    let result = [];
    for (const number of numbers) {
        if (callback(number)) {
            result.push(number);
        }
    }
    return result;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers = filter(numbers, function(number) {
    return number % 2 != 0;
});
console.log(oddNumbers);                          // [ 1, 3, 5, 7, 9 ]
*/

//...................ES6 can give more elegant way
/*
function filter(numbers, callback) {
    let result = [];
    for (const number of numbers) {
        if (callback(number)) {
            result.push(number);
        } 
    }
    return result;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers = filter(numbers, (number) => number % 2  != 0);
console.log(oddNumbers);                                        // [ 1, 3, 5, 7, 9 ]
*/








//___________________________________________________________________Synchronous Callbacks____________________________________________________________________
// isOdd()  .....     isEven()  .....   filter()    are the synchronos callback functions










//___________________________________________________________________Asynchronous Callbacks___________________________________________________________________
/*
function download(url) {
    //...............
}
function process(picture) {
    //...............
}
download(url);
process(picture);
*/


/*
function download(url) {
    setTimeout(() => {
        //..................script to download the picture here
        console.log(`Downloading ${url}...........`);
    }, 1000);
}
function process(picture) {
    console.log(`Precessing ${picture}...........`);
}
let url = 'https://www.javascript.com/pic.jpg';
download(url);                                    // Precessing https://www.javascript.com/pic.jpg...........
process(url);                                     // Downloading https://www.javascript.com/pic.jpg...........
*/


//.....................To resolve this issue
/*
function download(url, callback) {
    setTimeout(() => {
        // srcipt to download the picture here
        console.log(`Downloading ${url}`);

        // process the picture once it is completed
        callback(url);
    }, 1000);
}
function process(picture) {
    console.log(`Processing ${picture}`);
}
let url = 'https://www.javascript.com/pic.jpg';
download(url, process);                                        
// Downloading https://www.javascript.com/pic.jpg
// Processing https://www.javascript.com/pic.jpg
*/








//______________________________________________________________Nested callbacks and the Pyramid of Doom_______________________________________________________________

function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading ${url}...........`);
        callback(url);
    }, 1000);
}
const url1 = 'https://www.javascript.com/pic1.jpg';
const url2 = 'https://www.javascript.com/pic2.jpg';
const url3 = 'https://www.javascript.com/pic3.jpg';
download(url1, function(url) {
    console.log(`Processing ${url}`);
    download(url2, function(url2) {
        console.log(`Processing ${url}`);
        download(url3, function(url) {
            console.log(`Processing ${url}`);
        })
    })
})