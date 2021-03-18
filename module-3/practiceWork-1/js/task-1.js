console.log("task-1");

const user = {};
user.userName = "Dmytro";
user.age = 15;
user.showUserName = function () {
  return this.userName;
};
user.updateAge = function () {
  return this.age++;
};
console.log(user.showUserName());
user.updateAge();
console.log(user.age);
user.updateAge();
user.updateAge();
console.log(user.age);
