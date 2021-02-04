"use strict";

let total = 0;
while (true) {
  let enterNumber = prompt("Введіть число :");
  if (enterNumber === null) {
    break;
  }
  enterNumber = Number(enterNumber);
  if (Number.isNaN(enterNumber)) {
    alert("Було написано не число, спробуйте ще раз");
  } else {
    total += Number(enterNumber);
  }
}
alert(`Загальна сума чисел дорівнює ${total}`);
