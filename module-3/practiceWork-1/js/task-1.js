console.log("task-1");

let user = {};
user.userName = "Dmytro";
user.age = 15;
user.showUserName = function () {
  return this.userName;
};
user.updateAge = function () {
  return this.age + 1;
};
console.log(user.showUserName());
console.log(user.updateAge());