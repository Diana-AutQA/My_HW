/*Имеется три переменные:

```javascript
  let a = 1
  let b = 2
  let c = "белых медведей"
```
Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.
*/

// -----------------version 1:-------------------
let a1 :number= 1;
let b1 :number= 2;
let c1 :String= "белых медведей";

let d1 = String(a);
let e1 = String(b);
console.log(d1 + e1 +" " + c1);

/* -----------------version 2:-----------------

let result = a.toString() + b.toString() + " " + c;
console.log(result); // "12 белых медведей"

*/