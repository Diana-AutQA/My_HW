/*
выведи все элементы массива в консоль с помощью метода **`forEach`**

```javascript
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
```

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

*/
//----------arrow function-----
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

fibonacci.forEach((value) => console.log (`${value} is fibonacci`))

//----------function declaration----

function printFib_El(element) {
    console.log(element);
  }
  
  fibonacci.forEach(printFib_El);