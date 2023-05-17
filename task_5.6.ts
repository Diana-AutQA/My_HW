/* Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

+ булевое значение
+ функцию **foo** которая выводит в консоль свое имя
+ функцию **boo** которая выводит в консоль свое имя

> Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo** */

//----------------------------------------------------------------------------------------

function fooboo(isFoo: boolean, foo: () => void, boo: () => void): void {
    if (isFoo) {
      foo();
    } else {
      boo();
    }
  }
  
  function foo(): void {
    console.log("foo");
  }
  
  function boo(): void {
    console.log("boo");
  }
  
  fooboo(true, foo, boo); // "foo"
  fooboo(false, foo, boo); // "boo"