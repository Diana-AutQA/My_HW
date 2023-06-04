/*#### Task 1 💻

>> Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. v 
>> Конструкт родительского класса принимает переменные марку авто и тип двигателя. 
>> Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто.
>> Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>.
>> Approximetly cost of the car is <carCost>`. (В задании используйте не только public модификатор, где это возможно)

*/

class Car {
    constructor(public carBrand: string, public engineType: string) {}
  }
  
  class SportCar extends Car {
    constructor(public carBrand: string, public engineType: string, public maxSpeed: number) {
      super(carBrand, engineType);
    }
  
    getMaxSpeed(): number {
      return this.maxSpeed;
    }
  }
  
  class LuxuryCar extends Car {
    constructor(public carBrand: string, public engineType: string, public carCost: number) {
      super(carBrand, engineType);
    }
  
    getCarCost(): number {
      return this.carCost;
    }
  }
  
  const mazda = new SportCar('mazda', 'V8', 350);
  const BMW = new LuxuryCar('BMW', 'V12', 500000);
  
  console.log(`This is ${mazda.carBrand}. It has ${mazda.engineType} engine and max speed equal to ${mazda.getMaxSpeed()}.`);
  console.log(`Approximately cost of the car is ${BMW.getCarCost()}.`);
  