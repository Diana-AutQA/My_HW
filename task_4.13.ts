/*#### Task 13 💻

Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне. Диапазон задается аргументами фунции*/

let min = 0.5;
let max = 0.25;

let randomNumber = Math.random() * (max - min) + min;

console.log(randomNumber);