/*#### Task 12 💻

Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами фунции */

let min = 1;
let max = 10;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);