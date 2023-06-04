/* #### Task 2 💻
Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`. И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя */

class Person {
    constructor(private name: string) {}
  
    sayName(): void {
      console.log(`My name is ${this.name}.`);
    }
  }
  
  
  const person1 = new Person('Diana');
  const person2 = new Person('Max');
  
  person1.sayName();
  person2.sayName();
  
