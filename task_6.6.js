/* 

#### Task 6 🖥

Создать валидатор, 2 метода: валидатор и логин. Первый метод принимают у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
Второй метод принимает данные пользователя и объект зарегестрированного пользователя. Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**. 

*/
let registeredUsers = {};

function validator(login, password) {
  registeredUsers[login] = password;
}

function login(login, password) {
  if (registeredUsers[login] === password) {
    console.log("Добро пожаловать!");
  } else {
    console.log("Неверный логин или пароль.");
  }
}
  
// User registration
validator("user123", "password123");

// User Login
login("user123", "password123"); 