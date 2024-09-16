/*
            Logical Assignment Operators	                                     Logical Operators
        _________________________________________________________________________________________________

                   x ||= y	                                                        x || (x = y)
        _________________________________________________________________________________________________

                   x &&= y	                                                        x && (x = y)
        _________________________________________________________________________________________________

                   x ??= y	                                                        x ?? (x = y);
        _________________________________________________________________________________________________
*/



//..............................................Logical OR Assignment Operator(||=)...............................................
/*
let title;
title ||= 'untitled';
console.log(title);           // untitled
*/
/*
let title = 'JavaScript Awesome';
title ||= 'untitled';
console.log(title);           // JavaScript Awesome
*/
/*
document.querySelector('.search-result').textContent ||= 'Sorry! No result found';
*/




//.............................................Logical AND assignment Operator(&&=).....................................................
/*
let person = {
    firstname : 'Jane',
    lastname  : 'Doe'
};
person.lastname &&= 'smith';
console.log(person);            //  { firstname: 'Jane', lastname: 'smith' }
*/





//.............................................Nullish coalescing Assignment Operator(??=)...................................................

let user = {
    username : 'Satoshi'
};
user.nickname ??= 'Anonymous';
console.log(user);                   // { username: 'Satoshi', nickname: 'Anonymous' }