/* Используя метод **`some`**  проверьте если в массиве есть  элемент кратный 3 и 5.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. Реализуйте оба варианта, когда результирущее значение true или false */

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

//--arrow function
console.log (numbers.some(value => 
   value % 3 ===0 && value %5 ===0))

//----function declaration

function isMultipleOfThreeAndFive(number) {
  return number % 3 === 0 && number % 5 === 0;
}

console.log(numbers.some(isMultipleOfThreeAndFive));
