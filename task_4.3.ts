/*#### Task 3 💻

Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке. 
Если переданное число больше длины строки, то должно отобразиться сообщение: `Вы вышли за границу строки`
*/


let str3:String ="Hello people"
let indexPosition = 10;

if( str3.length < indexPosition)
 {console.log("Вы вышли за границу строки");}

 else {
    let symbol= str3.charAt(indexPosition);
    console.log(symbol);
  }