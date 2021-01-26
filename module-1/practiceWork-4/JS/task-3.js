"use strict";

const userName = prompt("Введіть ваше імʼя").length;
const userSurname = prompt("Введіть ваше прізвище").length;
if (userName > 4 && userSurname > 5) {
  alert(userName + userSurname);
} else {
  alert("УПС");
}
