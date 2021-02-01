"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Введіть пароль :");
if (message === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else if (message === null) {
  message = "Скасовано користувачем!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}
alert(message);
