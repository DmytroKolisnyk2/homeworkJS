"use strict";
console.log("task-4");

const credits = 23580;
const pricePerDroid = 3000;
let number = prompt("Скільки дроїдів ви хочете купити ?");
number = +number;
if (Number.isNaN(number)) {
  console.log("Ви ввели не число");
} else {
  let totalPrice = number * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else if (number === null) {
    console.log("Скасовано користувачем!");
  } else {
    console.log(
      `Ви купили ${number} дроїдів, на рахунку залишилося ${
        credits - totalPrice
      } кредитів.`
    );
  }
}
