/*#### Task 9 💻

Дана произвольное число. Реализовать метод проверяющий является ли это число целочисленным или нет. Если является - вывести его, если нет - округлить до целой части. */

let num:number=25.5; 

if (Number.isInteger(num)) {
  console.log(num);} 

else {
  let wholeNum= Math.round(num);
  console.log(wholeNum);
}


