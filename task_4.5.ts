/* #### Task 5 💻

Дана строка 'я учу typescript!'. Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).*/


let str0:String='я учу typescript!';

console.log (str0.slice(2,5),str0.slice(6,15));
console.log (str0.substring(2,5),str0.substring(6,15));
console.log (str0.slice(2,5),str0.substring(6,15));
console.log (str0.slice(2,5),str0.substring(6,15));
console.log (str0.slice(2,-11),str0.substring(6,15));
console.log (str0.slice(2,5))
console.log (str0.slice(6))