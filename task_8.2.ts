/* Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

> ['member 1: Darya', 'member 2: Masha', ... etc]

```javascript
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
```

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

//---------------`function declaration`-------------


function createMember(name, index) {
  const memberNumb= index + 1;
  return `member ${memberNumb}: ${name}`;
}

console.log(users.map(createMember));

//---------------`arrow function`-------------

const members = users.map((name, index) => `member ${index + 1}: ${name}`);
console.log(members);

