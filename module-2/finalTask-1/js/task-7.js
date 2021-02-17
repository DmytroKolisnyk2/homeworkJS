console.log("task-7");
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  let result;
  login.length >= 4 && login.length <= 16 ? (result = true) : (result = false);
  return result;
};

const isLoginUnique = function (allLogins, login) {
  let result;
  allLogins.includes(login) ? (result = false) : (result = true);
  return result;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return console.log("Помилка! Логін повинен бути від 4 до 16 символів");
  }
  if (!isLoginUnique(allLogins, login)) {
    return console.log('Такий логін уже використовується!');
  }
  return console.log('Логін успішно доданий!');
};

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
