/* Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.


const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. Реализуйте оба варианта, когда результирущее значение true или false
*/

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
}
if (sum % 2 === 0) {
    console.log("The sum of squares of values in the array is even.");
} else {
    console.log("The sum of squares of values in the array is odd.");
}