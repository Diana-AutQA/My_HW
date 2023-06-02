/* Используя коллекцию **`Set`** создайте массив неповторяющийхся значений:
```javascript
    const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]
```

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/

const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];

//-function declaration ---

function uniqueArray(numbers) {
  const uniqueSet = new Set(numbers);
  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}

console.log(uniqueArray(numbers));

//--arrow function`---


const uniqueArray2 = numbers=> Array.from(new Set(numbers));

const uniqueNumbers = uniqueArray2(numbers);
console.log(uniqueNumbers);
