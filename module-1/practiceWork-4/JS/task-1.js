"use strict";
console.log("task-1");

const result = prompt("Введіть число від 55 до 99 включно:");
if (55 < result && result <= 99) {
  console.log("Число потрапляє в діапазон");
} else {
  console.log("Число не потрапляє в діапазон");
}
