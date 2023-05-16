/*```javascript
    let count = 42
    let userName = '42'
```
Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.*/

// -----------------version 1:------------
let count: number = 42;
let userName: String = "42";

let countToString = String(count);
let userNameToNumb = +userName;

console.log(typeof countToString);
console.log(typeof userNameToNumb);

/*---------version 2 :-----------------


let count = 42;
let userName = "42";

let countToString = count.toString();
let userNameToNum = Number(userName);
*/

/* -----------------version 3:-----------------

let count = 42
let userName = '42'

let countToString = "" + count
let userNameToNum = parseInt(userName);

*/
