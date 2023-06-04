/*#### Task 3 💻

Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль. 
В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах. К примеру `This car has 3 doors and this is left-hand drive car`*/

class Car {
  constructor(private doors: number, private steeringSide: string) {}

  getCarInfo(): void {
    console.log(
      `This car has ${this.doors} doors and this is ${this.steeringSide} car.`
    );
  }
}

const car1 = new Car(3, "left-hand drive");
const car2 = new Car(5, "right-hand drive");

car1.getCarInfo();
car2.getCarInfo();
