/* #### Task 1 💻

Пользователь передает через переменную свою фамилию и имя. Выведите приветсвие `Привет <Имя> <Фамилия>` 5 раз используя для каждого варианта разный регистр

*/

let str:string="Diana";
let str1:string="Ponomarov";

console.log("Привет " , str.toLowerCase(),str1.toLowerCase())
console.log("Привет " + str.toUpperCase(),str1.toLowerCase())
console.log("Привет " + str.toUpperCase(),str1.toUpperCase())
console.log("Привет " + str.toLowerCase(),str1.toUpperCase())
console.log("Привет " + str,str1.toUpperCase())
