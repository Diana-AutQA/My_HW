/* С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

```javascript
    const numbers = [7, -4, 32, -90, 54, 32, -21]
```

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. */


const numbers:number[] = [7, -4, 32, -90, 54, 32, -21]

//-------arrow function
console.log (

    numbers.filter((value) => {
      if (value > 0) {
        return value;
      } else return false;
    }));
    

//------function declaration---

function filter_Elements(number: number) {  

        return number > 0;
    
    };
    console.log(numbers.filter(filter_Elements));
