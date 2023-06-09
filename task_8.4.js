/*
спользуя метод **`reduce`** получите сумму всех чисел массива.

```javascript
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
```

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. */

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

//-----------

console.log (fibonacci.reduce ((prevValue, curValue) => prevValue + curValue ));

//-----------
function sumArray(prevValue, curValue) {
    return prevValue + curValue ;
}

console.log(fibonacci.reduce(sumArray));