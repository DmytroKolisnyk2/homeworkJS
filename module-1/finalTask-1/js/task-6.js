"use strict";

let total = 0;
let enterNumber;
while (true) {
  enterNumber = prompt("Введіть число :");
  if (enterNumber === null) {
    break;
  }
  if (isNaN(enterNumber)) {
    console.log('true');
    alert("Було написано не число, спробуйте ще раз");
  } else {
    total += Number(enterNumber);
  }  
}
alert(`Загальна сума чисел дорівнює ${total}`);