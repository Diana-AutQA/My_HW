/*Создайте переменные:/

- количество секунд в минуте
- количество минут в часу
- количество часов в сутках
- количество суток в году

Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`** 
*/
let sec_In_Min:number = 60;
let mins_In_Hour:number = 60; 
let hours_in_Day:number = 24;
let days_in_Years:number= 365;

let myAge:number=35;

let totalSec:number=(((sec_In_Min*mins_In_Hour)*hours_in_Day)*days_in_Years);

let myAgeInSeconds:number= myAge*totalSec;

console.log(myAgeInSeconds);