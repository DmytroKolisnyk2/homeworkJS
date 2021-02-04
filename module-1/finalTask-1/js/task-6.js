"use strict";

let total = 0;
while (true) {
  let enterNumber = prompt("Введіть число :");
  if (enterNumber === null) {
    break;
  }
  const value= Number(enterNumber);
  if (Number.isNaN(value)) {
    alert("Було написано не число, спробуйте ще раз");
  } else {
    total += Number(value);
  }
}
alert(`Загальна сума чисел дорівнює ${total}`);
