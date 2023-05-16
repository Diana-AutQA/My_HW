/*### Task 14 💻

Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день. Текущее время часы:минуты:секунды.". Использовать только внутренние методы Date.*/

let date = new Date(); 
let month = date.getMonth() + 1; 
let year = date.getFullYear(); 
let day = date.getDate(); 
let hours = date.getHours();
let minutes = date.getMinutes(); 
let seconds = date.getSeconds(); 
console.log(`Текущая дата: ${month}/${year}/${day}. Текущее время ${hours}:${minutes}:${seconds}.`); 
