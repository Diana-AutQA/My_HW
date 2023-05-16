const direction = 'юг';

switch (direction) {
  case 'юг':
    console.log('На юг пойдешь, счастье найдешь');
    break;
  case 'север':
    console.log('На север пойдешь, много денег найдешь');
    break;
  case 'запад':
    console.log('На запад пойдешь, верного друга найдешь');
    break;
  case 'восток':
    console.log('На восток пойдешь, разработчиком станешь');
    break;
  default:
    console.log('Вы ввели неверные данные. Попробуйте еще раз.');
}